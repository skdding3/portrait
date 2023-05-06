import React,{ useEffect, useState } from 'react';

const UseThemeSwitcher = () => {

    // 브라우저의 테마가 dark 인가 light 인가 구분해주는 쿼리
    const preferDarkQuery = "(prefer-color-scheme: dark)"
    const [mode, setMode] = useState("dark");

    // EFFECT
    useEffect(() => {

        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light"
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handleChange();

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)

    },[])


    useEffect(() => {
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        } else {
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    },[mode])

    return [mode, setMode]
};

export default UseThemeSwitcher;
