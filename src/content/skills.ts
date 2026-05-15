import type { LanguageItem, SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    group: "Machine Learning & GPU Computing",
    items: [
      "PyTorch",
      "CUDA",
      "GPU training pipelines",
      "ML perf optimization",
      "Quantization",
    ],
  },
  {
    group: "Simulation & Robotics Platforms",
    items: [
      "ROS / ROS 2",
      "IsaacSim",
      "MuJoCo",
      "PyBullet",
      "Robotic manipulation",
      "Teleoperation systems",
    ],
  },
  {
    group: "Perception, Vision & Motion Capture",
    items: [
      "MOCAP",
      "Meta Quest",
      "OpenCV",
      "YOLO / SAM3",
      "Vision–language models",
      "Multi-sensor perception",
      "SLAM",
    ],
  },
  {
    group: "Programming",
    items: ["Python", "C++", "CUDA", "C", "MATLAB", "Bash", "JavaScript"],
  },
  {
    group: "Optimization & Control",
    items: [
      "Model Predictive Control",
      "Trajectory optimization",
      "ADMM",
      "CVXPY",
    ],
  },
  {
    group: "Systems / Infrastructure",
    items: ["Linux", "AWS", "GPU computing clusters", "Distributed ML pipelines"],
  },
];

export const languages: LanguageItem[] = [
  { language: "Spanish", level: "Native" },
  { language: "English", level: "Fluent" },
  { language: "German", level: "Intermediate" },
  { language: "Japanese", level: "Basic" },
];
