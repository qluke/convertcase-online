import { getDictionary } from "@/i18n/get-dictionary";
import {LocaleSwitcher} from "@/components/navbar/locale-switcher";
import {ThemeSwitcher} from "@/components/navbar/theme-switcher";
import {IndexPage } from "@/components/form/indexPage";
import {IndexTable}  from "@/components/form/indexTable";
import {IndexFooters}  from "@/components/footer/indexFooters";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="min-h-screen flex flex-col pt-8 justify-center items-center m-auto w-11/12">
      <ThemeSwitcher />
      <LocaleSwitcher />
      <IndexPage dictionary={dictionary.content} />
      <IndexTable dictionary={dictionary.info} />
      <IndexFooters />
    </div>
  );
}
