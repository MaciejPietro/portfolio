import ContentfulApi from "@utils/ContentfulApi";
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import MainLayout from "@layouts/main.jsx";


import { Container } from '@components/Container'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@components/SocialIcons'
import portraitImage from '@images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <a
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}



export default function About({data, preview}) {
  return (
    <MainLayout preview={preview}>
    <PageMeta
      title={data.title}
      description={data.description}
      url={Config.pageMeta.home.url}
    />

  
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 xl:text-5xl">
            I’m Maciej Pietrołaj. Smalltown boy living and <span className="text-teal-500">coding</span> in Wrocław.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I, a small-town dreamer, embarked on a remarkable journey that transformed my life. 
            Born and raised in the tight-knit community of Wyrzysk, I experienced the joys and challenges of rural life. 
            Surrounded by the simplicity of my upbringing, I developed a deep appreciation for the values of hard work, community, and perseverance.
            </p>
            <p>
            In 2019, everything changed when I discovered their passion for programming. 
            Armed with determination and an insatiable curiosity, I delved into the world of coding, eager to unlock its secrets.
             Late nights spent learning languages like JavaScript or PHP, solving complex problems, and building my own projects became the norm. 
             My relentless dedication paid off as I honed my skills and found a sense of purpose in the world of technology.
            </p>
            <p>
            By 2022, I had become a proficient programmer, and the lure of new opportunities led me to make a bold decision.
             They packed their bags and left behind the familiar streets of Wyrzysk to embark on a new adventure in the bustling metropolis of Wrocław. 
             This transition marked a significant chapter in my life, as they sought to immerse themselves in a thriving tech community, 
             surrounded by like-minded individuals and countless career prospects
            </p>
            <p>
            Today, I continue to chase my programming dreams, embracing the challenges and opportunities that Wrocław has to offer.
             Their journey from a small-town upbringing to the dynamic world of programming is a testament to their determination and the transformative power
              of following one's passions. With each line of code they write, they're not only shaping their own future but also contributing to the ever-evolving
               landscape of technology.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink href="https://github.com/MaciejPietro" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/maciej-pietrolaj" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mpietrolaj1@wp.pl"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mpietrolaj1@wp.pl
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  </MainLayout>

  )
}


// export default function Page({data}) {
//     console.log(data)
//     return <>E</>
// }

export async function getStaticPaths() {
    const {slugs} = await ContentfulApi.getPagesSlugs();

  
    const paths = slugs.map((slug) => {
      return { params: { slug } };
    });
  
 
    return {
      paths,
      fallback: "blocking",
    };
  }

  export async function getStaticProps({ params, preview = false }) {
    const data = await ContentfulApi.getPageBySlug(`/${params.slug}`, {
      preview: preview,
    });


    if (!data) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        preview,
        data: data[0] || null,
      },
    };
  }