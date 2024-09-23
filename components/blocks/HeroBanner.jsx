import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { GitHubIcon, LinkedInIcon } from "@components/SocialIcons";
import { Container } from "@components/Container";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import RichTextPageContent from "@components/RichTextPageContent";
import HeroAnimation from "@components/Animations/HeroAnimation";

import image1 from "@images/photos/image-1.jpg";
import image2 from "@images/photos/image-2.jpg";
import image3 from "@images/photos/image-3.jpg";
import image4 from "@images/photos/image-4.jpg";
import image5 from "@images/photos/image-5.jpg";

export default function Hero({ headline, subHeading, body }) {
  return (
    <>
      <div className="grid lg:grid-cols-2 lg:gap-24">
        <div className="page">
          <h1 className="text-3xl lg:text-5xl font-bold">
            <span>{headline}</span>
            <div className="overflow-hidden lg:w-[50vw]">
              <div className="scroller  h-[1.2em] leading-relaxed whitespace-nowrap">
                <span className="leading-loose block h-[1.5em]">
                  Software developer
                </span>
                <span className="leading-loose block h-[1.5em]">
                  Amateur musician
                </span>
                <span className="leading-loose block h-[1.5em]">Tech geek</span>
                <span className="leading-loose block h-[1.5em]">
                  Software developer
                </span>
              </div>
            </div>
          </h1>

          {subHeading && <span className="text-gray-500">{subHeading}</span>}
          <ul className="mt-10 space-y-2 dark:text-slate-200 text-zinc-800 transition-colors ">
            <li className="flex gap-2">
              <div className="-mt-0.5 opacity-75">🖥️</div> 5+ years coding
              experience
            </li>

            <li className="flex gap-2">
              <div className="opacity-75">🏠</div>
              Based in Wrocław, Poland
            </li>

            <li className="flex gap-2">
              <div className="opacity-75">🎸</div>
              Musician after hours
            </li>

            {/* <ContentWrapper>
              {body && (
                <PageContentWrapper>
                  <RichTextPageContent richTextBodyField={body} />
                </PageContentWrapper>
              )}
            </ContentWrapper> */}
          </ul>
        </div>

        <HeroAnimation />
      </div>

      <div className="mt-6 flex gap-6">
        {/* {links?.githubLink && (
            <SocialLink
              href={links?.githubLink}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          )}

          {links?.linkedinLink && (
            <SocialLink
              href={links?.linkedinLink}
              aria-label="Follow on GitHub"
              icon={LinkedInIcon}
            />
          )} */}
      </div>

      <Photos />
    </>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <a className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
