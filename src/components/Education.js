import React, {useRef} from 'react';
import {motion, useScroll} from "framer-motion";
import LiIcon from "@/components/LiIcon";

// Detail Fragment
const Details = ({type, time, place, info}) => {
    const ref = useRef(null);

    return <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  justify-between">
        <LiIcon reference={ref}/>
        <motion.div initial={{y:50}}
                    whileInView={{y:0}}
                    transition={{duration:0.5, type:"spring"}}>
            <h3 className="capitalize font-bold text-2xl">
                {type}
            </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 ">
                {time} | {place}
            </span>
            <p className="font-medium w-full">
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
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
                Education
            </h2>
            <h3 className="font-bold text-3xl mb-16 w-full text-center">Front-End</h3>
            <div ref={ref} className="w-[60%] relative">
                <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />
                <ul>
                    <Details position="AI BootCamp" company="Code States" time="2021.05-2021.11" address="Seoul" work="AI 부트캠프 4기를 수료하였습니다." />
                    <Details position="Bachelor of Science" company="Computer Engineering" time="2022.02 ~ " address="" work="컴퓨터 공학사 과정 진행중입니다."  />
                    <Details position="Front-End Engineer" company="Webiznet" time="2022.07-2022.12" address="Seoul" work="솔루션 개발팀에서 프론트엔드 개발을 진행하였습니다."  />
                </ul>
            </div>
            <h3 className="font-bold text-3xl mb-16 w-full text-center">PhotoGrapher</h3>
            <div ref={ref} className="w-[60%] relative">
                <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />
                <ul>
                    <Details position="PhotoFreelancer" company="Freelancer" time="" address="" work="MUSINSA, DreamRecord 외 다수" />
                    <Details position="PhotoGrapher" company="Man's Nonno" time="2017.05-2018.10" address="Japan" work="스트릿 패션 잡지 사진 작업" />
                    <Details position="PhotoGrapher and Design" company="OMNIVERSE" time="2019.12-2021.03" address="Paju" work="CARIN ,Stonehenge ,Rosemont ,모나코어나더" />
                </ul>
            </div>
        </div>
    );
};

export default Education;
