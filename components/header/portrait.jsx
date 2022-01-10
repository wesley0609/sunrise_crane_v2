
import { connect } from "react-redux";
import { useEffect, useCallback, useState, useMemo } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";

import gaEvent from "../../assets/js/ga/index.js";

import pkg from "../../package.json";

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

    const menuBtnClickHandler = useCallback((event) => {
        setMenuBtnBool(!menuBtnBool);
    }, [menuBtnBool]);

    const logoSectionClickHandler = useCallback((event) => {
        gaEvent.header.clickLogo();
    }, []);

    const linkClickHandler = useCallback((event, item) => {
        gaEvent.header.clickMenu(item);
    }, []);

    useEffect(() => {
        setMenuBtnBool(false);
    }, [router]);

    return (
        <>
            <div className="header_content">
                <Link href="/" as="/">
                    <a className="logo_section" title={pkg.siteName} target="_self" onClick={(event) => logoSectionClickHandler(event)}>
                        <img className="logo" width="235" height="60" src={require("../../public/logo.svg")} alt={`${pkg.siteName} - ${pkg.enName}`} />
                    </a>
                </Link>

                <div className="menu_btn_section">
                    <button className="menu_btn" onClick={menuBtnClickHandler} title="目錄">
                        {
                            (() => {
                                if(menuBtnBool){
                                    return (
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/header/close.svg")} alt="關閉目錄" />
                                    );
                                }
                                else{
                                    return (
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/header/open.svg")} alt="開啟目錄" />
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
