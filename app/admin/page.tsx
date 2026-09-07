import { redirect } from 'next/navigation'
import { getAdminEmail } from '@/lib/admin-auth'
import AdminDashboard from '@/components/admin-dashboard'

export const metadata = { title: 'Admin | On The Spot Repair', robots: { index: false, follow: false } }

export default async function AdminPage() { if (!(await getAdminEmail())) redirect('/admin/login'); return <AdminDashboard /> }
