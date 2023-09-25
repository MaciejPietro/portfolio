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

export default function Hero({ title, description, body, links }) {
  console.log("e", links);
  return (
    <>
      <Container className="mt-9">
        <div className="grid lg:grid-cols-2 lg:gap-24">
          <div className="page">
            <h1 className="text-3xl lg:text-5xl font-bold">
              <span>{title}</span>
              <div className="overflow-hidden lg:w-[50vw]">
                <div className="scroller  h-[1.2em] leading-relaxed whitespace-nowrap">
                  <span className="leading-loose block h-[1.5em]">
                    Software developer
                  </span>
                  <span className="leading-loose block h-[1.5em]">
                    Amateur musician
                  </span>
                  <span className="leading-loose block h-[1.5em]">
                    Tech geek
                  </span>
                  <span className="leading-loose block h-[1.5em]">
                    Software developer
                  </span>
                </div>
              </div>
            </h1>
            {/* {title && (
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {title}
              </h1>
            )} */}
            {description && (
              <span className="text-gray-500">{description}</span>
            )}
            <div className="mt-5">
              <ContentWrapper>
                {body && (
                  <PageContentWrapper>
                    <RichTextPageContent richTextBodyField={body} />
                  </PageContentWrapper>
                )}
                {/* <RecentPostList posts={recentPosts} /> */}
              </ContentWrapper>

              <div className="-mt-8 flex items-center gap-3 text-yellow-600">
                <WarningSignIcon />
                The site is still in development
              </div>
            </div>
          </div>

          <HeroAnimation />
        </div>

        <div className="mt-6 flex gap-6">
          {links?.githubLink && (
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
          )}
        </div>
      </Container>

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
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
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

const WarningSignIcon = () => {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 9v4m0 4h.01M10.615 3.892 2.39 18.099c-.456.788-.684 1.182-.65 1.505a1 1 0 0 0 .406.705c.263.191.718.191 1.629.191h16.45c.91 0 1.365 0 1.628-.191a1 1 0 0 0 .407-.705c.034-.323-.195-.717-.65-1.505L13.383 3.892c-.454-.785-.681-1.178-.978-1.31a1 1 0 0 0-.813 0c-.296.132-.523.525-.978 1.31Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
