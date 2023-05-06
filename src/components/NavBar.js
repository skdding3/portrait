import React from 'react';
import Link from "next/link";
import Logo from "@/components/Logo";
import {useRouter} from "next/router";
import {GithubIcon, NotionIcon, VelogIcon, SunIcon, MoonIcon} from "@/components/Icons"
import {motion} from "framer-motion";
import useThemeSwitcher from "@/components/Hooks/useThemeSwitcher";

const CustomLink = ({href, title, className=''}) => {
    // Router
    const router = useRouter();
    console.log(router)

    return (
        // 경로 커스텀
        <Link href={href} className={`${className} relative group`}>
            {/*타이틀 명이 주소와 함께 들어가준다.*/}
            {title}

            {/* 밑줄 transition */}
            {/* Router에 따라 조건문으로 현재 페이지 밑줄 표기 */}
            <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>
            </span>
        </Link>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='mx-4'/>
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://github.com/skdding3" target={"_blank"}
                          whileHover={{y: -10}}
                          whileTap={{scale: 0.9}}
                          className="mr-3"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://skdding.notion.site/KIM-SUN-KI-075debf63073426e8ea9c54c7e772852" target={"_blank"}
                          whileHover={{y: -10}}
                          whileTap={{scale: 0.9}}
                          className="mr-3"
                >
                    <NotionIcon />
                </motion.a>
                <motion.a href="https://velog.io/@skdding3" target={"_blank"}
                          whileHover={{y: -10}}
                          whileTap={{scale: 0.9}}
                          className="mr-3"
                >
                    <VelogIcon className="dark:bg-light dark:border dark:rounded-lg"/>
                </motion.a>
                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                        `}>
                    { mode === "dark"
                        ? <SunIcon className={"fill-dark"} />
                        : <MoonIcon className={"fill-dark"} /> }
                </button>
            </nav>



            <div className='absolute left-[50%] top-6 translate-x-[50%]'>
                {/* 로고는 별도 컴포넌트로 분리 */}
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
