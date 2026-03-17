import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Angel Mendpara | UI/UX Designer & Frontend Developer"
        description="Learn more about Angel Mendpara, a dedicated UI/UX Designer and Frontend Developer pursuing B.E. in Computer Science and Design. Discover the journey, skills, and passion for creating user-centered digital products."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title:
            "Learn About Angel Mendpara - UI/UX Designer & Frontend Developer",
          description:
            "Dive into the story of Angel Mendpara, a UI/UX Designer and Frontend Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional user-centered digital solutions.",
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
              "UI/UX Designer portfolio, Frontend Developer, Figma, Web Developer, JavaScript, HTML, CSS, React.js, Professional Journey, Skills, User Experience Design, Angel Mendpara",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
