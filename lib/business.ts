// Central source of truth for On The Spot Repair Service & Tires contact info.
// Update the phone number here and it propagates everywhere it is referenced.
export const PHONE = {
  /** Visible, human-readable number for on-page text. */
  display: '478-818-3967',
  /** Clickable tel: link value. */
  tel: 'tel:+14788183967',
  /** Clickable sms: link value. */
  sms: 'sms:+14788183967',
  /** E.164 value for structured data / schema / technical fields. */
  e164: '+14788183967',
} as const

export const AFTER_HOURS_FEE_NOTE = '($250 call-out fee applies)'
