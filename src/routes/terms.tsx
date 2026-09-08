import { createFileRoute, Link } from "@tanstack/react-router";

type TermsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const terms: TermsSection[] = [
  {
    title: "1. About Omega",
    paragraphs: [
      "Omega is a personal assistant and productivity application designed to help users organize work, focus on tasks, remember important information, and recognize progress over time.",
      "Omega is designed to work alongside the user, not as a manager, productivity police, or decision-maker. You remain responsible for your goals, priorities, work structure, the appropriateness of information or suggestions, and the actions you ultimately take.",
      "Omega may evolve over time. Features, interfaces, workflows, and capabilities may change in future releases.",
    ],
  },
  {
    title: "2. Acceptance of These Terms",
    paragraphs: [
      "By accessing or using Omega, you agree to these Terms & Conditions. If you do not agree, you should not use Omega.",
      "If you use Omega on behalf of another person or organization, you represent that you have the authority to accept these Terms on their behalf.",
    ],
  },
  {
    title: "3. Eligibility",
    paragraphs: [
      "Omega is intended for users aged 14 years or older. By using Omega, you confirm that you meet this minimum age requirement. Additional age or eligibility requirements may apply where required by applicable law.",
    ],
  },
  {
    title: "4. Your Use of Omega",
    paragraphs: ["You agree to use Omega lawfully and responsibly. You must not:"],
    bullets: [
      "use Omega for unlawful purposes;",
      "attempt to gain unauthorized access to Omega or another user's information;",
      "interfere with the operation or security of Omega;",
      "intentionally introduce malicious software or harmful code;",
      "attempt to bypass security mechanisms except where applicable law expressly permits it;",
      "abuse, overload, or disrupt services supporting Omega; or",
      "use Omega to violate another person's rights.",
    ],
  },
  {
    title: "5. Your Content",
    paragraphs: [
      "Omega allows you to create and manage projects, tasks and project structures, sessions and work history, notes, revision or learning information, goals and priorities, planner information, progress information, and other content you choose to enter.",
      "You remain responsible for the content you create, enter, or otherwise provide through Omega, and must ensure that you have the necessary rights and permissions to provide it. Omega does not claim ownership of your personal project content merely because you use the application to create or manage it.",
    ],
  },
  {
    title: "6. Data Collection and Local-First Design",
    paragraphs: [
      "Omega is designed with a local-first approach. It currently does not collect, sell, or maintain a centralized database of personal user data for operating a user profile or tracking users. Omega is not designed around advertising profiles, behavioral tracking, or selling personal user information.",
      "Information you create within Omega may be stored locally on your device as part of the application's normal operation.",
      "Optional AI generation is powered by Gemini, a third-party AI service. When you choose to use AI generation, information required to perform your request, including project or goal information, may be transmitted to Gemini through the developer's API integration. This is used to generate roadmaps and other requested content, not to create a separate centralized personal-data profile.",
      "Information transmitted to Gemini is subject to the applicable terms, policies, and data-handling practices of the third-party provider. Review applicable Google/Gemini documentation if you have concerns about third-party transmission.",
    ],
  },
  {
    title: "7. AI-Powered Generation",
    paragraphs: [
      "Omega's AI functionality uses Gemini to generate roadmaps and content from information provided for a requested generation. AI-generated content may be inaccurate, incomplete, unsuitable for your situation, incorrectly structured, outdated, or different from what you expected.",
      "AI output is assistance, not a guarantee of correctness. You are responsible for reviewing generated roadmaps and content before relying on them or taking action. Omega does not guarantee that AI-generated content is accurate, complete, original, or appropriate for a particular purpose. Availability and behavior may depend on the third-party service.",
    ],
  },
  {
    title: "8. Productivity, Estimates, and Learning Information",
    paragraphs: [
      "Omega may provide project structures, time estimates, timers and sessions, Pomodoro functionality, daily work records, progress information, revision or learning information, planning tools, and AI-generated roadmaps or content. These features help you organize and understand your own work.",
      "They do not guarantee project completion, productivity, learning outcomes, academic or career results, a particular amount of progress, or completion within an estimated amount of time. Estimated duration is an estimate, not a promise. You remain responsible for interpreting and using information provided by Omega.",
    ],
  },
  {
    title: "9. No Professional Advice",
    paragraphs: [
      "Omega is a productivity and personal-assistant application. Unless explicitly stated otherwise, it does not provide medical, legal, financial, mental-health, educational certification, or other regulated professional advice. Information provided by Omega is not a substitute for advice from a qualified professional.",
    ],
  },
  {
    title: "10. Third-Party Services",
    paragraphs: [
      "Omega currently uses Gemini as a third-party AI service for AI-powered roadmap and content generation. Third-party services may have their own terms, privacy policies, processing practices, availability limitations, technical requirements, and usage restrictions.",
      "Omega is not responsible for the independent operation, policies, or availability of third-party services. Where information is transmitted to a third party as part of a feature you choose to use, that third party's applicable policies may also apply.",
    ],
  },
  {
    title: "11. Availability and Product Changes",
    paragraphs: [
      "Omega is independently developed and may change over time. The developer may add, modify, or remove features; change technical architecture or integrations; fix bugs; improve performance; or discontinue functionality.",
      "Omega is not guaranteed to be available at all times or to operate without errors. Interruptions may occur because of maintenance, updates, device issues, network conditions, third-party dependencies, or circumstances outside the developer's reasonable control.",
    ],
  },
  {
    title: "12. Current Release and Future Features",
    paragraphs: [
      "These Terms describe the current publicly released version of Omega as of 1 September 2026. Long-term product vision may include capabilities that are not currently available. Future, planned, experimental, or conceptual functionality is not a promise that a feature will be released.",
    ],
  },
  {
    title: "13. Experimental Features",
    paragraphs: [
      "Some functionality may be experimental, preview, beta, or otherwise unfinished. It may contain bugs, behave unexpectedly, change without notice, produce inaccurate results, have limited availability, or be removed. Do not rely on experimental functionality as your sole source of important information or records.",
    ],
  },
  {
    title: "14. Your Responsibility for Important Records",
    paragraphs: [
      "You are responsible for maintaining independent backups of information that is important to you. Because Omega uses local-first storage, device loss, accidental deletion, operating-system changes, application errors, corruption, or other technical events may result in data loss. Omega does not guarantee permanent preservation of locally stored information.",
    ],
  },
  {
    title: "15. Intellectual Property",
    paragraphs: [
      "Omega, including its software, design, branding, visual identity, interfaces, original text, graphics, and other original materials, is owned by or licensed to the developer, except for content belonging to users or third parties.",
      "These Terms do not transfer ownership of Omega or its intellectual property to you. You receive a limited right to use Omega for its intended purpose, subject to these Terms. You may not copy, reproduce, distribute, sell, sublicense, modify, or create derivative works from protected materials except where permitted by law or expressly authorized.",
    ],
  },
  {
    title: "16. Feedback",
    paragraphs: [
      "If you voluntarily provide feedback, suggestions, ideas, feature requests, or other comments about Omega, you allow the developer to use that feedback to improve the product without an obligation to compensate you. Providing feedback does not transfer ownership of your existing user content.",
    ],
  },
  {
    title: "17. Payments and Future Funding",
    paragraphs: [
      "Omega currently does not require a subscription and does not operate on a recurring subscription model. Optional ways to support development may be offered in the future, including funding, sponsorship, collaboration, or other participation.",
      "If paid functionality, subscriptions, or payment arrangements are introduced, separate pricing, billing, cancellation, refund, renewal, and payment terms may apply. Supporting Omega does not give a supporter ownership, intellectual-property rights, or control over product decisions unless expressly agreed in writing.",
    ],
  },
  {
    title: "18. Privacy",
    paragraphs: [
      "Omega's data practices are also described in its applicable Privacy Policy. The Privacy Policy should be read together with these Terms. The final Privacy Policy URL will be added when it is published.",
    ],
  },
  {
    title: "19. Suspension or Termination",
    paragraphs: [
      "You may stop using Omega at any time. Where applicable, the developer may suspend or terminate access if you materially violate these Terms, create a security or legal risk, attempt to abuse or disrupt the product, or continued access is not reasonably possible for technical, legal, or operational reasons.",
      "Where reasonably possible, notice may be provided before suspension. Termination does not automatically recover or restore locally stored information; you remain responsible for backups.",
    ],
  },
  {
    title: "20. Disclaimers",
    paragraphs: [
      'To the maximum extent permitted by applicable law, Omega is provided on an "as is" and "as available" basis. The developer does not guarantee that Omega will always be available, operate without errors, meet every individual requirement, preserve every piece of user data, produce accurate AI output, produce a particular productivity or learning outcome, or remain unchanged over time.',
      "You use Omega at your own discretion and risk. Nothing in these Terms excludes or limits rights or protections that cannot legally be excluded or limited.",
    ],
  },
  {
    title: "21. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, the developer of Omega will not be liable for indirect, incidental, special, consequential, exemplary, or similar damages arising from or related to your use of Omega, including loss of data, profits, productivity, opportunities, business, expected results, or other intangible losses.",
      "Nothing in these Terms limits liability where limitation is prohibited by applicable law.",
    ],
  },
  {
    title: "22. Indemnification",
    paragraphs: [
      "To the extent permitted by applicable law, you agree to be responsible for claims, losses, liabilities, damages, and expenses arising from your unlawful use of Omega, violation of these Terms, or violation of another person's rights.",
    ],
  },
  {
    title: "23. Governing Law",
    paragraphs: [
      "The governing law, jurisdiction, and applicable courts for these Terms will be completed and legally reviewed before publication as legally binding terms.",
    ],
  },
  {
    title: "24. Changes to These Terms",
    paragraphs: [
      "These Terms may be updated when Omega changes or when legal or operational requirements change. When material changes are made, reasonable notice may be provided where required. An updated version will include a new effective date.",
      "Your continued use of Omega after an updated version becomes effective means that you accept the updated Terms to the extent permitted by applicable law.",
    ],
  },
  {
    title: "25. Severability",
    paragraphs: [
      "If any provision of these Terms is found invalid or unenforceable, the remaining provisions continue to apply to the extent permitted by law.",
    ],
  },
  {
    title: "26. Entire Agreement",
    paragraphs: [
      "These Terms, together with applicable policies or additional terms referenced here, form the agreement governing your use of Omega unless a separate written agreement applies.",
    ],
  },
  {
    title: "27. Contact",
    paragraphs: [
      "Developer: Satyam Singh",
      "Email: satyamsingh92636@gmail.com",
      "Website: https://omega-website1.vercel.app",
    ],
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Omega" },
      { name: "description", content: "Terms and Conditions for Omega." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
            Terms &amp; Conditions
          </h1>
          <dl className="mt-8 grid gap-3 text-[15px] text-crisp/60 sm:grid-cols-3">
            <div>
              <dt className="micro-label">Effective date</dt>
              <dd className="mt-1">01/09/2026</dd>
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
          These Terms describe the current publicly released version of Omega. They should receive a
          final legal review before being relied upon as legally binding terms.
        </p>

        <div className="mt-16 space-y-14">
          {terms.map((section) => (
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

        <section className="mt-20 border-t border-slate pt-12">
          <p className="micro-label text-amber">OMEGA'S PRODUCT PHILOSOPHY</p>
          <p className="display-text mt-6 text-[28px] text-crisp italic sm:text-[36px]">
            You choose the journey. Omega stays with you.
          </p>
          <p className="mt-5 max-w-[720px] text-[16px] leading-relaxed text-crisp/65">
            Omega is designed to support your chosen direction: structure, focus, remembering what
            matters, and making progress visible. It does not promise that it will always understand
            you correctly.
          </p>
        </section>
      </article>
    </main>
  );
}
