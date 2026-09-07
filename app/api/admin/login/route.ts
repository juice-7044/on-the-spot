import { NextResponse } from 'next/server'
import { compare } from 'bcryptjs'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { COOKIE_NAME, createAdminSession } from '@/lib/admin-auth'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const password = typeof body.password === 'string' ? body.password : ''
    if (!email || !password) return NextResponse.json({ error: 'Invalid email or password.' }, { status: 400 })

    const supabase = createServerSupabaseClient()
    const { data } = await supabase.from('admins').select('email,password_hash').eq('email', email).maybeSingle()
    if (!data || !(await compare(password, data.password_hash))) return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })

    const response = NextResponse.json({ ok: true })
    response.cookies.set(COOKIE_NAME, createAdminSession(data.email), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 60 * 60 * 8 })
    return response
  } catch {
    return NextResponse.json({ error: 'Unable to sign in right now.' }, { status: 500 })
  }
}
