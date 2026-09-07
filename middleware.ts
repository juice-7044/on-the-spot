import { createHmac, timingSafeEqual } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'ots_admin_session'
const secret = () => process.env.SUPABASE_JWT_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || 'development-only-secret'

function validSession(value?: string) {
  if (!value) return false
  const [payload, signature] = value.split('.')
  if (!payload || !signature) return false
  const expected = createHmac('sha256', secret()).update(payload).digest('base64url')
  if (signature.length !== expected.length || !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false
  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString()) as { exp?: number }
    return Boolean(parsed.exp && parsed.exp > Date.now())
  } catch { return false }
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/admin/login') return NextResponse.next()
  if (!validSession(request.cookies.get(COOKIE_NAME)?.value)) return NextResponse.redirect(new URL('/admin/login', request.url))
  return NextResponse.next()
}

export const config = { matcher: ['/admin/:path*'] }
