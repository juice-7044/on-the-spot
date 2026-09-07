import { z } from 'zod'

export const applicationSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(160),
  experienceYears: z.coerce.number().int().min(0).max(60),
  position: z.enum(['Automotive Mechanic', 'Diesel Mechanic', 'Tire Technician']),
  hasTools: z.boolean(),
  hasCdl: z.boolean(),
  startDate: z.string().optional(),
  reference1Name: z.string().trim().max(120).optional(),
  reference1Phone: z.string().trim().max(30).optional(),
  reference2Name: z.string().trim().max(120).optional(),
  reference2Phone: z.string().trim().max(30).optional(),
  message: z.string().trim().max(2000).optional(),
  smsConsent: z.boolean().default(false),
  submissionKey: z.string().uuid().optional(),
})

export type ApplicationInput = z.infer<typeof applicationSchema>

export const statusOptions = ['New', 'Under Review', 'Accepted', 'Agreement Sent', 'Signed', 'Hired', 'Rejected'] as const
