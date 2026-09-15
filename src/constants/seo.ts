import {getImage} from "astro:assets";
import Seb from "../assets/img/seb.webp";
import {LINKEDIN_URL} from "./links";

interface SeoConfigInput {
  title: string;
  description: string;
  url: URL;
  site?: URL;
}

const getSeoConfig = async ({
  title,
  description,
  url,
  site,
}: SeoConfigInput) => {
  const socialImage = await getImage({
    src: Seb,
    width: 1200,
    height: 630,
    format: "webp",
    fit: "cover",
  });
  const socialImageUrl = new URL(socialImage.src, site ?? url).href;

  return {
    title,
    description,
    charset: "UTF-8",
    openGraph: {
      basic: {
        title,
        type: "website",
        image: socialImageUrl,
        url: url.href,
      },
      optional: {
        description,
        locale: "en_US",
        siteName: "Seb Dybowski",
      },
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@sebdybowskidev",
      title,
      description,
      image: socialImageUrl,
      imageAlt: "Portrait of Seb Dybowski",
    },
    extend: {
      link: [{rel: "icon", type: "image/svg+xml", href: "/favicon.svg"}],
    },
  };
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Seb Dybowski",
      url: "https://dybowski.pro/",
      jobTitle: "Software Engineer, Tech Lead & UX Designer",
      sameAs: [
        LINKEDIN_URL,
        "https://github.com/sebdybowski",
        "https://twitter.com/sebdybowskidev",
      ],
      knowsAbout: [
        "Frontend development",
        "Backend development",
        "React",
        "Node.js",
        "AWS",
        "UX design",
        "Agile leadership",
      ],
    },
    {
      "@type": "WebSite",
      name: "Seb Dybowski",
      url: "https://dybowski.pro/",
      description:
        "Professional portfolio of Seb Dybowski, software engineer, tech lead, and UX designer.",
    },
  ],
};

export {getSeoConfig, jsonLd};
