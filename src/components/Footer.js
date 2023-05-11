import React from 'react';
import Layout from "@/components/Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                {/*현재 일자 년도 가져옴*/}
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                    Build With <Link href="/" className="underline underline-offset-2" target={"_blank"}>Sunki</Link>
                </div>
                <Link href="/">Hello</Link>
            </Layout>
        </footer>
    );
};

export default Footer;
