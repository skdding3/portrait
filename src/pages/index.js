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
            <main className='flex items-center text-dark w-full min-h-screen'>
                <Layout className="pt-0">
                    <div className='flex items-center justify-between w-full'>
                        <div className="w-1/2">
                            <Image src={profilePic} alt="skdding" className='w-50 h-50'/>
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center">
                            <AnimatedText text="HELLO!! 어서오세요 :)  👋" className="!text-5xl"/>
                            <p className="my-4 text-base font-medium">
                                My name is Sunki Kim!
                                I’m Front-End Developer
                            </p>
                            {/* tailwind space */}
                            <div className="flex space-x-10">
                                <Link href="/KIM_SUNKI.pdf" target={"_blank"}
                                      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                                download={true}>
                                    이력서 <LinkArrow className={"w-3 ml-1"}/>
                                </Link>
                                <Link href="about"
                                      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark">
                                    About
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>

                <HireMe />
                <div className="absolute right-8 bottom-8 inline-block w-24">
                    <Image src={lightBulb} alt="skdding" className="w-full h-auto" />
                </div>
            </main>
        </>
    )
}
