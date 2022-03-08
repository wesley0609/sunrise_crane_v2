
import { connect } from "react-redux";
import { useEffect, useCallback, useState, useMemo } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";

import gaEvent from "../../assets/js/ga/index.js";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const router = useRouter();

    const [menuBtnBool, setMenuBtnBool] = useState(false);

    // cannot directly control the DOM because SEO
    const navigationSectionClass = useMemo(() => {
        if(menuBtnBool){
            return "open";
        }

        return "";
    }, [menuBtnBool]);

    const linkFocusClass = useCallback((item) => {
        if(item.as == router.route){
            return "focus";
        }

        return "";
    }, [router]);

    const languageLinkFocusClass = useCallback((item) => {
        if(router.locale == item){
            return "focus";
        }

        return "";
    }, [router]);

    const menuBtnClickHandler = useCallback((event) => {
        setMenuBtnBool(!menuBtnBool);
    }, [menuBtnBool]);

    const logoSectionClickHandler = useCallback((event) => {
        gaEvent.header.clickLogo();
    }, []);

    const linkClickHandler = useCallback((event, item) => {
        gaEvent.header.clickMenu(item);
    }, []);

    const languageLinkClickHandler = useCallback((event, item) => {
        gaEvent.header.clickLanguage(item);
    }, []);

    useEffect(() => {
        setMenuBtnBool(false);
    }, [router]);

    return (
        <>
            <div className="header_content">
                <Link href="/" as="/">
                    <a className="logo_section" title={sunrise.seo.default.siteName} target="_self" onClick={(event) => logoSectionClickHandler(event)}>
                        <img className="logo" width="235" height="60" src={require("../../public/logo.svg")} alt={sunrise.seo.default.siteName} />
                    </a>
                </Link>

                <div className="menu_btn_section">
                    <button className="menu_btn" onClick={menuBtnClickHandler} title={sunrise.seo.other.menu}>
                        {
                            (() => {
                                if(menuBtnBool){
                                    return (
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/header/close.svg")} alt={sunrise.seo.other.less} />
                                    );
                                }
                                else{
                                    return (
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/header/open.svg")} alt={sunrise.seo.other.more} />
                                    );
                                }
                            })()
                        }
                    </button>
                </div>

                <ul className={`navigation_section ${navigationSectionClass}`}>
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

                    <div className="language_link_section">
                        <Link href={router.route} as={router.route} locale="zh-TW">
                            <a className={`link ${languageLinkFocusClass("zh-TW")}`} title="中文" target="_self" onClick={(event) => languageLinkClickHandler(event, "zh-TW")}>中文</a>
                        </Link>

                        <Link href={router.route} as={router.route} locale="en-US">
                            <a className={`link ${languageLinkFocusClass("en-US")}`} title="English" target="_self" onClick={(event) => languageLinkClickHandler(event, "en-US")}>English</a>
                        </Link>
                    </div>
                </ul>
            </div>

            <style jsx>
                {`
                    .header_content{
                        position: relative;
                        height: 80px;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: center;
                        padding-left: 6%;
                        padding-right: 6%;

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

                        .menu_btn_section{
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                            align-items: center;
                            position: absolute;
                            right: 6%;
                            top: 0;
                            height: 100%;

                            .menu_btn{
                                width: 24px;
                                height: 24px;

                                .icon{
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }

                        .navigation_section{
                            position: fixed;
                            top: 80px;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            background-color: #000000f2;
                            z-index: 100;
                            display: none;

                            &.open{
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                            }

                            .navigation_tab{
                                list-style-type: none;

                                .link{
                                    font-size: 15px;
                                    color: var(--white);
                                    line-height: 50px;

                                    &.focus{
                                        color: var(--primary);
                                    }
                                }                                
                            }

                            .language_link_section{
                                display: inline-block;
                                text-align: center;

                                .link{
                                    font-size: 15px;
                                    color: var(--white);
                                    line-height: 50px;

                                    &:not(:last-child):after{
                                        content: "｜";
                                        color: var(--white);
                                        margin-left: 5px;
                                        margin-right: 5px;
                                    }

                                    &.focus{
                                        color: var(--primary);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
