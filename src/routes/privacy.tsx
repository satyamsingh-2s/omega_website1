import { createFileRoute, Link } from "@tanstack/react-router";

type PrivacySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const privacySections: PrivacySection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      'Omega ("Omega", "we", "our", or "us") is a productivity application designed to help users plan, estimate, organize, and track their work.',
      "This Privacy Policy explains how Omega handles information when you use the application.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "Omega does not require you to create an account or provide personal information such as your name, email address, phone number, or account credentials.",
      "Users may voluntarily enter information into Omega, including:",
    ],
    bullets: [
      "Project names and descriptions",
      "Tasks and subtasks",
      "Work estimates",
      "Work sessions and durations",
      "Pomodoro sessions",
      "Daily work records",
      "Planner information",
      "Notes and revision notes",
      "Files or images attached to notes",
      "Text or other information explicitly provided to Omega's AI features",
    ],
  },
  {
    title: "3. Local Storage",
    paragraphs: [
      "Omega stores application data locally on the user's Android device using local database and storage mechanisms.",
      "This may include projects, tasks, work sessions, Pomodoro records, daily records, planner information, notes, revision notes, and attached files or images.",
      "Omega does not operate an Omega-controlled personal cloud account or cloud database for this information.",
      "Deleting Omega's application data or uninstalling the application may remove locally stored application data, subject to Android's device and backup behavior.",
    ],
  },
  {
    title: "4. AI Features and Google Gemini",
    paragraphs: [
      "Omega provides optional AI-powered functionality using Google's Gemini API.",
      "When an AI feature is used, information necessary to process the user's request may be transmitted from the device to Google's Gemini service.",
      "This may include project, task, note, or other text information that the user explicitly provides to the AI feature.",
      "Omega does not transmit files or images attached to notes to Gemini. Such attachments are not provided to or accessible by Omega's current AI functionality.",
      "Users should avoid entering highly sensitive personal information into AI prompts unless they are comfortable with that information being transmitted to a third-party AI service.",
      "Information processed by Google is subject to Google's applicable terms and privacy policies.",
    ],
  },
  {
    title: "5. Files and Images",
    paragraphs: [
      "Omega allows users to attach files or images to supported notes.",
      "These attachments are stored locally on the user's device.",
      "Omega does not currently transmit these files or images to Gemini or to an Omega-controlled server.",
    ],
  },
  {
    title: "6. Notifications",
    paragraphs: [
      "Omega may request permission to send notifications.",
      "Notifications are used for application functionality such as reminders, timers, Pomodoro sessions, or other work-related events.",
      "Omega does not use notifications for advertising.",
    ],
  },
  {
    title: "7. Information Omega Does Not Collect",
    paragraphs: ["Omega does not intentionally collect:"],
    bullets: [
      "Precise location information",
      "Contacts",
      "Advertising identifiers for advertising purposes",
      "Account credentials",
      "Payment information",
      "Phone call information",
      "SMS messages",
      "Microphone recordings",
      "Camera data for background collection",
    ],
  },
  {
    title: "8. Analytics and Tracking",
    paragraphs: [
      "Omega does not currently use third-party analytics or advertising SDKs to track users across applications or websites.",
      "Omega does not sell user information.",
    ],
  },
  {
    title: "9. Third-Party Services",
    paragraphs: [
      "Omega currently uses Google's Gemini API for optional AI functionality.",
      "When a user uses functionality involving Gemini, information necessary to provide the requested AI functionality may be transmitted to Google.",
      "Third-party services operate under their own privacy policies and terms.",
    ],
  },
  {
    title: "10. Data Retention and Deletion",
    paragraphs: [
      "Omega does not maintain an Omega-controlled cloud database containing users' application data.",
      "Most Omega data remains on the user's device.",
      "Users can delete Omega's locally stored data through Android's application settings or by uninstalling Omega, subject to Android's device and backup behavior.",
      "Information submitted to third-party services such as Gemini may be subject to those services' own data retention and processing policies.",
    ],
  },
  {
    title: "11. Data Security",
    paragraphs: [
      "Omega uses Android's standard application storage and security mechanisms to protect locally stored application data.",
      "No method of electronic storage or transmission can be guaranteed to be completely secure.",
      "Users should avoid entering highly sensitive information into AI prompts.",
    ],
  },
  {
    title: "12. Children's Privacy",
    paragraphs: [
      "Omega is a general productivity application and is not specifically directed toward children.",
      "Omega does not knowingly collect personal information from children.",
    ],
  },
  {
    title: "13. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy when Omega's functionality or data practices change.",
      "When changes are made, the updated policy will include a revised effective date.",
    ],
  },
  {
    title: "14. Contact",
    paragraphs: ["Satyam Singh", "Email: satyamsingh92637@gmail.com"],
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Omega" },
      { name: "description", content: "Privacy Policy for Omega." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-void py-28 sm:py-36">
      <article className="container-omega mx-auto max-w-[900px]">
        <Link
          to="/"
          className="micro-label inline-flex text-amber transition-colors duration-150 hover:text-crisp focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
        >
          ← Back to Omega
        </Link>
        <header className="mt-12 border-b border-slate pb-12">
          <p className="micro-label text-amber">OMEGA · LEGAL</p>
          <h1 className="display-text mt-6 text-[48px] text-crisp sm:text-[68px]">
            Privacy Policy
          </h1>
          <dl className="mt-8 grid gap-3 text-[15px] text-crisp/60 sm:grid-cols-3">
            <div>
              <dt className="micro-label">Effective date</dt>
              <dd className="mt-1">12/09/2026</dd>
            </div>
            <div>
              <dt className="micro-label">Product</dt>
              <dd className="mt-1">Omega</dd>
            </div>
            <div>
              <dt className="micro-label">Developer</dt>
              <dd className="mt-1">Satyam Singh</dd>
            </div>
          </dl>
        </header>

        <p className="mt-10 border-l border-amber/50 pl-5 text-[16px] leading-relaxed text-crisp/65">
          This Privacy Policy explains how Omega handles information when you use the application.
        </p>

        <div className="mt-16 space-y-14">
          {privacySections.map((section) => (
            <section key={section.title}>
              <h2 className="display-text text-[28px] text-crisp sm:text-[34px]">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-crisp/65 sm:text-[17px]">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="space-y-2 border-l border-slate pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
