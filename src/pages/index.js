import Head from 'next/head'
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-3.jpeg"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {LinkArrow} from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"


export default function Home() {
    return (
        <>
            <Head>
                <title>KIM SUNKI | Main</title>
                <meta name="description" content="any description"/>
            </Head>
            <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
                <Layout className="pt-0 md:p-16 sm:pt-8">
                    <div className='flex items-center justify-between w-full lg:flex-col'>
                        <div className="w-1/2 md:w-full">
                            <Image src={profilePic} alt="skdding" className='w-50 h-50 lg:hidden md:inline-block md:w-full' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                            <AnimatedText text="HELLO!! 어서오세요 :)  👋" className="!text-5xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
                            <p className="my-4 text-base font-medium ">
                                My name is Sunki Kim!
                                I’m Front-End Developer
                            </p>
                            {/* tailwind space */}
                            <div className="flex space-x-10 lg:self-center">
                                <Link href="/KIM_SUNKI.pdf" target={"_blank"}
                                      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light md:p-2 md:px-4 md:text-base"
                                download={true}>
                                    이력서 <LinkArrow className={"w-5 ml-1"}/>
                                </Link>
                                <Link href="about"
                                      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:text-light dark:hover:text-dark md:text-base">
                                    About
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>

                <HireMe />
                <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
                    <Image src={lightBulb} alt="skdding" className="w-full h-auto" />
                </div>
            </main>
        </>
    )
}
