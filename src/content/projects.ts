import type { Project, ProjectCategory } from "@/lib/types";

export const projectCategories: ProjectCategory[] = [
  "Dexterous Manipulation",
  "Semantic Navigation & SLAM",
  "Aerial Robotics & Control",
  "ML Systems & Performance",
];

export const projects: Project[] = [
  // === Dexterous Manipulation ===
  {
    id: "rapunzel-hand",
    title: "RAPUNZEL — Tendon-Driven Anthropomorphic Hand",
    subtitle:
      "17-DoF tendon-driven hand integrated with a Franka Panda arm, taught by demonstration.",
    category: "Dexterous Manipulation",
    period: "ETH Zürich · 2024 – 2025",
    org: "Soft Robotics Lab, ETH Zürich",
    summary:
      "Designed and built a 17-DoF tendon-driven robotic hand and the full software stack to teach it new skills. A motion-capture teleoperation rig collects high-quality manipulation demonstrations, which are then used to train imitation-learning policies (ACT) for multi-step tasks like grasping and object reorientation.",
    highlights: [
      "Built ROS 2 teleoperation and demonstration-collection pipeline.",
      "Collected 600+ demonstrations across multiple manipulation tasks.",
      "Trained ACT-based imitation-learning policies for autonomous execution.",
      "Enabled multi-step tasks including grasping and in-hand reorientation.",
    ],
    tags: [
      "ROS 2",
      "MuJoCo",
      "PyTorch",
      "Imitation Learning (ACT)",
      "MOCAP Teleop",
      "Franka",
    ],
    cover: "rapunzel-labelled.png",
    gallery: [
      "hand-spinner.gif",
      "hand-card.gif",
      "hand-teleop-arch.png",
      "hand-inference-arch.png",
      "hand-architecture.png",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Esteb37/dextrous_hand",
      },
    ],
    featured: true,
  },
  {
    id: "groot-hackathon",
    title: "Mistral AI × GR00T — Generalized VLA in 48 Hours",
    subtitle:
      "Built a vision–language–action pipeline on NVIDIA GR00T during the Mistral AI Robotics Hackathon in Paris.",
    category: "Dexterous Manipulation",
    period: "Paris · April 2025",
    org: "Mistral AI Physical AI & Robotics Hackathon",
    summary:
      "At the Mistral AI Robotics Summit & Hackathon in Paris (April 2025), our team developed a generalized vision–language–action pipeline using NVIDIA GR00T in 48 hours, running on Hugging Face's LeRobot arms and powered by Mistral AI models.",
    highlights: [
      "End-to-end VLA pipeline assembled from scratch in 48 hours.",
      "Integrated NVIDIA GR00T with LeRobot hardware and Mistral language models.",
      "Showcased real-time language-conditioned manipulation on a real robotic arm.",
    ],
    tags: ["VLA", "NVIDIA GR00T", "LeRobot", "Mistral AI", "Hackathon"],
    cover: "me-with-groot.jpg",
    gallery: ["me-with-groot.jpg", "groot.jpg"],
    links: [
      {
        label: "Final submission video",
        href: "https://huggingface.co/datasets/roboticshack/submissions/resolve/main/Team15-final.mp4",
      },
    ],
  },
  {
    id: "egoverse",
    title: "EgoVerse — Egocentric Human Demonstration Data",
    subtitle:
      "Contributed as a data collector to EgoVerse, a collaborative ecosystem for human-centric robot learning.",
    category: "Dexterous Manipulation",
    period: "ETH Zürich · 2025",
    org: "Soft Robotics Lab × EgoVerse consortium",
    summary:
      "EgoVerse is an ecosystem for robot learning from egocentric human data, built across four academic labs and three industry partners. With the Soft Robotics Lab team, I helped collect rich, diverse and consistent egocentric demonstrations that feed the shared dataset.",
    highlights: [
      "Egocentric data collection sessions with consistent task and protocol design.",
      "Contributed to a multi-lab, multi-partner robot-learning dataset.",
      "Direct experience operating capture hardware (Quest, body-worn cameras) for data scale.",
    ],
    tags: ["Data collection", "Egocentric", "Robot learning"],
    cover: "me-egoverse.png",
    gallery: ["me-egoverse.png"],
    links: [{ label: "egoverse.ai", href: "https://egoverse.ai" }],
  },

  // === Semantic Navigation & SLAM ===
  {
    id: "openfrontier",
    title: "OpenFrontier — VLM-Grounded Frontier Navigation",
    subtitle:
      "Training-free language-conditioned navigation that uses visual frontiers as semantic anchors. RSS 2026.",
    category: "Semantic Navigation & SLAM",
    period: "ETH Zürich · 2024 – 2026",
    org: "ETH Zürich · Microsoft Spatial AI Lab · University of Bonn",
    summary:
      "OpenFrontier reframes open-world navigation as a sparse subgoal identification problem. Detected visual frontiers are presented to a VLM in image space, which scores them for relevance to a natural-language goal. The grounded frontiers drive long-horizon, language-conditioned exploration without dense 3D mapping or fine-tuning, with strong zero-shot results across ObjectNav benchmarks and real-robot deployment.",
    highlights: [
      "77% success rate on ObjectNav benchmarks, zero-shot.",
      "Set-of-marks frontier prompting over single RGB observations.",
      "Real-world deployment on a mobile legged robot.",
    ],
    tags: ["VLMs", "ObjectNav", "Habitat", "Zero-shot", "Mobile robots"],
    cover: "openfrontier-1.png",
    gallery: ["openfrontier-1.png", "openfrontier-2.png"],
    links: [
      { label: "arXiv 2603.05377", href: "https://arxiv.org/abs/2603.05377" },
    ],
    featured: true,
  },
  {
    id: "ocslam",
    title: "Easy Object-Conscious SLAM",
    subtitle:
      "Lightweight semantic SLAM for mobile robots, fusing 2D LiDAR with YOLOv8 detection on a budget.",
    category: "Semantic Navigation & SLAM",
    period: "Ulm University · 2023",
    org: "Ulm University",
    summary:
      "OCSLAM augments classical SLAM with a layer of semantic awareness. By combining the 2D LiDAR data already used for mapping with YOLOv8 visual detections and wheel odometry, the system locates, classifies and tracks objects in the map while staying lightweight enough for resource-constrained robots.",
    highlights: [
      "Lightweight pipeline targeting mobile, resource-constrained robots.",
      "Fuses 2D LiDAR clustering with YOLOv8 detections and wheel odometry.",
      "Designed for deployment on small robots without dense 3D maps.",
    ],
    tags: ["SLAM", "YOLOv8", "LiDAR", "ROS"],
    cover: "ocslam-architecture.png",
    gallery: ["ocslam-architecture.png"],
    links: [
      {
        label: "Demo video",
        href: "https://www.youtube.com/watch?v=ok1H8ay-ka0",
      },
      {
        label: "Presentation",
        href: "https://www.youtube.com/watch?v=0UuDkLe7XX8",
      },
      {
        label: "Repository",
        href: "https://github.com/Esteb37/object-conscious-slam",
      },
    ],
  },
  {
    id: "puzzlebot-slam",
    title: "Autonomous Navigation PuzzleBot",
    subtitle:
      "ROS 1 + Gazebo autonomous navigation stack for a simulated differential-drive robot.",
    category: "Semantic Navigation & SLAM",
    period: "Tec de Monterrey · 2024",
    org: "Tec de Monterrey — Aranchubots team",
    summary:
      "End-to-end autonomous navigation of the PuzzleBot in Gazebo: ROS 1 package setup, simulation launch, RVIZ visualization for mapping and navigation, and supporting scripts for bug navigation, Kalman filtering and ArUco-based localization.",
    highlights: [
      "Full mapping + navigation stack in Gazebo simulation.",
      "Bug navigation, KF localization and ArUco marker detection scripts.",
      "Team project with three teammates (Aranchubots).",
    ],
    tags: ["ROS", "Gazebo", "Kalman Filter", "ArUco"],
    cover: "ocslam-architecture.png",
    links: [
      {
        label: "Demo video",
        href: "https://youtu.be/cKHk5dFEsmY",
      },
      {
        label: "Repository",
        href: "https://github.com/Esteb37/aranchubots_autonomousnavigation_puzzlebot",
      },
    ],
  },

  // === Aerial Robotics & Control ===
  {
    id: "atic",
    title: "ATIC — Distributed MPC for Modular Aerial Robots",
    subtitle:
      "ADMM-based decentralized MPC for the DRAGON articulated aerial platform.",
    category: "Aerial Robotics & Control",
    period: "ETH Zürich · 2025",
    org: "ETH Zürich",
    summary:
      "DRAGON is an articulated modular aerial robot of four interlinked modules with two-DoF joints and vectoring thrust apparatus. Centralized planning becomes computationally heavy at this scale. ATIC distributes the load: each module is treated as an independent, rigidly linked drone solving a constrained MPC problem coordinated through ADMM, producing scalable shape-shifting trajectories and distributed wrench control.",
    highlights: [
      "Distributed MPC with ADMM coordination across modules.",
      "Trajectory optimization for snake, line and U-shape configurations.",
      "Distributed wrench-control allocation validated in simulation.",
    ],
    tags: [
      "MPC",
      "ADMM",
      "CVXPY",
      "PyBullet",
      "Trajectory optimization",
      "Aerial robotics",
    ],
    cover: "atic-snake.gif",
    gallery: [
      "atic-snake.gif",
      "atic-ushape.gif",
      "atic-line.gif",
      "atic-wrench.gif",
    ],
  },

  // === ML Systems & Performance ===
  {
    id: "executorch",
    title: "ExecuTorch GPU Tooling & 4-bit Quantization",
    subtitle:
      "Open-source GPU tooling and matmul/quantization optimizations for edge ML inference at Meta.",
    category: "ML Systems & Performance",
    period: "Meta · 2024",
    org: "Meta — PyTorch / ExecuTorch",
    summary:
      "Built tooling to identify internal hardware bottlenecks for mobile GPUs (inspired by Romou-style benchmarks) and implemented matrix multiplication optimizations and low-bit quantization in the ExecuTorch ML framework for edge devices, achieving ~70% inference speedups.",
    highlights: [
      "Open-source GPU tooling for hardware-bottleneck identification.",
      "Matrix multiplication optimizations: buffer management, loop unrolling.",
      "4-bit quantization paths for edge deep-learning inference.",
      "~70% speed improvements on representative workloads.",
    ],
    tags: ["PyTorch", "ExecuTorch", "CUDA", "Quantization", "GPU perf"],
    cover: "executorch-internship.png",
    gallery: ["executorch-internship.png", "executorch-logo.webp"],
  },
  {
    id: "core-ai-enhance",
    title: "Core AI — Image Enhancement CPU Rewrite",
    subtitle:
      "Re-engineered a deep-learning image enhancement algorithm for efficient CPU execution.",
    category: "ML Systems & Performance",
    period: "Meta · 2023",
    org: "Meta — Core AI",
    summary:
      "Took a deep-learning image-enhancement algorithm and re-engineered it for efficient CPU execution. The combination of algorithmic restructuring and systems-level optimization reduced end-to-end runtime by approximately 99.7% while preserving output quality.",
    highlights: [
      "Algorithmic restructuring of a DL image-enhancement pipeline.",
      "System-level CPU optimizations and memory-layout tuning.",
      "~99.7% runtime reduction with preserved visual quality.",
    ],
    tags: ["C++", "CPU Optimization", "Image Processing"],
    cover: "autoenhance-after.png",
    gallery: ["autoenhance-before.png", "autoenhance-after.png"],
  },
];
