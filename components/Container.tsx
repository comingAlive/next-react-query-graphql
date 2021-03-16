import Head from "next/head";
import { useRouter } from "next/router";

export default function Container(props) {
  // const {theme, setTheme} = useTheme();

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Max Aiwon – Developer, writer, creator.",
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: "https://garbuz.dev/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://garbuz.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Max Aiwon" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="mx-auto space-y-4 max-w-6xl">{children}</main>
    </>
  );
}
