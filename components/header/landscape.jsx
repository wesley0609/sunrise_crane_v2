
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";

import gaEvent from "../../assets/js/ga/index.js";

import LanguagesBalloon from "./languagesBalloon.jsx";

const logoSectionClickHandler = (event) => {
    gaEvent.header.clickLogo();
};

const linkClickHandler = (event, item) => {
    gaEvent.header.clickMenu(item);
};

const App = (props) => {
    const router = useRouter();

    const languageBtnRef = useRef(null);

    const [languagesBalloonDisplay, setLanguagesBalloonDisplay] = useState(false);

    const getLinkFocusClass = (item) => {
        if(item.as == router.asPath){
            return "focus";
        }

        return "";
    };

    const languageBtnMouseOverHandler = (event) => {
        setLanguagesBalloonDisplay(true);
    };

    const languageBtnMouseOutHandler = (event) => {
        setLanguagesBalloonDisplay(false);
    };

    useEffect(() => {
        setLanguagesBalloonDisplay(false);
    }, [router]);

    return (
        <>
            <div className="header_content">
                <Link href="/" as="/">
                    <a className="logo_section" title={sunrise.seo.default.siteName} target="_self" onClick={(event) => logoSectionClickHandler(event)}>
                        <Image src="/image/logo.svg" width={235} height={60} alt={sunrise.seo.default.siteName} layout="responsive" priority />
                    </a>
                </Link>

                <ul className="navigation_section">
                    {
                        props.menu.map((item, index) => {
                            return (
                                <li className="navigation_tab" key={index}>
                                    <Link href={item.href} as={item.as}>
                                        <a className={`link ${getLinkFocusClass(item)}`} title={item.title} target="_self" onClick={(event) => linkClickHandler(event, item)}>{item.title}</a>
                                    </Link>
                                </li>
                            );
                        })
                    }

                    <div className="tool_section">
                        <div className="language_btn_container">
                            <button className="language_btn" onMouseOver={(event) => languageBtnMouseOverHandler(event)} onMouseOut={(event) => languageBtnMouseOutHandler(event)} title={sunrise.seo.other.language} ref={languageBtnRef}>{sunrise.seo.default.lang}</button>

                            {
                                (() => {
                                    if(languagesBalloonDisplay){
                                        return (
                                            <div className="language_balloon_container">
                                                <LanguagesBalloon setLanguagesBalloonDisplay={setLanguagesBalloonDisplay} />
                                            </div>
                                        );
                                    }
                                })()
                            }
                        </div>
                    </div>
                </ul>
            </div>

            <style jsx>
                {`
                    .header_content{
                        height: 80px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        padding-left: 8%;
                        padding-right: 8%;

                        @media screen and (max-width: 768px){
                            display: none;
                        }

                        .logo_section{
                            display: block;
                            width: 235px;
                            height: 60px;
                        }

                        .navigation_section{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;

                            .navigation_tab{
                                list-style-type: none;
                                margin-left: 8px;
                                margin-right: 8px;

                                .link{
                                    line-height: 20px;
                                    font-size: 15px;
                                    color: var(--white);

                                    &:hover{
                                        color: var(--primary);
                                    }

                                    &.focus{
                                        color: var(--primary);
                                    }
                                }
                            }

                            .tool_section{
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;

                                :before{
                                    content: "｜";
                                    color: var(--white);
                                }

                                .language_btn_container{
                                    position: relative;

                                    .language_btn{
                                        display: flex;
                                        flex-direction: row;
                                        justify-content: center;
                                        align-items: center;
                                        margin-left: 8px;
                                        margin-right: 8px;
                                        line-height: 20px;
                                        font-size: 15px;
                                        color: var(--white);

                                        &:before{
                                            content: "";
                                            background-image: url("/image/header/language.svg");
                                            height: 14px;
                                            width: 14px;
                                            background-size: 100% 100%;
                                            margin-right: 8px;
                                        }

                                        &:after{
                                            content: "";
                                            background-image: url("/image/header/more.svg");
                                            height: 8px;
                                            width: 5px;
                                            background-size: 100% 100%;
                                            margin-left: 8px;
                                        }
                                    }

                                    .language_balloon_container{
                                        position: absolute;
                                        top: 20px;
                                        left: 50%;
                                        transform: translateX(-50%);
                                    }
                                }
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    menu: PropTypes.array.isRequired
};

export default App;
