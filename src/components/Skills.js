import React from 'react';
import {motion} from "framer-motion";


const Skill = ({name, x, y}) => {

    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
            whileHover={{scale: 1.5}}
            initial={{x: 0, y: 0}}
            whileInView={{ x: x, y: y, transition: {duration : 1.5}}}
            transition={{duration: 1.5}}
            viewport={{once: false}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {

    return (
        <>
            {/* Core Competency */}
            <h2 className="font-bold text-5xl mt-64 w-full text-center">
                Core Competency
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">

                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
                    whileHover={{scale: 1.05}}
                viewport-={{once: false}}>
                    Web
                </motion.div>


                {/* Skills list */}
                <Skill name="HTML" x="-20vw" y="-2vw"/>
                <Skill name="CSS" x="-5vw" y="-10vw"/>
                <Skill name="JavaScript" x="0vw" y="12vw"/>
                <Skill name="TypeScript" x="20vw" y="6vw"/>
                <Skill name="NextJS" x="-20vw" y="-15vw"/>
                <Skill name="JQuery" x="15vw" y="-12vw"/>
                <Skill name="Thymeleaf" x="-30vw" y="0vw" />
                <Skill name="Redux" x="0vw" y="-20vw"/>
                <Skill name="ReactJS" x="-25vw" y="18vw"/>
                <Skill name="TailwindCSS" x="18vw" y="18vw"/>
                <Skill name="Styled-Component" x="29vw" y="0vw"/>
            </div>
        </>
    );
};

export default Skills;
