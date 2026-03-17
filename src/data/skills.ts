import { SiFigma, SiVercel, SiCanva } from "react-icons/si";
import { FiLayout, FiLayers, FiMap, FiMousePointer } from "react-icons/fi";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import VsCodeSvg from "@/public/icons/vscode.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML5",
        icon: HtmlSvg,
      },
      {
        name: "CSS3",
        icon: CsssSvg,
      },
      {
        name: "JavaScript (ES6+)",
        icon: JavascriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
    ],
  },
  {
    sectionName: "Frontend",
    skills: [
      {
        name: "React.js (Basic)",
        icon: ReactjsSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
    ],
  },
  {
    sectionName: "UI/UX Design",
    skills: [
      {
        name: "Wireframing",
        icon: FiLayout,
      },
      {
        name: "Prototyping (Lo-Fi & Hi-Fi)",
        icon: FiLayers,
      },
      {
        name: "Information Architecture",
        icon: FiMap,
      },
      {
        name: "Interaction Design",
        icon: FiMousePointer,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Figma",
        icon: SiFigma,
      },
      {
        name: "VS Code",
        icon: VsCodeSvg,
      },
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Canva",
        icon: SiCanva,
      },
    ],
  },
];
