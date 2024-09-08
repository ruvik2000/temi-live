import { Metadata } from "next";
import About from "./page";

export const metadata: Metadata = {
  title: "temi: Autonomous robots by Omni-Health",
  description:
    "Explore temi, your personal robot assistant from Omni-Health. Discover how it solves challenges and transforms your environment.",
  openGraph: {
    title: "temi: Autonomous robots by Omni-Health",
    description:
      "Explore temi, your personal robot assistant from Omni-Health. Discover how it solves challenges and transforms your environment.",
    siteName: "temi",
    type: "website",
    images: "/temi.png",
    url: "/about",
  },
};

export default About;
