import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'ots_admin_session'
const secret = () => process.env.SUPABASE_JWT_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || 'development-only-secret'

function decodeBase64Url(value: string) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/')
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4)
  const binary = atob(padded)
  return Uint8Array.from(binary, (character) => character.charCodeAt(0))
}

function encodeBase64Url(value: ArrayBuffer) {
  const binary = String.fromCharCode(...new Uint8Array(value))
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function validSession(value?: string) {
  if (!value) return false
  const [payload, signature] = value.split('.')
  if (!payload || !signature) return false

  try {
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secret()),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify'],
    )
    const signatureBytes = decodeBase64Url(signature)
    const isValid = await crypto.subtle.verify('HMAC', key, signatureBytes, new TextEncoder().encode(payload))
    if (!isValid || encodeBase64Url(signatureBytes.buffer) !== signature) return false

    const parsed = JSON.parse(new TextDecoder().decode(decodeBase64Url(payload))) as { exp?: number }
    return Boolean(parsed.exp && parsed.exp > Date.now())
  } catch {
    return false
  }
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/admin/login') return NextResponse.next()
  if (!(await validSession(request.cookies.get(COOKIE_NAME)?.value))) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
  return NextResponse.next()
}

export const config = { matcher: ['/admin/:path*'] }
