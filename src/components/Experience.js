import React from 'react';


// Detail Fragment
const Details = ({position, company, companyLink, time, address, work}) => {
    return <li>
        <div>
            <h3>
                {position}&nbsp;<a href={companyLink}>@{company}</a>
            </h3>
            <span>
                {time} | {address}
            </span>
            <p>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Experience
            </h2>

            <div className="w-[75%] mx-auto relative">

                <ul>
                    <Details position="Front-End Engineer" company="Webiznet" time="2022.07-2022.12" address="Seoul" work="솔루션 개발팀에서 프론트엔드 개발을 진행하였습니다." companyLink=""/>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
