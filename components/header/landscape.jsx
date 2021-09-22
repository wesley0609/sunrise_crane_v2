
import { connect } from "react-redux";
import { useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import gaEvent from "../../assets/js/ga/index.js";

import pkg from "../../package.json";

const mapStateToProps = (state) => {
    return {
        focus: state.header.focus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const linkFocusClass = useCallback((item) => {
        if(item.as == props.focus){
            return "focus";
        }

        return "";
    }, [props.focus]);

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
                    <a className="logo_section" title={pkg.siteName} target="_self" onClick={(event) => logoSectionClickHandler(event)}>
                        <img className="logo" width="235" height="60" src={require("../../public/logo.svg")} alt={`${pkg.siteName}｜${pkg.enName}`} />
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
                            justify-content: flex-end;
                            align-items: center;
                            position: absolute;
                            right: 8%;
                            top: 0;
                            height: 100%;

                            .navigation_tab{
                                list-style-type: none;
                                margin-left: 8px;
                                margin-right: 8px;

                                .link{
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                    height: 100%;
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
