import React from 'react';
import {CircleText} from "@/components/Icons";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
                <CircleText className={"fill-dark animate-spin-slow dark:fill-light"}/>
                <Link href="mailto:skdding3@gmail.com"
                      className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-18 h-18 rounded-full
                      font-semibold hover:bg-light hover:text-dark
                      dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-18 md:h-18 md:text-[10px]">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
