import { useRouter } from "next/router";

import en from "../locales/en";
import es from "../locales/es";
import ru from "../locales/ru";
import zh from "../locales/zh";

const useTranslation = () => {
  const { locale } = useRouter();

  if (locale === "en") {
    return en;
  } else if (locale === "ru") {
    return ru;
  } else if (locale === "es") {
    return es;
  } else if (locale === "zh") return zh;
};
export default useTranslation;
