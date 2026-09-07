Fix and complete the recruiting application experience for the existing On The Spot Repair project.

IMPORTANT:
- Inspect the existing implementation before editing.
- Keep the current black/red visual design and careers-page content.
- Do not create a second application form.
- Do not replace or break the existing Supabase, Resend, admin authentication, applications dashboard, agreement, or rejection functionality.
- The production project uses Next.js 16.2.0 App Router.
- The canonical production domain is:
  https://www.onthespotrepairservicestires.com
- Do not use the incorrect “repairservicetires.com” spelling.

CURRENT DUPLICATION:
The careers page currently contains:
1. A short mailto form inside components/careers-page.tsx.
2. A second database-connected form rendered from components/careers-form.tsx.

Remove both visible form experiences and replace them with ONE conversational application assistant on /careers.

CONVERSATIONAL APPLICATION ASSISTANT:
Build a polished chat-style application component that asks one question at a time. This should be a deterministic conversational wizard, not a free-form LLM. Do not require an AI API or model.

The assistant should:
- Introduce itself as the On The Spot Hiring Assistant.
- Explain that it will take approximately 3–5 minutes.
- Display one question at a time.
- Show progress, such as “Step 3 of 11.”
- Allow Back, Continue, and Edit Answer.
- Preserve answers when navigating backward.
- Validate each answer before continuing.
- Be fully usable by keyboard and screen readers.
- Use an aria-live region for new questions and validation messages.
- Work properly on mobile.
- Never ask for Social Security numbers, banking information, date of birth, medical information, protected-class information, or other sensitive information.
- Clearly state that submitting an application does not guarantee employment.

Collect these existing application fields:
1. Full name
2. Email
3. Phone
4. Position:
   - Automotive Mechanic
   - Diesel Mechanic
   - Tire Technician
5. Years of experience
6. Whether the applicant has their own tools
7. Whether the applicant has a CDL
8. Earliest available start date
9. Resume PDF upload, optional, maximum 5 MB
10. Reference 1 name and phone, optional
11. Reference 2 name and phone, optional
12. Anything else the applicant wants the hiring team to know, optional
13. SMS consent as a separate unchecked checkbox

SMS consent wording:
“I agree to receive transactional text messages from On The Spot Repair about my job application and onboarding. Message and data rates may apply. Reply STOP to opt out.”

Do not require SMS consent to submit an application.

Before submission:
- Show a review screen containing all answers.
- Let the applicant edit any answer.
- Require an explicit “Submit Application” action.
- Disable duplicate submissions while the request is processing.

SUBMISSION:
Continue submitting to the existing /api/applications endpoint.
Continue validating with the existing applicationSchema.
Extend the schema and database only as necessary for smsConsent.
Keep the existing secure PDF checks.
Keep Supabase service-role credentials server-side.
Never expose SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, SMS credentials, or session secrets to client components.
Do not log applicant personal information.

After successful submission:
- Replace the chat with a confirmation state.
- Redirecting to /careers/thank-you is optional, but do not both redirect and display conflicting success screens.
- Send the applicant’s existing Resend confirmation email.
- Send the owner’s existing new-application notification email.
- If smsConsent is true and an SMS provider is configured, send a short transactional confirmation text.
- If email or SMS delivery fails after the application is saved, do not create a duplicate application. Log only a safe error and keep the application stored.
- Use idempotency protection for all notification sends.

CAREERS PAGE:
- Remove the mailto form currently inside components/careers-page.tsx.
- Render the new conversational application assistant only once in that location.
- Remove the second CareersForm section currently added by app/careers/page.tsx.
- Keep the call, text, and email contact options beside the single application assistant.
- Update the FAQ answer so it says applicants can use the Hiring Assistant below.
- Preserve the rest of the careers-page layout and SEO content.
- Ensure there is only one element using id="apply".
- All “Apply” calls to action should scroll to or link to /careers#apply.

ADMIN APPROVAL AND ONBOARDING:
The current dashboard status dropdown includes:
New, Under Review, Accepted, Agreement Sent, Signed, Hired, and Rejected.

Do not automatically send onboarding merely because a dropdown value changes accidentally.

Add a clear confirmation flow:
- When the owner selects Accepted, show a confirmation dialog:
  “Approve this applicant and send onboarding instructions?”
- Buttons:
  - Cancel
  - Approve & Send Onboarding
- Only after confirmation should the PATCH request update the status to Accepted and send onboarding.
- Display a success or failure message in the dashboard.
- Prevent duplicate onboarding messages if Accepted is selected more than once.

When approval is confirmed:
- Set approved_at.
- Send an onboarding email using Resend.
- If the applicant opted into SMS and SMS is configured, send an onboarding SMS.
- Store onboarding_email_sent_at and onboarding_sms_sent_at timestamps.
- Never send the onboarding notification again when the corresponding timestamp already exists unless an explicit future “Resend” action is implemented.

Use this onboarding email structure:

Subject:
You’re Approved — Next Steps with On The Spot Repair

Body:
Hi [First Name],

Your application for the [Position] position has been approved. We’re excited to move forward with you.

Next steps:
1. Review the onboarding instructions provided by our hiring team.
2. Gather any requested employment documents.
3. Contact On The Spot Repair at 478-244-7008 if you have questions or need assistance.

A member of our team will contact you with scheduling and reporting details.

On The Spot Repair Service & Tires
990 2nd Street
Unadilla, GA 31091
478-244-7008

Do not state that the person is formally hired unless their status has separately been changed to Hired.

SMS:
“Hi [First Name], your application with On The Spot Repair has been approved. Please check your email for next steps or call 478-244-7008. Reply STOP to opt out.”

SMS PROVIDER:
First inspect whether this project already has an SMS provider or webhook integration.
- If one already exists, reuse it.
- If no SMS provider is configured, create a clean server-only SMS provider interface and leave SMS disabled without failing email or dashboard actions.
- Clearly list the exact environment variables or webhook URL still needed.
- Do not invent credentials.
- Do not expose an SMS control that falsely appears functional.

DATABASE MIGRATION:
Create a Supabase migration for any missing fields, including:
- sms_consent boolean not null default false
- approved_at timestamptz nullable
- confirmation_email_sent_at timestamptz nullable
- confirmation_sms_sent_at timestamptz nullable
- onboarding_email_sent_at timestamptz nullable
- onboarding_sms_sent_at timestamptz nullable

Make the migration additive and safe for existing application records.
Do not drop or recreate existing tables.
Do not delete current applications.

SECURITY AND RELIABILITY:
- Preserve generic login errors.
- Require the existing verified admin session for all admin approval actions.
- Validate status transitions server-side.
- Normalize applicant email addresses to lowercase before storage.
- Normalize phone numbers where practical without rejecting legitimate formats.
- Escape all applicant-provided content in emails and dashboard rendering.
- Do not use dangerouslySetInnerHTML for applicant content.
- Rate-limit application submissions or add a safe honeypot to reduce spam.
- Do not expose resumes publicly; preserve private Supabase Storage behavior.
- Do not add a hard-coded fallback secret in production.
- Do not mix Node crypto into proxy.ts.

TESTS AND VERIFICATION:
After implementation:
1. Run pnpm build.
2. Confirm there is only one application experience on /careers.
3. Test the complete conversational flow on desktop and mobile.
4. Test keyboard navigation and visible focus states.
5. Test validation and Back/Edit behavior.
6. Test a submission without a resume.
7. Test a PDF submission under 5 MB.
8. Confirm a non-PDF and oversized PDF are rejected.
9. Confirm the application is stored only once.
10. Confirm applicant and owner confirmation emails.
11. Confirm unauthorized users cannot access or PATCH admin application routes.
12. Confirm Accepted requires owner confirmation.
13. Confirm onboarding is sent only once.
14. Confirm SMS is sent only when consent is true and an SMS provider is configured.
15. Confirm existing rejection and agreement workflows still work.
16. List every changed file, migration, required environment variable, and any manual setup still required.

Do not publish or merge until the build succeeds. Show me the completed preview first.
