import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Angel Mendpara | UI/UX Designer & Frontend Developer"
        description="Explore the professional portfolio of Angel Mendpara, a UI/UX Designer and Frontend Developer pursuing B.E. in Computer Science and Design. Discover innovative projects, expertise in Figma, HTML, CSS, JavaScript, and React.js."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Angel Mendpara - UI/UX Designer & Frontend Developer",
          description:
            "Dive into the world of UI/UX design and frontend development with Angel Mendpara. Discover a passionate designer and developer showcasing user-centered projects and a commitment to crafting exceptional digital experiences.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Angel Mendpara - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "UI/UX Designer, Frontend Developer, Web Developer, Figma, JavaScript, HTML, CSS, React.js, Portfolio, User Experience, User Interface, Web Development, Responsive Design, Angel Mendpara",
          },
        ]}
      />

      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
