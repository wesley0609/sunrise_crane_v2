
import { connect } from "react-redux";
import { useRef, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import tools from "../../assets/js/tools/index.js";
import gaEvent from "../../assets/js/ga/index.js";

const mapStateToProps = (state) => {
    return {
        languagesBalloonTrigger: state.header.languagesBalloonTrigger
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLanguagesBalloonTrigger: (value) => {
            dispatch({
                type: "header/languagesBalloonTrigger",
                value: value
            });
        }
    };
};

const App = (props) => {
    const router = useRouter();

    const languagesBalloonSectionRef = useRef(null);

    const [languagesBalloonSectionStyle, setLanguagesBalloonSectionStyle] = useState({
        top: "-9999px",
        left: "-9999px"
    });

    const linkFocusClass = useCallback((item) => {
        if(router.locale == item){
            return "focus";
        }

        return "";
    }, [router]);

    const linkClickHandler = useCallback((event, item) => {
        gaEvent.header.clickLanguage(item);
    }, []);

    useEffect(() => {
        let triggerEl = props.languagesBalloonTrigger;
        let languagesBalloonSectionEl = languagesBalloonSectionRef.current;
        let triggerElBoundingClientRect = triggerEl.getBoundingClientRect();
        let languagesBalloonSectionElBoundingClientRect = languagesBalloonSectionEl.getBoundingClientRect();
        let top = triggerElBoundingClientRect.top + triggerElBoundingClientRect.height;
        let left = triggerElBoundingClientRect.left - (languagesBalloonSectionElBoundingClientRect.width - triggerElBoundingClientRect.width) / 2;

        setLanguagesBalloonSectionStyle({
            top: `${top}px`,
            left: `${left}px`
        });
    }, [props.languagesBalloonTrigger, languagesBalloonSectionRef]);

    useEffect(() => {
        let mouseoverHandler = (event) => {
            if(!tools.isElement(event.target, props.languagesBalloonTrigger) && !tools.isElement(event.target, languagesBalloonSectionRef.current)){
                props.dispatchLanguagesBalloonTrigger(null);
            }
        };

        removeEventListener("mouseover", mouseoverHandler);
        addEventListener("mouseover", mouseoverHandler);

        return () => {
            removeEventListener("mouseover", mouseoverHandler);
        };
    }, [props, props.languagesBalloonTrigger, languagesBalloonSectionRef]);

    useEffect(() => {
        const routeChangeHandler = () => {
            props.dispatchLanguagesBalloonTrigger(null);
        };
        
        router.events.off("routeChangeStart", routeChangeHandler);
        router.events.on("routeChangeStart", routeChangeHandler);
    
        return () => {
          router.events.off("routeChangeStart", routeChangeHandler);
        };
    }, [props, router]);

    return (
        <>
            <div className="languages_balloon_section" ref={languagesBalloonSectionRef}>
                <div className="content_section">
                    <div className="content_container">
                        <Link href={router.route} as={router.route} locale="zh-TW">
                            <a className={`link ${linkFocusClass("zh-TW")}`} title="中文" target="_self" onClick={(event) => linkClickHandler(event, "zh-TW")}>中文</a>
                        </Link>

                        <Link href={router.route} as={router.route} locale="en-US">
                            <a className={`link ${linkFocusClass("en-US")}`} title="English" target="_self" onClick={(event) => linkClickHandler(event, "en-US")}>English</a>
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .languages_balloon_section{
                        position: fixed;
                        top: ${languagesBalloonSectionStyle.top};
                        left: ${languagesBalloonSectionStyle.left};

                        .content_section{
                            margin-top: 15px;
                            background-color: var(--white);
                            box-shadow: 0px 5px 15px #0000001a;
                            overflow: hidden;

                            .content_container{
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;

                                .link{
                                    font-size: 15px;
                                    line-height: 30px;
                                    padding: 10px 15px;
                                    width: 100%;
                                    text-align: center;
                                    border-bottom: 1px solid #e3e3e3;

                                    &:last-child{
                                        border-bottom: none;
                                    }

                                    &:hover{
                                        background-color: var(--primary);
                                        color: var(--white);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
