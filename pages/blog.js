import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import ContentfulApi from "@utils/ContentfulApi";
import MainLayout from "@layouts/main.jsx";

import { Container } from "@components/Container";

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

export default function Home(props) {
  const { pageContent, generalContent, recentPosts, preview } = props;

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={pageContent?.title}
        description={pageContent?.description}
        url={Config.pageMeta.home.url}
      />

      <Container className="mt-24 md:mt-28">
        <div className="-mt-8 flex items-center gap-3 text-yellow-600">
          <WarningSignIcon />
          The blog page is in development
        </div>
      </Container>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const pageContent = await ContentfulApi.getPageBySlug(
    Config.pageMeta.home.slug,
  );

  // const generalContent = await ContentfulApi.getGeneralContent();

  // const recentPosts = await ContentfulApi.getRecentPostList();

  return {
    props: {
      pageContent: pageContent || null,
      generalContent: null,

      // recentPosts,
    },
  };
}
