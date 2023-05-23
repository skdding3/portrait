import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import {GithubIcon} from "@/components/Icons";
import FeatureProjectImg1 from "../../public/images/projects/Gangnam.png"
import FeatureProjectImg2 from "../../public/images/projects/portrait.png"
import Project1Img from "../../public/images/projects/grcord.png"
import Project2Img from "../../public/images/projects/exchange.png"
import {motion} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";


const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return (
        <article
            className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[3rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>

            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                             whileHover={{scale:1.05}}
                             transition={{duration:0.2}}
                             priority
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                    <span className="text-sky-600 font-medium text-3xl xs:text-base">
                        {type}
                    </span>
                <h2 className="my-2 w-full text-left text-xl text-bold dark:text-light sm:text-sm">{title}</h2>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank"> </Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"> 프로젝트 개요 </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({title, type, img, link, github, summary}) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%]  xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                             whileHover={{scale:1.05}}
                             transition={{duration:0.2}}/>
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                    <span className="text-sky-600 font-medium text-3xl lg:text-lg md:text-base">
                        {type}
                    </span>
                <h2 className="my-2 w-full text-left text-xl text-bold dark:text-light lg:text-2xl">{title}</h2>
                <p className="my-2 font-medium text-dark dark:text-light">
                    {summary}
                </p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg underline font-semibold dark:text-light md:text-base"> 프로젝트 개요 </Link>
                    <Link href={github} target="_blank" className="w-10 md:w-6"> <GithubIcon /> </Link>
                </div>
            </div>
        </article>
    )
}



const Projects = () => {
    return (
        <>
            <Head>
                <title>KIM SUNKI | Projects Page </title>
                <meta name="description" content="any description"/>
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Projects" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Webiznet 실서비스 프로젝트"
                                summary="웰에이징 회원 관리 시스템 실서비스 개발을 진행하였습니다.
                            웰에이징 센터에서 이루어지는 복지 프로그램에 대해, 이용자를 관리하는 서비스를 구축,
                            접수 방법에 따른 처리와 방문할때, 선별이나 신체검사를 진행하여, 이에따른 액티브시니어(복지 프로그램)에 배치
                            이후 과정을 수료하는 시스템입니다."
                                link="https://skdding.notion.site/d62172b5dd114bc8a91f3102ca39c59e"
                                github="/"
                                type="강남구청 웰에이징 정보관리시스템"
                                img={FeatureProjectImg1}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="React 실시간 채팅서비스"
                                summary="React, Firebase를 활용한 실시간 채팅페이지 서비스입니다."
                                link="https://skdding.notion.site/grcord-0f46ea3c405547caa69897c2e362a7a7"
                                github="https://github.com/skdding3/grcord"
                                type="GRCORD"
                                img={Project1Img}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="React 환율 계산기 프로젝트"
                                summary="환율을 계산하는 간단한 프로젝트입니다. 환율 API를 통해 현재 환율을 확인해볼 수 있는 간단한 프로젝트 입니다."
                                link="https://skdding.notion.site/49182c8a20d347cd8954c93328b9dbaf"
                                github="https://github.com/skdding3/ExchangeCalcul"
                                type="환율계산기"
                                img={Project2Img}
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="NextJS를 활용한 포트폴리오 페이지"
                                summary="NextJS로 구현한 포트폴리오 페이지 입니다."
                                link="https://skdding.notion.site/NextJS-8e28b688fbf64803ae899990bbf5a5bf"
                                github="https://github.com/skdding3/portrait"
                                type="포트폴리오 페이지"
                                img={FeatureProjectImg2}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
