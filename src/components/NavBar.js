import React from 'react';
import Link from "next/link";
import Logo from "@/components/Logo";

const CustomLink = ({href, title, className=''}) => {
    return (
        // 경로 커스텀
        <Link href={href} className={`${className}`}>
            {/*타이틀 명이 주소와 함께 들어가준다.*/}
            {title}

            <span className="h-[1px] inline-block"></span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='mx-4'/>
            </nav>
            <nav>
                <Link href="/" target={"_blank"}>Github</Link>
                <Link href="/" target={"_blank"}>Notion</Link>
            </nav>
            <div className='absolute left-[50%] top-6 translate-x-[50%]'>
                {/* 로고는 별도 컴포넌트로 분리 */}
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
