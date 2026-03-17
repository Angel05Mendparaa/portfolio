import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Sonrisa",
    href: "/projects",
    tags: ["Figma", "HTML", "CSS", "JavaScript", "React.js"],
    image: {
      LIGHT: "/images/projects/sonrisa-1.svg",
      DARK: "/images/projects/sonrisa-1.svg",
    },
  },
  {
    index: 1,
    title: "CareFlow Nexus",
    href: "/projects",
    tags: ["Figma", "FigJam", "UI/UX Design"],
    image: {
      LIGHT: "/images/projects/careflow-1.svg",
      DARK: "/images/projects/careflow-1.svg",
    },
  },
  {
    index: 2,
    title: "Wanderley",
    href: "/projects",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    image: {
      LIGHT: "/images/projects/wanderley-1.svg",
      DARK: "/images/projects/wanderley-1.svg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Sonrisa: Food Charity Web Application",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/sonrisa-1.svg",
      "/images/projects/sonrisa-2.svg",
    ],
    description:
      "Designed and developed a web application connecting food donors, restaurants, NGOs, volunteers, and people in need across a unified platform. Architected a dual donation flow: direct NGO contact coordination and an on-demand volunteer pickup system. Built responsive, accessible frontend interfaces from Figma prototypes, ensuring cross-device usability.",
    sourceCodeHref: "https://github.com/Angel05Mendparaa",
  },
  {
    name: "CareFlow Nexus: Smart Hospital Resource Orchestration System",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/careflow-1.svg",
      "/images/projects/careflow-2.svg",
    ],
    description:
      "Designed an end-to-end hospital operations platform to streamline patient flow, optimize staff coordination, and support real-time clinical decision-making. Created role-specific dashboards for reception, nursing, and physician teams using design thinking methodologies to reduce task complexity.",
    sourceCodeHref: "https://github.com/Angel05Mendparaa",
  },
  {
    name: "Vitality: IVF Clinical Decision Support Platform",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/vitality-1.svg",
      "/images/projects/vitality-2.svg",
    ],
    description:
      "Collaborated on a healthcare platform to assist IVF specialists with embryo evaluation through a structured, clinically intuitive interface. Developed the frontend, translating Figma designs into functional, pixel-accurate web interfaces. Simplified complex clinical data presentation using progressive disclosure and visual hierarchy.",
    sourceCodeHref: "https://github.com/Angel05Mendparaa",
  },
  {
    name: "Wanderley: Planning-First Travel Companion Web App",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/wanderley-1.svg",
      "/images/projects/wanderley-2.svg",
    ],
    description:
      "Designing a travel planning web app that helps users explore destinations, estimate costs, and build itineraries without the pressure of booking services. Implementing progressive disclosure and clear information architecture to minimize cognitive overload and guide confident travel decision-making.",
    sourceCodeHref: "https://github.com/Angel05Mendparaa",
  },
];
