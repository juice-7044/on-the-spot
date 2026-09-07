import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'ots_admin_session'
const secret = () => process.env.SUPABASE_JWT_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || 'development-only-secret'

export function createAdminSession(email: string) {
  const payload = Buffer.from(JSON.stringify({ email, exp: Date.now() + 1000 * 60 * 60 * 8 })).toString('base64url')
  const signature = createHmac('sha256', secret()).update(payload).digest('base64url')
  return `${payload}.${signature}`
}

export function verifyAdminSession(value?: string | null) {
  if (!value) return null
  const [payload, signature] = value.split('.')
  if (!payload || !signature) return null
  const expected = createHmac('sha256', secret()).update(payload).digest('base64url')
  if (signature.length !== expected.length || !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null
  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString()) as { email?: string; exp?: number }
    return parsed.email && parsed.exp && parsed.exp > Date.now() ? parsed.email : null
  } catch { return null }
}

export async function getAdminEmail() {
  return verifyAdminSession((await cookies()).get(COOKIE_NAME)?.value)
}

export { COOKIE_NAME }
