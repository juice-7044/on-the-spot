import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { getAdminEmail } from '@/lib/admin-auth'

export async function GET() {
  if (!(await getAdminEmail())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.from('applications').select('*').order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: 'Unable to load applications.' }, { status: 500 })
  return NextResponse.json({ applications: data ?? [] })
}

export async function PATCH(request: Request) {
  if (!(await getAdminEmail())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json()
  if (typeof body.id !== 'string' || typeof body.status !== 'string') return NextResponse.json({ error: 'Invalid update.' }, { status: 400 })
  const allowed = ['New', 'Under Review', 'Accepted', 'Agreement Sent', 'Signed', 'Hired', 'Rejected']
  if (!allowed.includes(body.status)) return NextResponse.json({ error: 'Invalid status.' }, { status: 400 })
  const supabase = createServerSupabaseClient()
  const { error } = await supabase.from('applications').update({ status: body.status, notes: typeof body.notes === 'string' ? body.notes.slice(0, 5000) : undefined }).eq('id', body.id)
  if (error) return NextResponse.json({ error: 'Unable to update application.' }, { status: 500 })
  return NextResponse.json({ ok: true })
}
