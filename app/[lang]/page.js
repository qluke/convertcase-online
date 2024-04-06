import { getDictionary } from "../../i18n/get-dictionary";
import LocaleSwitcher from "@/components/navbar/locale-switcher";
import ThemeSwitcher from "@/components/navbar/theme-switcher";
import IndexPages from "@/components/form/indexPages";
import IndexTables from "@/components/form/indexTables";
import IndexFooters from "@/components/footer/indexFooters";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="min-h-screen flex flex-col pt-8 justify-center items-center m-auto w-11/12">
      <ThemeSwitcher />
      <LocaleSwitcher />
      <IndexPages dictionary={dictionary.content} />
      <IndexTables dictionary={dictionary.info} />
      <IndexFooters />
    </div>
  );
}
