export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  tall?: boolean;
};

export const gallery: GalleryItem[] = [
  {
    src: "rapunzel-labelled.png",
    alt: "RAPUNZEL — labelled hand and arm",
    caption: "RAPUNZEL · ETH Soft Robotics Lab",
    tall: true,
  },
  {
    src: "hand-spinner.gif",
    alt: "Tendon-driven hand spinning an object",
    caption: "In-hand manipulation",
  },
  {
    src: "thesis.gif",
    alt: "Force-plate floor odometry",
    caption: "Master Thesis · GVLab Tokyo",
  },
  {
    src: "openfrontier-1.png",
    alt: "OpenFrontier — frontier reasoning",
    caption: "OpenFrontier · RSS 2026",
    tall: true,
  },
  {
    src: "atic-snake.gif",
    alt: "ATIC — snake configuration simulation",
    caption: "Distributed MPC · DRAGON",
  },
  {
    src: "rapunzel2.jpg",
    alt: "RAPUNZEL up close",
    caption: "Hand build, ETH",
  },
  {
    src: "hand-card.gif",
    alt: "Hand manipulating a card",
    caption: "Card manipulation",
    tall: true,
  },
  {
    src: "egoverse.jpg",
    alt: "EgoVerse data collection",
    caption: "EgoVerse data collection",
  },
  {
    src: "me-with-groot.jpg",
    alt: "Mistral × GR00T hackathon",
    caption: "Mistral × GR00T hackathon · Paris",
  },
  {
    src: "atic-ushape.gif",
    alt: "ATIC — U-shape configuration",
    caption: "ATIC · U-shape with obstacles",
  },
  {
    src: "openfrontier-2.png",
    alt: "OpenFrontier — frontier results",
    caption: "OpenFrontier · zero-shot results",
  },
  {
    src: "egoverse2.jpg",
    alt: "EgoVerse capture rig",
    caption: "EgoVerse rig",
    tall: true,
  },
  {
    src: "rapunzel3.jpg",
    alt: "RAPUNZEL detail",
    caption: "Tendons & routing",
  },
  {
    src: "ocslam.png",
    alt: "Easy Object-Conscious SLAM",
    caption: "OCSLAM · Ulm",
  },
  {
    src: "atic-line.gif",
    alt: "ATIC — line configuration",
    caption: "ATIC · line config",
  },
  {
    src: "me-egoverse.png",
    alt: "Recording for EgoVerse",
    caption: "Capturing data for EgoVerse",
  },
  {
    src: "autoenhance-before.png",
    alt: "Meta Core AI — before image enhancement",
    caption: "Core AI · before",
  },
  {
    src: "autoenhance-after.png",
    alt: "Meta Core AI — after image enhancement",
    caption: "Core AI · after",
  },
  {
    src: "atic-wrench.gif",
    alt: "ATIC — distributed wrench control",
    caption: "ATIC · wrench control",
    tall: true,
  },
  {
    src: "groot.jpg",
    alt: "NVIDIA GR00T",
    caption: "GR00T · Mistral hackathon",
  },
  {
    src: "executorch-internship.png",
    alt: "Meta ExecuTorch internship",
    caption: "ExecuTorch · Meta",
  },
  {
    src: "hand-teleop-arch.png",
    alt: "Teleoperation architecture",
    caption: "Teleop architecture",
  },
  {
    src: "hand-inference-arch.png",
    alt: "Imitation learning inference architecture",
    caption: "Inference architecture",
  },
  {
    src: "ocslam-architecture.png",
    alt: "OCSLAM architecture diagram",
    caption: "OCSLAM architecture",
  },
];
