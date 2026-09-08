export const nav = {
  logo: "OMEGA",
  links: [
    { label: "The Problem", href: "#problem" },
    { label: "The System", href: "#system" },
    { label: "Features", href: "#features" },
    { label: "The Future", href: "#horizon" },
  ],
  cta: "Join the journey →",
};

export const hero = {
  eyebrow: "LOCAL-FIRST · NO TRACKERS",
  product: "OMEGA",
  headlineLead: "You choose the journey.",
  headlineAccent: "Omega stays with you.",
  identity: "PERSONAL JOURNEY ASSISTANT",
  copy: "Structure. Focus. Flow. A dark, physical cockpit for the long projects you refuse to abandon — built to hold your context until you're ready to continue.",
  cta: "Back the project →",
  micro: "LIFETIME ACCESS FROM $15",
};

export const problem = {
  headline: "We abandon the things we love.",
  paragraphs: [
    "You start learning a language. You start coding a side project. You start building a business.",
    "You make progress. Then life happens.",
    "A week passes, then a month. When you finally return, the context is gone — where you stopped, what you learned, what came next. The friction is too high.",
    "So you abandon it.",
  ],
  loop: {
    label: "THE LOOP OF GUILT",
    steps: ["Start", "Work", "Interrupt", "Lose Context", "Abandon", "Restart from Zero"],
  },
  broken: {
    label: "OMEGA BREAKS THE LOOP",
    steps: ["Start", "Work", "Pause", "Remember", "Return", "Continue"],
  },
};

export const shift = {
  headlineLead: "A tracker asks what you need to do.",
  headlineAccent: "Omega asks where you are.",
  left: { label: "EVERY OTHER TOOL ASKS", quote: "“What do you need to do today?”" },
  right: {
    label: "OMEGA ASKS",
    quote: "“Where are you in the journey you're building over time?”",
  },
};

export type Feature = {
  number: string;
  eyebrow: string;
  headline: string[];
  subline?: string;
  copy: string[];
  bullets: string[];
  asset: { id: string; name: string; width: number; height: number; ratio: string };
  glow?: boolean;
  extra?: { id: string; name: string; width: number; height: number; ratio: string };
  paths?: { title: string; copy: string }[];
};

export const features: Feature[] = [
  {
    number: "01",
    eyebrow: "STRUCTURE",
    headline: ["The Knowledge Tree"],
    subline: "Structure complex goals with unlimited depth.",
    copy: [
      "Flat lists cannot represent how long-term work actually exists.",
      "Omega lets a journey grow naturally from a large goal into branches and finally into concrete leaf-level work. Parent progress and expected time derive from the work below, while focus stays grounded at the actual edge of execution.",
    ],
    bullets: [
      "Parent progress derives from completed direct children.",
      "Expected duration belongs to executable leaf work and rolls upward.",
      "Focus sessions happen on leaf nodes, where work is concrete.",
    ],
    asset: { id: "ASSET 01", name: "KNOWLEDGE TREE", width: 580, height: 720, ratio: "31:38" },
  },
  {
    number: "02",
    eyebrow: "CO-CREATION",
    headline: ["Start with an idea.", "Build the structure later."],
    copy: [
      "A journey does not need to begin perfectly structured.",
      "Start with a goal, then either let Omega help draft the path or shape every level yourself.",
    ],
    bullets: [],
    paths: [
      {
        title: "Co-create with Gemini",
        copy: "Whisper a learning goal and Omega drafts a structured path you can refine.",
      },
      {
        title: "Craft from Scratch",
        copy: "Build the hierarchy node by node with complete control.",
      },
    ],
    asset: {
      id: "ASSET 02",
      name: "CHART A PATH / AI CREATION",
      width: 480,
      height: 620,
      ratio: "27:34",
    },
  },
  {
    number: "03",
    eyebrow: "FOCUS",
    headline: ["One active focus.", "Wherever you go."],
    subline: "Active Flow",
    copy: [
      "Only one active session exists globally.",
      "You can move through Journeys, Sparks, and Footprints without losing the thread of what you were doing. The active state remains visible and becomes the single source of truth for your current work.",
    ],
    bullets: [
      "Active Flow and Flow Paused make the current state visible.",
      "Tap from anywhere to return directly to execution.",
      "Pause without losing the work thread.",
    ],
    asset: {
      id: "ASSET 03",
      name: "ACTIVE FLOW PRODUCT SCREEN",
      width: 380,
      height: 520,
      ratio: "13:18",
    },
    glow: true,
  },
  {
    number: "04",
    eyebrow: "EXECUTION",
    headline: ["Desk Omega"],
    subline: "Quiet, immersive focus.",
    copy: [
      "When planning is finished, the interface should get out of the way.",
      "Desk Omega strips away navigational noise and turns the active session into a dedicated execution cockpit. Intended time and invested time stay visible without judgment.",
    ],
    bullets: [
      "LED-inspired timer with physical instrument character.",
      "Intended and Invested, side by side.",
      "Immersive focus mode for long sessions.",
    ],
    asset: {
      id: "ASSET 04",
      name: "DESK OMEGA COMPOSITION",
      width: 400,
      height: 580,
      ratio: "15:21",
    },
    glow: true,
  },
  {
    number: "05",
    eyebrow: "MEMORY",
    headline: ["Keep the work.", "Keep the context."],
    copy: [
      "The problem with returning is rarely remembering that you had work to do.",
      "The problem is remembering what happened while you were doing it.",
      "Omega lets meaningful session context travel with the work: reflections, revision notes, and analog material that can be attached to the journey.",
    ],
    bullets: [
      "Revision Notes connected to real work sessions.",
      "Text context preserved beside the work.",
      "Analog note attachments can bridge handwritten and digital thinking.",
    ],
    asset: {
      id: "ASSET 05",
      name: "REVISION NOTES DIALOG",
      width: 440,
      height: 580,
      ratio: "27:34",
    },
  },
  {
    number: "06",
    eyebrow: "PROGRESS",
    headline: ["Progress as evidence."],
    subline: "No cheap quotes. Just proof.",
    copy: [
      "Omega quietly aggregates the work you actually did.",
      "When you look back, you do not see a punishment system. You see accumulated sessions, invested hours, and the evidence that small returns became something tangible.",
    ],
    bullets: [
      "Footprints form a chronological record of accumulated work.",
      "Invested time is preserved as evidence of actual effort.",
      "No streaks to break.",
      "No red overdue alarms.",
    ],
    asset: {
      id: "ASSET 06",
      name: "FOOTPRINTS / HISTORY SCREEN",
      width: 480,
      height: 620,
      ratio: "13:18",
    },
  },
];

export const spaces = [
  {
    title: "Journeys",
    copy: "Your long-term paths of study, practice, and mastery.",
    asset: { id: "ASSET 07", name: "JOURNEYS", width: 420, height: 300, ratio: "7:5" },
  },
  {
    title: "Sparks",
    copy: "Spontaneous execution, side quests, and sudden inspiration.",
    asset: { id: "ASSET 08", name: "SPARKS", width: 420, height: 300, ratio: "7:5" },
  },
  {
    title: "Footprints",
    copy: "A chronological, non-judgmental record of accumulated hours and quiet progress.",
    asset: { id: "ASSET 09", name: "FOOTPRINTS PILLAR", width: 420, height: 300, ratio: "7:5" },
  },
];

export const systemFlow = {
  headline: [
    "Structure when you need clarity.",
    "Execute when you are ready.",
    "Return when life happens.",
  ],
  steps: [
    "JOURNEY",
    "CHART A PATH",
    "CHOOSE A LEAF",
    "ACTIVE FLOW",
    "DESK OMEGA",
    "REVISION / CONTEXT",
    "FOOTPRINTS",
    "RETURN",
  ],
};

export const localFirst = {
  eyebrow: "LOCAL-FIRST",
  headline: "Your journey stays yours.",
  copy: [
    "Omega is designed around local ownership and continuity.",
    "No surveillance framing. No attention-harvesting urgency. No product philosophy built around making you feel guilty for leaving.",
  ],
  statements: [
    "Local-first",
    "No trackers",
    "No big-tech surveillance framing",
    "Your work remains centered on your device",
  ],
};

export const horizon = {
  eyebrow: "THE HORIZON",
  headline: "Your adaptive companion.",
  copy: "Omega is not intended to remain a passive database. The long-term direction is a system that can learn from the structure and context of your work and become more useful without becoming noisy.",
  cards: [
    {
      status: "IN DEVELOPMENT",
      title: "Gemini AI Generator",
      copy: "Speak a goal or describe a complex journey. Omega helps turn it into a structured path ready to refine.",
    },
    {
      status: "PLANNED",
      title: "Smart Revision Notes",
      copy: "Extract and transform meaningful learning context into material that helps you revisit what you learned.",
    },
    {
      status: "THE FUTURE",
      title: "Personal Contextual Memory",
      copy: "Return after time away and recover the thread of the journey — not through nagging reminders, but through preserved context.",
    },
  ],
};

export const funding = {
  eyebrow: "FUND THE FUTURE OF OMEGA",
  headline: "Join the journey of Omega.",
  copy: [
    "Omega is being built independently, with craftsmanship and user sovereignty at the center.",
    "It is a long-term project — shaped through ideas, experiments, engineering, and the people who choose to follow its journey.",
    "There are many ways to become part of what comes next.",
  ],
  waysToJoinLabel: "WAYS TO JOIN",
  paths: [
    {
      title: "FUND",
      copy: "Help make continued development possible.",
    },
    {
      title: "SPONSOR",
      copy: "Support a specific part of the journey.",
    },
    {
      title: "COLLABORATE",
      copy: "Bring an idea, skill, or perspective to Omega.",
    },
  ],
  cta: "JOIN THE JOURNEY →",
};

export const finalStatement = {
  headline: "This is only the beginning.",
  copy: [
    "Like you, Omega does not know exactly what it will become. The journey is still being written.",
    "But it will keep moving forward.",
  ],
  emphasis: "You choose the journey. Omega stays with you.",
  cta: "Back the project today →",
};

export const footer = {
  logo: "OMEGA",
  statement: "Local-first. No trackers. Built for the long journey.",
  links: [
    { label: "Product", href: "#features" },
    { label: "Roadmap", href: "#horizon" },
    { label: "Contact", href: "#pricing" },
    { label: "Privacy", href: "#privacy" },
  ],
};
