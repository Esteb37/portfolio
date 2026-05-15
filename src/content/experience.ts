import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    role: "Research Intern",
    org: "GVLab — University of Tokyo",
    location: "Tokyo, Japan",
    period: "Feb 2026 – Present",
    current: true,
    bullets: [
      "Research on anticipatory human–robot interaction using biomechanical sensing and machine learning.",
      "Designing spatiotemporal ML models to infer human motion and intent from high-frequency force-plate sensor data.",
      "Building large-scale dataset pipelines for behavioral prediction models.",
      "Implementing real-time perception and tracking pipelines integrating sensor processing with robotics middleware.",
    ],
    tags: ["HRI", "ROS 2", "Spatiotemporal ML", "Force sensing"],
  },
  {
    role: "Research & Teaching Assistant",
    org: "Soft Robotics Laboratory, ETH Zürich",
    location: "Zürich, Switzerland",
    period: "Sept 2025 – Feb 2026",
    bullets: [
      "Dexterous manipulation and robot learning with anthropomorphic robotic hands.",
      "Built teleoperation and demonstration collection systems for large-scale manipulation datasets.",
      "Implemented imitation learning and reinforcement learning pipelines for dexterous manipulation.",
      "Developed sim-to-real training workflows using physics simulation and real robotic hardware.",
      "Mentored teams developing RL-based controllers for dexterous manipulation tasks.",
    ],
    tags: ["Imitation Learning", "RL", "MuJoCo", "Sim2Real"],
  },
  {
    role: "Software Engineering Intern — PyTorch / ExecuTorch",
    org: "Meta Platforms",
    location: "New York, USA",
    period: "Jun – Aug 2024",
    bullets: [
      "Developed open-source GPU tooling to identify hardware bottlenecks in ML workloads.",
      "Implemented matrix multiplication optimizations and low-bit (4-bit) quantization.",
      "Achieved ~70% speed improvements for edge deep-learning inference.",
    ],
    tags: ["PyTorch", "ExecuTorch", "CUDA", "Quantization"],
  },
  {
    role: "Software Engineering Intern — Core AI",
    org: "Meta Platforms",
    location: "Seattle, USA",
    period: "Jun – Aug 2023",
    bullets: [
      "Re-engineered a deep-learning image-enhancement algorithm for efficient CPU execution.",
      "Reduced runtime by ~99.7% through algorithmic and systems optimizations.",
    ],
    tags: ["C++", "CPU Optimization", "Computer Vision"],
  },
  {
    role: "Software Engineering Intern — WhatsApp Infrastructure",
    org: "Meta Platforms",
    location: "California, USA",
    period: "May – Jul 2022",
    bullets: [
      "Designed a distributed crash-report processing pipeline integrating logging and symbolication.",
      "Reduced crash-log upload latency by ~95% through asynchronous data pipelines.",
    ],
    tags: ["Distributed Systems", "Pipelines", "Infra"],
  },
];
