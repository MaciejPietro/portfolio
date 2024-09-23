import ContentfulApi from "@utils/ContentfulApi";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import MainLayout from "@layouts/main.jsx";

import { Container } from "@components/Container";

import * as Blocks from "@components/blocks";
import { Experience } from "@components/blocks";

export default function Page({ data }) {
  if (!data) return null;

  const blocks = data.blocksCollection.items;
  return (
    <MainLayout>
      {data ? (
        <PageMeta
          title={data.title}
          description={data.description}
          url={Config.pageMeta.home.url}
        />
      ) : null}

      <Container className="mt-16 sm:mt-32">
        {blocks.map((block) => {
          const Block = Blocks[block.__typename];
          return <Block {...block} />;
        })}
        <Experience />
      </Container>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const { slugs } = await ContentfulApi.getPagesSlugs();

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
