import React, {useRef} from 'react';
import {motion, useScroll} from "framer-motion";
import LiIcon from "@/components/LiIcon";

// Detail Fragment
const Details = ({position, company, time, address, work}) => {
    const ref = useRef(null);

    return <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  justify-between">
        <LiIcon reference={ref}/>
        <div>
            <h3 className="capitalize font-bold text-2xl">
                {position}&nbsp;<a className="text-sky-600 capitalize">@{company}</a>
            </h3>
            <span className="capitalize font-medium text-dark/75">
                {time} | {address}
            </span>
            <p className="font-medium w-full">
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className="my-64">
            <h2 className="font-bold text-6xl mb-32 w-full text-center">
                Experience
            </h2>

            <div ref={ref} className="w-[60%] relative">
                <motion.div style={{scaleY: scrollYProgress}} className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
                <ul>
                    <Details position="AI BootCamp" company="Code States" time="2021.05-2021.11" address="Seoul" work="AI 부트캠프 4기를 수료하였습니다." />
                    <Details position="Bachelor of Science" company="Computer Engineering" time="2022.02 ~ " address="" work="컴퓨터 공학사 과정 진행중입니다."  />
                    <Details position="Front-End Engineer" company="Webiznet" time="2022.07-2022.12" address="Seoul" work="솔루션 개발팀에서 프론트엔드 개발을 진행하였습니다."  />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
