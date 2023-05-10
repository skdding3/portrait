import React, {useState} from 'react';
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

const CustomMobileLink = ({href, title, className='', toggle}) => {
    // Router
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        // 경로 커스텀
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {/*타이틀 명이 주소와 함께 들어가준다.*/}
            {title}

            {/* 밑줄 transition */}
            {/* Router에 따라 조건문으로 현재 페이지 밑줄 표기 */}
            <span className={`h-[2px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>
            </span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    // STATE
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5' }`}></span>
            </button>

            {/* responsive */}
            <div className="w-full flex justify-between items-center lg:hidden">
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='ml-4'/>
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
            </div>

            {
                isOpen ?
                    // mobile responsive
                    <motion.div
                        initial={{scale: 0, opacity:0, x: "-50%", y: "-50%"}}
                        animate={{scale: 1, opacity:1}}
                        className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                        <nav className="flex items-center flex-col justify-center">
                            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
                        </nav>
                        <nav className="flex items-center justify-center flex-wrap mt-2">
                            <motion.a href="https://github.com/skdding3" target={"_blank"}
                                      whileHover={{y: -10}}
                                      whileTap={{scale: 0.9}}
                                      className="mr-3 bg-light rounded-full dark:bg-dark sm:mx-1"
                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a href="https://skdding.notion.site/KIM-SUN-KI-075debf63073426e8ea9c54c7e772852" target={"_blank"}
                                      whileHover={{y: -10}}
                                      whileTap={{scale: 0.9}}
                                      className="mr-3 sm:mx-1"
                            >
                                <NotionIcon />
                            </motion.a>
                            <motion.a href="https://velog.io/@skdding3" target={"_blank"}
                                      whileHover={{y: -10}}
                                      whileTap={{scale: 0.9}}
                                      className="mr-3 bg-light rounded-full sm:mx-1"
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
                    </motion.div>

                : null
            }

            <div className='absolute left-[50%] top-6 translate-x-[50%]'>
                {/* 로고는 별도 컴포넌트로 분리 */}
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
