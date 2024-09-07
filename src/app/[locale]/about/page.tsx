"use client";

import React from "react";
import { Link, usePathname } from "../../../../i18n/routing";
import { useTranslations } from "next-intl";

const AboutPage = () => {
    const t = useTranslations("HomePage");
    const pathName = usePathname();

    return (
        <div className=" text-center p-10">
            <p>{t("title")}</p>

            <Link href={"/"}>Go Home</Link>

            <div className="flex space-x-4 fixed bottom-10 right-10">
                <Link href={pathName} locale="en">
                    en
                </Link>
                <Link href={pathName} locale="bn">
                    bn
                </Link>
            </div>
        </div>
    );
};

export default AboutPage;
