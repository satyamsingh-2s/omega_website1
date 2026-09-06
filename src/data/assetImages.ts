import tree from "@/assets/itibj2itibj2itib.png.asset.json";
import creator from "@/assets/y10z4sy10z4sy10z.webp.asset.json";
import flow from "@/assets/y4c1tty4c1tty4c1.png.asset.json";
import desk from "@/assets/6ebms66ebms66ebm.png.asset.json";
import memory from "@/assets/v7hyyqv7hyyqv7hy.webp.asset.json";
import footprints from "@/assets/u8tlrru8tlrru8tl.webp.asset.json";
import launch from "@/assets/venv7qvenv7qvenv.png.asset.json";
import sparks from "@/assets/tr5bektr5bektr5b.png.asset.json";

type Img = { src: string; alt: string };

/** Real product imagery keyed by the asset contract IDs from the design spec. */
export const assetImages: Record<string, Img> = {
  "ASSET 01": { src: "/images/assest_knowledge.png", alt: "Omega Knowledge Tree with nested topics and progress" },
  "ASSET 02": { src: "/images/assest_gemini.png", alt: "Chart a Path — new workspace creation in Omega" },
  "ASSET 03": { src: "/images/assest_03.png", alt: "Active Flow session timer with intended and invested time" },
  "ASSET 04": { src: "/images/assest_desk_omega.png", alt: "Desk Omega task queue with today and future work" },
  "ASSET 05": { src: "/images/assest_05.png", alt: "Omega revision note preserving context between sessions" },
  "ASSET 06": { src: "/images/assest_06.png", alt: "Footprints — Omega session history and totals" },
  "ASSET 07": { src: "/images/journey.png", alt: "Journeys — structured long-term work in Omega" },
  "ASSET 08": { src: "/images/spark2.png", alt: "Sparks — unplanned projects tracked in Omega" },
  "ASSET 09": { src: "/images/footprint.png", alt: "Footprints — accumulated evidence of work" },
  "ASSET HERO": { src: launch.url, alt: "Omega launch screen: planned work, unplanned work, daily record" },
};
