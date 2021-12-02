
import { connect } from "react-redux";
import { useMemo, useCallback } from "react";
import Link from "next/link";

import gaEvent from "../../assets/js/ga/index.js";

import pkg from "../../package.json";
import contactMeta from "../../assets/json/meta/contact/index.json";

import Gotop from "./gotop.jsx";

const mapStateToProps = (state) => {
    return {
        deviceType: state.deviceType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const meta = useMemo(() => {
        return {
            contact: contactMeta.contact
        };
    }, []);

    const address = useMemo(() => {
        let fullAddress = meta.contact.fullAddress;
        let tw = fullAddress.tw;
        let us = fullAddress.us;

        return {
            tw: `${fullAddress.postal} ${tw.county}${tw.district}${tw.address}`,
            us: `${us.address}, ${us.district}, ${us.county} ${fullAddress.postal}, ${us.country}`
        };
    }, [meta]);

    const year = useMemo(() => {
        return new Date().getFullYear();
    }, []);

    const logoSectionClickHandler = useCallback((event) => {
        gaEvent.footer.clickLogo();
    }, []);

    const contactClickHandler = useCallback((event, item) => {
        gaEvent.footer.clickContact(item);
    }, []);

    return (
        <>
            <footer className="footer_section">
                <Link href="/" as="/">
                    <a className="logo_section" title={pkg.siteName} target="_self" onClick={(event) => logoSectionClickHandler(event)}>
                        <img className="logo" width="300" height="77" src={require("../../public/logo.svg")} alt={`${pkg.siteName} - ${pkg.enName}`} />
                    </a>
                </Link>

                <div className="content_section">
                    <div className="content_item address">
                        <span className="title">地址</span>
                        <a className="content" href={meta.contact.fullAddress.mapUrl} title={address.tw} target="_blank" rel="noreferrer" onClick={(event) => contactClickHandler(event, "address")}>{address.tw}</a>
                        <a className="content" href={meta.contact.fullAddress.mapUrl} title={address.us} target="_blank" rel="noreferrer" onClick={(event) => contactClickHandler(event, "address")}>{address.us}</a>
                    </div>

                    <div className="content_item local">
                        <span className="title">電話</span>
                        <a className="content" href={`tel:${meta.contact.phoneNumber.local}`} title={meta.contact.phoneNumber.local} target="_self" onClick={(event) => contactClickHandler(event, "localPhone")}>{meta.contact.phoneNumber.local}</a>
                    </div>

                    <div className="content_item fax">
                        <span className="title">傳真</span>
                        <a className="content" href={`tel:${meta.contact.fax}`} title={meta.contact.fax} target="_self" onClick={(event) => contactClickHandler(event, "fax")}>{meta.contact.fax}</a>
                    </div>

                    {
                        (() => {
                            if(props.deviceType == "mobile"){
                                return (
                                    <br />
                                );
                            }
                        })()
                    }

                    <div className="content_item phone">
                        <span className="title">手機</span>
                        <a className="content" href={`tel:${meta.contact.phoneNumber.phone}`} title={meta.contact.phoneNumber.phone} target="_self" onClick={(event) => contactClickHandler(event, "phone")}>{meta.contact.phoneNumber.phone}</a>
                    </div>

                    {
                        (() => {
                            if(props.deviceType == "pc"){
                                return (
                                    <br />
                                );
                            }
                        })()
                    }

                    <div className="content_item id">
                        <span className="title">統編</span>
                        <span className="content">{meta.contact.id}</span>
                    </div>

                    {
                        (() => {
                            if(props.deviceType == "mobile"){
                                return (
                                    <br />
                                );
                            }
                        })()
                    }

                    <div className="content_item email">
                        <span className="title">Email</span>
                        <a className="content" href={`mailto:${meta.contact.email}`} title={meta.contact.email} target="_self" onClick={(event) => contactClickHandler(event, "email")}>{meta.contact.email}</a>
                    </div>
                </div>

                <div className="copy_right_section">Copyright © 2016-{year} {pkg.siteName} All Rights Reserved</div>
                <Gotop />
            </footer>

            <style jsx>
                {`
                    .footer_section{
                        position: relative;
                        background-image: url(${require("../../assets/image/footer/background.jpg")});
                        background-size: cover;
                        background-position: center center;
                        text-align: center;
                        padding-top: 60px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        @media screen and (max-width: 414px){
                            padding-top: 30px;
                            padding-left: 5px;
                            padding-right: 5px;
                        }

                        .logo_section{
                            display: block;
                            width: 300px;
                            height: 77px;

                            @media screen and (max-width: 414px){
                                width: 272px;
                                height: 70px;
                            }

                            .logo{
                                display: block;
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .content_section{
                            margin-top: 35px;

                            @media screen and (max-width: 414px){
                                margin-top: 20px;
                            }

                            .content_item{
                                line-height: 35px;

                                @media screen and (min-width: 769px){
                                    a:hover{
                                        text-decoration: underline;
                                    }
                                }

                                &:not(.address){
                                    display: inline-flex;
                                    margin-left: 10px;
                                    margin-right: 10px;
                                }

                                &.address{
                                    .content:nth-child(3){
                                        display: block;
                                        width: 100%;
                                        margin-left: 0;
                                    }
                                }
                                
                                .title{
                                    font-size: 14px;
                                    font-weight: bold;
                                    color: var(--white);
                                }

                                .content{
                                    font-size: 14px;
                                    margin-left: 10px;
                                    color: var(--white);
                                }
                            }
                        }

                        .copy_right_section{
                            font-size: 12px;
                            color: var(--gray);
                            line-height: 20px;
                            margin-top: 20px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
