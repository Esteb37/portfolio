import type { Pillar, Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Esteban Padilla Cerdio",
  tagline: "Robotics Research Engineer",
  focusAreas: [
    "Robot Learning",
    "Semantic Navigation",
    "Dexterous Manipulation",
  ],
  locations: ["Zürich", "Tokyo", "Mexico"],
  bio: [
    "AI and Robotics Engineer with a background in embodied intelligence, semantic navigation, dexterous manipulation and high-performance computing. I build end-to-end learning and mobility pipelines for robots — from anthropomorphic robotic hands to object-oriented navigation policies powered by vision–language models.",
    "Currently a research intern at GVLab, University of Tokyo, after assisting the Soft Robotics Lab at ETH Zurich. Previously interned four times at Meta on PyTorch/ExecuTorch, Core AI, and WhatsApp Infrastructure.",
  ],
  links: {
    github: "https://github.com/esteb37",
    linkedin: "https://www.linkedin.com/in/esteban-padilla-cerdio/",
    email: "esteban37padilla@gmail.com",
  },
  portrait: "hero-portrait.png",
};

export const pillars: Pillar[] = [
  {
    title: "Robot Learning",
    description:
      "Imitation learning and reinforcement learning on real anthropomorphic hardware — collecting demonstrations, training policies (ACT), and closing the sim-to-real gap with MuJoCo and IsaacSim.",
    tag: "// learning",
  },
  {
    title: "Semantic Navigation",
    description:
      "Open-world object-goal navigation grounded with vision–language models. Author of OpenFrontier (RSS 2026): visual frontiers as semantic anchors for training-free, language-conditioned exploration.",
    tag: "// navigation",
  },
  {
    title: "Dexterous Manipulation",
    description:
      "Tendon-driven anthropomorphic hands, teleoperation rigs and large-scale demonstration datasets. Built manipulation policies that go from a motion capture to a 17-DoF hand on a Franka arm.",
    tag: "// manipulation",
  },
];
