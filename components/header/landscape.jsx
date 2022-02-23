
import { connect } from "react-redux";
import { useRef, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";

import gaEvent from "../../assets/js/ga/index.js";

import LanguagesBalloon from "./languagesBalloon.jsx";

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

    const languageBtnRef = useRef(null);

    const linkFocusClass = useCallback((item) => {
        if(item.as == router.route){
            return "focus";
        }

        return "";
    }, [router]);

    const languageBtnMouseOverHandler = useCallback((event) => {
        props.dispatchLanguagesBalloonTrigger(languageBtnRef.current);
    }, [props, languageBtnRef]);

    const logoSectionClickHandler = useCallback((event) => {
        gaEvent.header.clickLogo();
    }, []);

    const linkClickHandler = useCallback((event, item) => {
        gaEvent.header.clickMenu(item);
    }, []);

    return (
        <>
            <div className="header_content">
                <Link href="/" as="/">
                    <a className="logo_section" title={sunrise.seo.default.siteName} target="_self" onClick={(event) => logoSectionClickHandler(event)}>
                        <img className="logo" width="235" height="60" src={require("../../public/logo.svg")} alt={sunrise.seo.default.siteName} />
                    </a>
                </Link>

                <ul className="navigation_section">
                    {
                        props.menu.map((item, index) => {
                            return (
                                <li className="navigation_tab" key={index}>
                                    <Link href={item.href} as={item.as}>
                                        <a className={`link ${linkFocusClass(item)}`} title={item.title} target="_self" onClick={(event) => linkClickHandler(event, item)}>{item.title}</a>
                                    </Link>
                                </li>
                            );
                        })
                    }

                    <div className="tool_section">
                        <button className="tool_btn language" onMouseOver={(event) => languageBtnMouseOverHandler(event)} ref={languageBtnRef}></button>
                    </div>
                </ul>

                {
                    (() => {
                        if(props.languagesBalloonTrigger){
                            return (
                                <LanguagesBalloon />
                            );
                        }
                    })()
                }
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

                            .logo{
                                display: block;
                                width: 100%;
                                height: 100%;
                            }
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
                                margin-left: 10px;

                                .tool_btn{
                                    background-image: url(${require("../../assets/image/header/translate.svg")});
                                    height: 24px;
                                    width: 24px;
                                    background-size: 24px 24px;
                                    margin-left: 8px;
                                    margin-right: 8px;
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
