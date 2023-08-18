import TypescriptIcon from "../components/Icons/Typescript";
import JavascriptIcon from "../components/Icons/Javascript";
import CSSIcon from "../components/Icons/CSS";
import ReactIcon from "../components/Icons/React";
import TailwindIcon from "../components/Icons/Tailwind";
import AdobeXDIcon from "../components/Icons/AdobeXD";
import NodeIcon from "../components/Icons/Node";
import MySQLIcon from "../components/Icons/mySQL";
import SassIcon from "../components/Icons/Sass";
import SwiftIcon from "../components/Icons/Swift";
import JawsDBIcon from "../components/Icons/JawsDB";
import FigmaIcon from "../components/Icons/Figma";
import HTMLIcon from "../components/Icons/HTML";

export enum Technologies {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  React = "React",
  Tailwind = "Tailwind",
  AdobeXD = "AdobeXD",
  Figma = "Figma",
  Sass = "Sass",
  Node = "Node",
  MySQL = "MySQL",
  Swift = "Swift",
  JawsDB = "JawsDB",
}

export const techstack: Record<Technologies, { icon: React.ReactElement }> = {
  [Technologies.HTML]: {
    icon: <HTMLIcon />,
  },
  [Technologies.CSS]: {
    icon: <CSSIcon />,
  },
  [Technologies.JavaScript]: {
    icon: <JavascriptIcon />,
  },
  [Technologies.TypeScript]: {
    icon: <TypescriptIcon />,
  },
  [Technologies.React]: {
    icon: <ReactIcon />,
  },
  [Technologies.Tailwind]: {
    icon: <TailwindIcon />,
  },
  [Technologies.AdobeXD]: {
    icon: <AdobeXDIcon />,
  },
  [Technologies.Figma]: {
    icon: <FigmaIcon />,
  },
  [Technologies.Sass]: {
    icon: <SassIcon />,
  },
  [Technologies.Node]: {
    icon: <NodeIcon />,
  },
  [Technologies.MySQL]: {
    icon: <MySQLIcon />,
  },
  [Technologies.Swift]: {
    icon: <SwiftIcon />,
  },
  [Technologies.JawsDB]: {
    icon: <JawsDBIcon />,
  },
};
