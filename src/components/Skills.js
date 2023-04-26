import React from 'react';
import {motion} from "framer-motion";

const Skills = () => {
    return (
        <>
            {/* Core Competency */}
            <h2 className="font-bold text-5xl mt-64 w-full text-center">
                Core Competency
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center bg-circularLight">

                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
                whileHover={{scale: 1.05}}>
                    Web
                </motion.div>
            </div>
        </>
    );
};

export default Skills;
