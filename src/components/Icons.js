import * as React from "react"
export const GithubIcon = ({className, ...rest}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 512 512"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
        <path
            fill="currentColor"
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
)

export const NotionIcon = ({className, ...rest}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.9em"
        height="2.9em"
        viewBox="0 0 100 100"
        className={`w-auto h-auto ${className}`}
        {...rest}
    >
        <path
            fill="#fff"
            d="M6.017 4.313 61.35.226c6.797-.583 8.543-.19 12.817 2.917L91.83 15.586c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193l-64.256 3.892c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94C.967 76.827 0 74.497 0 71.773v-60.66c0-3.497 1.553-6.413 6.017-6.8z"
        />
        <path
            fill="#000"
            fillRule="evenodd"
            d="M61.35.227 6.017 4.314C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143C69.894.036 68.147-.357 61.35.226zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99l-7.576-6.026c-.77-.78-.383-1.753 1.557-1.947l53.193-3.887c4.467-.39 6.793 1.167 8.54 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36L26.6 19.477l-.68.047zM19.803 88.3V30.367c0-2.53.777-3.697 3.103-3.893L86 22.78c2.14-.193 3.107 1.167 3.107 3.693V84.02c0 2.53-.39 4.67-3.883 4.863l-60.377 3.5c-3.493.193-5.043-.97-5.043-4.083zm59.6-54.827c.387 1.75 0 3.5-1.75 3.7l-2.91.577v42.773c-2.527 1.36-4.853 2.137-6.797 2.137-3.107 0-3.883-.973-6.21-3.887l-19.03-29.94V77.8l6.02 1.363s0 3.5-4.857 3.5l-13.39.777c-.39-.78 0-2.723 1.357-3.11l3.497-.97v-38.3l-4.853-.393c-.39-1.75.58-4.277 3.3-4.473l14.367-.967 19.8 30.327v-26.83l-5.047-.58c-.39-2.143 1.163-3.7 3.103-3.89l13.4-.78z"
            clipRule="evenodd"
        />
    </svg>
)

export const VelogIcon = ({className, ...rest}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="2.9em"
        height="2.9em"
        className={`w-auto h-auto ${className}`}
        {...rest}
    >
        <title>{"Velog"}</title>
        <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553a14.1 14.1 0 0 0 1.283-2.273c.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z" />
    </svg>
)

export const LinkArrow = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={`w-full h-full ${className}`}
        {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
)


export const CircleText = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 800 800"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path d="M379.3 185.2c-2.4.5-4.3 1.5-4.3 2.1 0 .7.7 5.8 1.7 11.4 1.2 7.6 1.4 10.6.6 11.4-.8.8-4.4-1.7-13.4-9.4-11.5-10-12.4-10.5-15.8-10-2 .3-3.9.9-4.3 1.2-.4.4.9 10.3 3 22.1l3.8 21.5 3.5-.3c6.4-.7 6.8-1.3 5.3-8.4-.7-3.5-1.6-8.7-2-11.6-.6-4.6-.4-5.2 1.2-5.2 1.1 0 7.1 4.5 13.5 9.9 11.4 9.8 11.6 9.9 15.7 9.4 2.3-.3 4.2-.9 4.2-1.4 0-2.5-7.3-42.5-7.9-43-.3-.3-2.5-.2-4.8.3zM401.1 203.7c-1.3 10.9-2.4 20.9-2.5 22.3-.1 2.4.2 2.5 10.9 3.8 13 1.5 19.8 1.1 25.1-1.6 11.1-5.7 15.4-19.8 9.1-30.4-4.2-7.2-9.2-9.7-24.5-11.9-7-1-13.4-1.9-14.3-1.9-1.3 0-1.9 3.5-3.8 19.7zm20.7-9.7c10.2 1.7 14.2 5.7 14.2 14 0 10.1-7.1 15.8-18.3 14.6-3.4-.3-6.5-1-7-1.5-1.1-1.1.9-22.1 2.4-25.9 1-2.6.5-2.5 8.7-1.2zM310.5 204.6c-7.6 3.6-14.1 6.7-14.4 6.9-.2.3 3.1 8 7.4 17.2 4.2 9.1 8.4 18.1 9.1 20 .8 1.8 1.6 3.3 1.8 3.3.3 0 31-14.1 31.3-14.4.5-.5-2.2-6.6-2.8-6.6-.4 0-5.1 2-10.5 4.5-5.3 2.5-10.3 4.5-11 4.5-1.7 0-5.7-7.7-4.8-9.1.3-.6 4.4-2.8 9-5 4.6-2.1 8.4-4.2 8.4-4.8 0-.5-.4-2.1-1-3.5l-.9-2.5-8.7 3.9c-4.7 2.2-9.3 4-10.1 4-1.6 0-4.7-6.6-4-8.4.3-.7 4.8-3.2 10.1-5.7 5.3-2.4 9.6-5 9.6-5.7 0-2.1-2-5.2-3.3-5.1-.7 0-7.5 2.9-15.2 6.5zM270.2 229c-6.7 5.4-13.5 10.8-15 11.8l-2.7 2 2.4 2.6c1.4 1.4 2.8 2.6 3.1 2.6.4 0 2.7-1.6 5.1-3.5 2.4-1.9 5.1-3.5 5.9-3.5.8 0 6.2 6.1 12 13.5 5.7 7.4 10.9 13.5 11.5 13.5.5-.1 2.5-1.4 4.3-2.9l3.4-2.9-10.6-13.3c-6.4-8.1-10.6-14.3-10.6-15.6 0-1.3.3-2.3.8-2.3.4 0 2.5-1.5 4.7-3.4 3.9-3.3 3.9-3.3 2.2-6-1-1.4-2.3-2.6-3-2.5-.6 0-6.7 4.5-13.5 9.9zM521.8 224.9c-.1.5-6.3 7.8-13.7 16.2l-13.4 15.2 5.9 5.4c17.2 15.5 24.7 18.7 34.2 14.7 8.3-3.4 14.6-12.5 14.5-20.9 0-7.4-3-12.1-14-22.4-9-8.4-12.6-10.5-13.5-8.2zm10.7 15.6c5.6 4.6 7.9 9.5 7.1 14.8-1.8 11.2-14.2 16.4-23.2 9.8-5.2-3.8-7.6-6.6-7.2-8.5.5-2.4 15.9-19.6 17.5-19.6.8 0 3.4 1.6 5.8 3.5zM466.2 234.2c-3.3 4.2-.6 10.8 4.4 10.8 5.5 0 8.5-7.4 4.2-10.4-2.7-1.9-7.2-2.1-8.6-.4zM240.3 256.5c-1.3 1.9-2.3 3.8-2.3 4.2 0 .5 4.1 3.7 9 7.3 5.5 3.9 8.9 7.1 8.8 8-.3 1.2-3.5 1.7-16.6 2.5l-16.3 1-2.5 3.3c-1.5 1.8-2.5 3.4-2.3 3.6.2.1 7.9 5.9 17.1 12.9 9.2 7 17.2 12.7 17.7 12.7.6 0 2.2-1.6 3.8-3.6l2.8-3.7-2.2-1.4c-6.5-4.3-15.8-12.1-16.1-13.5-.2-1.3 2.1-1.6 15.5-2.2l15.8-.6 2.8-3.2c1.5-1.8 2.7-3.7 2.6-4.3 0-1-32.4-25.8-34.4-26.3-.5-.1-2 1.4-3.2 3.3zM550.6 277.5c-9.2 6.2-17.3 11.8-17.9 12.4-.7.7 1.7 5.2 8.3 15.1 5.1 7.7 9.8 14 10.4 14 1.5-.1 4.6-2.5 4.6-3.6 0-.5-2.7-5-6-9.9-3.3-5-6-9.5-6-10.2 0-1.4 6.1-5.3 8.4-5.3.9 0 3.8 3.2 6.7 7.7 2.8 4.3 5.3 7.9 5.7 8 .4.2 1.8-.6 3.1-1.6l2.5-1.9-5.2-7.9c-2.9-4.4-5.2-8.6-5.2-9.4 0-1.6 4.9-4.9 7.4-4.9.8 0 4.3 4 7.6 9 3.3 4.9 6.4 9 6.8 9 .4 0 1.8-.9 3.1-1.9l2.3-1.8-9.3-14.1c-5.2-7.8-9.6-14.1-9.9-14.1-.3 0-8.1 5.1-17.4 11.4zM580 317.1c-7.4 6.7-15.4 14-17.8 16.1l-4.3 3.9 1.7 5.2c.9 2.9 1.9 5.4 2.1 5.7.5.6 46.6 3.9 47.4 3.4.4-.2 0-2.3-.9-4.7l-1.6-4.4-16.3-1.3c-9-.7-16.6-1.6-16.8-2-1-1.6.9-3.7 12.1-13.5 12.4-10.7 12.2-10.2 9.1-17.7l-1.2-2.9-13.5 12.2zM212.5 308.9c-14.6 6.8-19.2 28.8-8.3 40 11.8 12 28.5 9.5 37-5.6 5.9-10.5 4.8-21.8-3.1-29.3-7.1-7-17.3-9-25.6-5.1zm13 9.2c2.1.6 5.4 2.6 7.2 4.4 2.9 2.9 3.3 4 3.3 8.4 0 6.7-2.1 10.6-7 13.1-14.9 7.6-29.2-9.3-18.9-22.4 3.2-4 8.8-5.3 15.4-3.5zM194.6 366c-1.9 1.7-4.2 5-5 7.3-1.8 4.9-3.7 26.9-2.3 27.8.4.3 6.1.9 12.5 1.3 6.4.5 15.8 1.1 20.7 1.5 5 .4 9.3.5 9.6.2.4-.3.9-2.7 1.2-5.2l.6-4.6-5.6-.6c-3.1-.3-6-1-6.5-1.5-.6-.6-.7-2.8-.3-5.1.6-3.8 1.2-4.4 6.9-7.6 6.3-3.5 6.3-3.6 6.9-8.7.4-2.9.5-5.4.3-5.6-.2-.2-2.1.7-4.3 2.1-2.1 1.3-5.2 3.1-7 4.1l-3.2 1.6-1.6-3c-2.4-4.7-7-7-13.7-7-5 0-6.2.4-9.2 3zm15.7 10.1c1.4 1.7 1.7 3.7 1.5 8.8l-.3 6.6-6.8.3c-9.2.4-10.1-.4-9.3-8.3.5-4.8 1.1-6.5 3.3-8.4 3.3-2.8 8.8-2.4 11.6 1zM585.1 366.8l-18.3 1.5.6 5.6c.3 3.1.8 10.6 1.2 16.8.4 6.1 1 11.6 1.4 12.2.4.7 1.9.9 3.9.5l3.2-.7-.7-10.6c-.4-5.8-.7-11.3-.8-12.1-.1-1.1 1.3-1.6 5.5-1.8l5.6-.3.7 6.2c.3 3.4.6 7.9.6 10 0 3.8.1 3.9 3.4 3.9 1.9 0 3.7-.3 3.9-.8.2-.4 0-4.9-.5-10.1-.5-5.1-.7-9.5-.4-9.8.3-.3 2.5-.8 5-1 3.3-.4 4.7-.2 5.1.8.3.8.8 6.1 1.3 11.9l.7 10.5 2.9.3c1.6.2 3.3-.1 3.7-.5.6-.6.5-7.7-.2-17.6l-1.2-16.7-4.1.1c-2.3.1-12.4.9-22.5 1.7zM568.6 411.7c-.3 1.5-1 6.4-1.6 10.8-.6 4.4-1.8 10.4-2.7 13.3-.9 3.1-1.2 5.6-.7 6.1 1.4 1.3 8.2 2.3 8.8 1.3.3-.5.8-4.6 1.1-9.2.8-11.7 1.2-13 4.4-13 1.4 0 9.5 1.1 17.9 2.4 8.4 1.3 15.4 2 15.6 1.7.2-.3.7-2.7 1.1-5.4.6-3.7.4-4.7-.7-4.7-.8 0-8.4-1.1-16.9-2.4-27.5-4.3-25.6-4.2-26.3-.9zM210.2 414.7c-1.9.4-2.3.9-1.8 2.6 1.8 6.5 2.9 16.8 1.9 17.8-1.3 1.3-10.1 3.1-11.3 2.4-.4-.2-1.5-5.4-2.5-11.5l-1.8-11h-3.3c-1.8 0-3.5.3-3.7.7-.4.7 4.9 33.3 5.5 33.8.2.2 10-1.4 21.8-3.5l21.5-3.7-.3-4.4c-.2-2.4-.7-4.8-1.1-5.2-.4-.4-4-.2-8 .4-3.9.7-7.4 1-7.7.7-.3-.3-1.2-4.9-2.1-10.2-1.7-10.1-1.5-9.9-7.1-8.9zM569.6 448.6c-.9.9-3.2 2-5.1 2.5-1.9.6-3.5 1.5-3.5 2.1 0 .6-1.2 2.7-2.6 4.6-3.5 4.5-6.4 12.3-6.4 17 0 10.4 7.1 19.8 17.3 22.7 5.2 1.5 6.2 1.5 11 .1 7.1-2.1 12-6.4 15.7-14 3.9-8 4.2-15.4.9-22.2-2.1-4.4-3.6-5.8-13.2-12-4.5-2.9-11.7-3.3-14.1-.8zm14.3 13.2c4.7 3.5 6.6 7 6.5 12.1-.2 14.4-18.9 19.3-27.1 7.1-4.9-7-1.8-18 5.7-20.7 4.4-1.6 11.8-.8 14.9 1.5zM237.4 468.4c-1.3 2.1-1.4 2.9-.2 5.2 1.9 3.9 4.1 5 7.5 3.8 6.5-2.3 4.8-11.4-2.2-11.4-2.6 0-3.9.6-5.1 2.4zM538.7 494.7l-2.7 3.6 3.2 2.8c1.8 1.6 3.6 2.8 4.1 2.9 1.8.1.4 4.5-2.7 8.3-4.8 6-6.6 10-6.6 15 0 7.3 5.9 14.2 13.2 15.3 6.3 1.1 11.7-2.4 20.8-13.5 4.4-5.3 7.9-10.1 7.9-10.6 0-1.2-31.4-26.9-33.2-27.2-.7-.2-2.4 1.4-4 3.4zm19.2 21.5c3 2.4 5.1 5 5.1 6.1 0 3.2-8.2 10.7-11.7 10.7-4.3 0-8.3-4-8.3-8.3 0-4.1 6.1-12.6 9.1-12.7.4 0 2.9 1.9 5.8 4.2zM250.4 502.1c-2.5 2.6-2.9 3.7-2.7 8l.2 4.9h-4.5c-8.7 0-12.9 7.7-8.5 15.9 1.9 3.6 18.1 22.9 19.4 23 .8.1 30.6-26.2 32.1-28.4.7-.9-.5-2.8-4-6.6-17.9-19.4-18.6-19.9-25.2-19.9-3 0-4.5.7-6.8 3.1zm19.3 12.6c2.9 3.1 5.3 6.2 5.3 6.9 0 1.5-6.9 7.4-8.7 7.4-.7 0-3.5-2.7-6.3-6.1-7.2-8.6-6.7-13.8 1.5-13.9 2.3 0 4 1.2 8.2 5.7zM255 526.6c5.4 4.9 6 7.7 2.4 11.5-1.5 1.6-3.6 2.9-4.5 2.9-2.9 0-9.9-9-9.9-12.7 0-6.2 6.1-7 12-1.7zM499.5 534.1c-6.6 4.9-12.4 9.4-12.9 9.9-1.1 1.1 1.2 6 2.8 6 .6 0 5.2-2.9 10.1-6.5 4.9-3.6 9.1-6.5 9.4-6.5 2 .1 6.1 5.5 6.1 8.1 0 .9-3.4 4-7.5 7-4.1 2.9-7.5 5.6-7.5 6 0 .4.8 1.7 1.9 3l1.9 2.3 7.2-5.3c8.2-5.9 9.1-6.4 10.6-5.3 1.5 1.1 4.4 5.5 4.4 6.8 0 .7-4 4.2-9 7.9l-9 6.7 2.1 2.9c1.2 1.7 2.5 2.6 3.2 2.2 5.5-3.3 25.2-18.9 25.2-19.8 0-2.2-23.9-34.4-25.5-34.4-.8.1-6.9 4.1-13.5 9zM289.6 530.9c-1 1.1-1.6 2.4-1.5 3 .2.5 4.6 3.7 9.7 7 6 3.9 9.2 6.7 9.2 7.9 0 1-1.3 3.3-2.9 5.2l-2.9 3.5-8.5-5.7-8.6-5.8-1.6 2.2c-.8 1.3-1.5 2.7-1.5 3.3 0 .5 3.4 3.2 7.5 5.9 4.2 2.7 7.8 5.3 8.1 5.7.6 1.1-2 6.1-4 7.9-1.4 1.1-3 .3-11.2-5.1l-9.6-6.3-1.9 2.5c-1 1.3-1.8 2.7-1.6 3.1.2.9 26.7 18.8 27.6 18.8.7 0 24.1-35.2 24.1-36.3 0-.8-26.6-18.7-27.8-18.7-.5 0-1.7.9-2.6 1.9zM475.3 549.1l-4.2 1.9 1.9 4.6c1.1 2.5 2 5.2 2 6 0 1.2-5.8 4.4-8 4.4-.4 0-3.4-1.8-6.8-4.1l-6.1-4.1-4.6 1.7c-2.5 1-4.5 2-4.5 2.4 0 .3 2.7 2.3 6 4.5 3.3 2.1 6 4.3 6 4.9 0 .6-.9 3-2.1 5.4-3.3 6.8-.6 15.1 6.3 19.3 5.4 3.3 11.3 2.6 24.3-2.7 6.3-2.5 11.5-5 11.5-5.4 0-.5-3.6-9.7-8-20.5-4.4-10.9-8-19.9-8-20.1 0-.6-1.5-.1-5.7 1.8zm6.5 27.7c1.2 3.2 2.2 6.5 2.2 7.4 0 1.6-9.5 5.8-13.1 5.8-3.4 0-6.9-4.4-6.9-8.8 0-4.3 1.5-6.2 7-8.5 6.8-2.9 8.3-2.4 10.8 4.1zM329.4 564.9c-3.3 5.1-8.7 13.5-12.1 18.8-3.5 5.3-6.3 10-6.3 10.4 0 .7 6.2 2.9 8.1 2.9.3 0 4.1-5.6 8.4-12.5 9-14.4 10.9-15.5 11.9-7.3.3 2.9.6 9.7.6 15 0 10.7.2 11 7 12.3l3.5.6 8-12.5c4.8-7.5 8.6-12.6 9.6-12.6 1.9 0 2.9 7.2 2.9 21 0 9.9.4 10.6 6.9 11.6l4.4.7-.6-6.9c-.4-3.8-.9-14-1.3-22.6-.4-9.7-1.1-16.1-1.8-16.6-.9-.8-9.4-3.2-10.9-3.2-.3 0-4 5.4-8.2 12-4.3 6.6-8.3 12-9 12-1.4 0-2.5-9.3-2.5-21.3 0-8.6-.2-8.9-8.9-10.3l-3.9-.6-5.8 9.1zM413 567c-2.5 2.5-2.5 5.1-.2 8 3.5 4.3 11.2 1.5 11.2-4 0-2.2-4.5-6-7.1-6-1.1 0-2.8.9-3.9 2z" />
    </svg>
);

export const SunIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
);

