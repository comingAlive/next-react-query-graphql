import useTranslation from "@/hooks/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";

const I18nHead = () => {
  const URL = "https://ffmpegextract.xyz";
  const { locale, locales } = useRouter();
  const t = useTranslation();

  const getLocaleSuffix = (locale: string | undefined) => {
    return locale === "en" ? "" : "/" + locale;
  };
  return (
    <Head>
      <title>
        Max ffmpegextract.xyz | {t.title} | {t.online}
      </title>
      <link rel="amphtml" href={URL + getLocaleSuffix(locale) + "/amp"} />
      <link rel="canonical" href={URL + getLocaleSuffix(locale)} />
      {locales?.map((loc, i) => {
        return (
          <link
            key={loc + i}
            rel="alternate"
            hrefLang={loc}
            href={URL + getLocaleSuffix(loc)}
          />
        );
      })}
    </Head>
  );
};
export default I18nHead;
