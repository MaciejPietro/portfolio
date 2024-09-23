import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import ContentfulApi from "@utils/ContentfulApi";
import MainLayout from "@layouts/main.jsx";
//
import Image from "next/image";

import { Card } from "@components/Card";
import { Container } from "@components/Container";

import logoCleancommit from "@images/logos/cleancommit.jpg";
import logoIl2d from "@images/logos/il2d.jpg";
import logoThecodest from "@images/logos/thecodest.png";

// import { formatDate } from '@lib/formatDate'

import Hero from "@components/blocks/HeroBanner";

function Article({ article }) {
  return (
    <Card as="article" className="pointer-events-none">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        2024
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      {/* <Card.Cta>Read article</Card.Cta> */}
    </Card>
  );
}

function Newsletter() {
  return (
    <></>
    // <form
    //   action="/thank-you"
    //   className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    // >
    //   <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
    //     <MailIcon className="h-6 w-6 flex-none" />
    //     <span className="ml-3">Stay up to date</span>
    //   </h2>
    //   <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
    //     Get notified when I publish something new, and unsubscribe at any time.
    //   </p>
    //   <div className="mt-6 flex">
    //     <input
    //       type="email"
    //       placeholder="Email address"
    //       aria-label="Email address"
    //       required
    //       className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
    //     />
    //     <Button type="submit" className="ml-4 flex-none">
    //       Join
    //     </Button>
    //   </div>
    // </form>
  );
}

function Role({ role }) {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="h-7 w-7 rounded-full"
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.url ? (
            <a
              className="text-teal-500 text-xs hover:opacity-75"
              href={role.url}
              target="_blank"
            >
              {role.company}
            </a>
          ) : (
            role.company
          )}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume = [
    {
      company: "TheCodest",
      title: "Frontend Developer",
      logo: logoThecodest,
      start: "2023",
      url: "https://thecodest.co/",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "CleanCommit",
      title: "Software Developer",
      logo: logoCleancommit,
      start: "2021",
      end: "2023",
      url: "https://cleancommit.io/",
    },
    {
      company: "il2d",
      title: "Web Developer",
      logo: logoIl2d,
      start: "2021",
      end: "2019",
      url: "https://il2d.com/",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-0">Work experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  );
}

export default function Experience() {
  const articles = [
    {
      slug: "",
      title: "Soon some articles here",
      date: "2023",
      description: "Wait for new articles about webdev",
    },
  ];

  return (
    <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 mt-24">
      <div className="flex flex-col gap-16">
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
      <div className="space-y-10 lg:pl-16 xl:pl-24">
        <Newsletter />
        <Resume />
      </div>
    </div>
  );
}
