import { useTranslations } from "next-intl";
import { Link as WLink } from "../../../i18n/routing";
import Link from "next/link";
// import {Link} from '@/i18n/routing';

export default function HomePage() {
    const t = useTranslations("HomePage");
    return (
        <div className=" text-center">
            <h1>{t("title")}</h1>

            <WLink href="/about">{t("about")}</WLink>

            <br />

            <Link href={"/login"}>go login</Link>
        </div>
    );
}
