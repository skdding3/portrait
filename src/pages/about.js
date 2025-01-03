import React, { useState } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-2.jpeg";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
  // // STATE
  const [isShow, setIsShow] = useState(true);
  //
  // const Keyword1 = () => {
  //     setIsShow(!isShow)
  // }
  // const Keyword2 = () => {
  //     setIsShow(!isShow)
  // }
  // const Keyword3 = () => {
  //     setIsShow(!isShow)
  // }

  // EVENT
  const showKeyword = (number) => {
    se;
  };

  return (
    <>
      <Head>
        <title>KIM SUNKI | About Page </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="text-4xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            text="시각적인 감각을 가진 프론트엔드 개발자입니다!"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* About Me */}
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h1 className="mb-4 text-2xl font-bold uppercase text-dark dark:text-light">
                자기소개
              </h1>

              <button
                className="my-4 mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75"
                onClick={() => showKeyword(1)}
              >
                시각적인 감각을 가진 프론트엔드
              </button>
              {isShow ? (
                <p className="font-normal leading-normal text-sm/[15px]">
                  이전에 데이터 직군에 대한 부분을 코드스테이츠 AI 부트캠프
                  과정을 들으며 다양한 프로젝트들을 진행해보고,
                  <br />
                  수업을 통해 직접 경험하면서 데이터 분석에 관한 방향성이 잘
                  와닿지 않고 어려움을 많이 겪으면서, 저에게 정말로 원하고 잘
                  할수있으며, 계속해서 흥미를 가지는 분야에 대해 다시 고민을
                  하였습니다.
                  <br />
                  <br />
                  데이터 관련 공부에서 가장 흥미를 느꼈던 것은 데이터에 대한
                  시각화 였습니다. 이를 토대로 일전에 회사에서 웹 페이지
                  사진들을 배치하고 디자인 할 때 흥미를 느꼈던 감각을 통해{" "}
                  <b>Front-End 분야 독학 공부</b>로 과감히 전환하여, 다시 공부를
                  시작하였고 컴포넌트를 구상하는 부분에서나 상상하던 디자인을
                  직접 코드로 구현하여 실제로 적용하는 과정에서 즉각적인 반응을
                  보이는 부분이 저에게 더 많은 흥미와 큰 성취감을 느껴 이 부분이
                  저를 매료시켰고, 이전에 사진관련 경력들이 가져다 주는 시각적인
                  감각이 자신감을 더 많이 가지게 되었습니다.
                  <br />
                  <br />
                  실제 현업에서 Front-End 직무를 맡아서 실 서비스 개발을
                  진행하여, 프로젝트 기존 JQuery로 작업되어있던, 자체 프로젝트에
                  대한 Front-End Stack을 선정하고 이외에도 팀원과 협의를 거쳐
                  React 마이그레이션 프로젝트를 진행하며, 프론트엔드 라이브러리
                  or 프레임워크가 가진 장점을 모색하고, 이를 적용하는 과정을
                  거치고 있습니다.
                  <br />
                </p>
              ) : null}
              <button className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                흥미있는 길에 대한 꾸준함과 도전
              </button>
              {isShow ? (
                <p className="font-normal leading-normal text-sm/[15px]">
                  9년 동안 PhotoGrapher 항해를 마치고 새로운 개발영역 탐구를
                  위해 항해를 시작하게 되었습니다.
                  <br />
                  지난 항해를 이어왔던 저에게 느껴온 도전적인 가치 매번 흥미로운
                  작업들이 있었고 이에 꾸준함이 작용하는 9년이라는 시간이
                  있었지만, 사진이라는 직업에 특성상 그동안 발전적인 부분이 많이
                  퇴색되어 왔습니다.
                  <br />
                  서른이 다가온 저에게 지금껏 해왔던 일과 달리 새로이 시작할 수
                  있는 개발이라는 분야는 새로운 연구와 계속적인 도전과 가치를
                  찾을 수 있는 분야입니다.
                  <br />
                  개발자의 길을 걸어온 남들과는 달리 비전공자로 새로 시작하는
                  저에게 있어서는 아직 부족한 면이 많습니다.
                  <br />
                  늦게 시작한 제가 어필할 수 있는 가치는 꾸준함이라 생각합니다.
                  <br />
                  현업에서 실제로 사용하는 문법이나 방법들을 공부하며, 익힌
                  새로운 지식들은 항상 기술 블로그인 <b>Github</b>나{" "}
                  <b>Notion</b> 그리고 <b>Velog</b>에 작성하며 꾸준하게 쌓아가고
                  있습니다.
                </p>
              ) : null}

              <button className="my-4 mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                소통을 즐기고 참여하길 원합니다.
              </button>
              {isShow ? (
                <p className="font-normal leading-normal text-sm/[15px]">
                  개발직군에서 이론적인 이해와 코딩 적용 그리고 도메인지식에
                  대한 이해 등 중요한 부분이 많지만 가장 중요하다 생각되는
                  부분은 협업하는 과정에서 이루어지는 <b>커뮤니케이션</b> 이라고
                  생각합니다. <br />
                  <br />
                  특히 <b>Front-End 개발자</b>는 UI,UX 디자이너나 백엔드
                  개발자의 각기 다른 이해를 중간에서 엮어주는 역할이 필요하다고
                  보고 있습니다. 개발 공부를 하면서 참여했던 커뮤니티들과
                  현업에서 개발을 진행하면서 이런 허브 역할에 필요성에 대해 많이
                  느꼈고, <br />
                  <br />
                  위에서 제가 겪은 과정을 통해서 자기주도적인 태도를 통한 소통의
                  적극성으로 배워나가는 것이라고 생각합니다.
                  <br />
                  새로운 분야에서 흥미를 가지고 열심히 소통하고 많이 성장하는
                  개발자가 되고자 합니다.
                </p>
              ) : null}
            </div>

            {/* Profile Picture */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 md:order-1 md:col-span-8">
              <Image
                src={profilePic}
                alt="skdding"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* 전화번호 등등 */}
            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center">
              <div className="mb-4">
                <span className="font-bold flex flex-col items-end justify-center">
                  📲 Mobile
                </span>
                <h2 className="flex flex-col items-end justify-center">
                  010.7502.5680
                </h2>
              </div>

              <div className="mb-4">
                <span className="font-bold flex flex-col items-end justify-center">
                  📧 E-mail
                </span>
                <h2 className="flex flex-col items-end justify-center">
                  skdding3@gmail.com
                </h2>
              </div>

              <div className="mb-4">
                <span className="font-bold flex flex-col items-end justify-center">
                  📂 Portfolio
                </span>
                <a
                  href="https://Github.com/skdding3"
                  className="flex flex-col items-end justify-center"
                >
                  https://Github.com/skdding3
                </a>
              </div>

              <div className="mb-4">
                <span className="font-bold flex flex-col items-end justify-center">
                  📔 Blog
                </span>
                <a
                  href="https://velog.io/@skdding3"
                  className="flex flex-col items-end justify-center"
                >
                  https://velog.io/@skdding3
                </a>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default About;
