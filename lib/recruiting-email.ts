const readRequiredEmail = (key: "RECRUITING_FROM_EMAIL" | "RECRUITING_OWNER_EMAIL") => {
  const value = process.env[key]?.trim()

  if (!value) {
    throw new Error(
      `Missing required recruiting email configuration: ${key}. Configure it on the server.`,
    )
  }

  return value
}

/** Server-only recruiting addresses. Never replace these with fallback addresses. */
export function getRecruitingEmailConfig() {
  const from = readRequiredEmail("RECRUITING_FROM_EMAIL")

  return {
    from,
    replyTo: process.env.RECRUITING_REPLY_TO?.trim() || from,
    owner: readRequiredEmail("RECRUITING_OWNER_EMAIL"),
  } as const
}

export function validateRecruitingEmailConfig() {
  try {
    getRecruitingEmailConfig()
    return { configured: true as const }
  } catch {
    return {
      configured: false as const,
      message:
        "Recruiting email is not configured. Set RECRUITING_FROM_EMAIL and RECRUITING_OWNER_EMAIL on the server.",
    }
  }
}

export const recruitingEmailEnvironmentKeys = [
  "RECRUITING_FROM_EMAIL",
  "RECRUITING_REPLY_TO",
  "RECRUITING_OWNER_EMAIL",
] as const
