
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import gaEvent from "../../assets/js/ga/index.js";

import Gotop from "./gotop.jsx";

const logoSectionClickHandler = (event) => {
    gaEvent.footer.clickLogo();
};

const contactClickHandler = (event, item) => {
    gaEvent.footer.clickContact(item);
};

const App = (props) => {
    const router = useRouter();

    const year = new Date().getFullYear();
    const titleMapMeta = require(`../../assets/json/meta/contact/${router.locale}/titleMap.json`);
    const contactMeta = require(`../../assets/json/meta/contact/${router.locale}/index.json`);

    const meta = {
        titleMap: titleMapMeta,
        contact: contactMeta.content
    };

    const deviceType = useSelector((state) => {
        return state.deviceType;
    });

    return (
        <>
            <footer className="footer_section">
                <div className="background_section">
                    <Image src={`/image/footer/background.jpg`} alt="Footer background image" placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} objectFit="cover" layout="fill" />
                </div>

                <Link href="/" as="/">
                    <a className="logo_section" title={sunrise.seo.default.siteName} target="_self" onClick={(event) => logoSectionClickHandler(event)}>
                        <Image src="/image/logo.svg" width={300} height={77} alt={sunrise.seo.default.siteName} layout="responsive" />
                    </a>
                </Link>

                <div className="content_section">
                    <div className="content_item address">
                        <span className="title">{meta.titleMap.address}</span>
                        <a className="content" href={meta.contact.fullAddress.mapUrl} title={meta.contact.fullAddress.whole} target="_blank" rel="noreferrer" onClick={(event) => contactClickHandler(event, "address")}>{meta.contact.fullAddress.whole}</a>
                    </div>

                    <div className="content_item telephone">
                        <span className="title">{meta.titleMap.telephone}</span>
                        <a className="content" href={`tel:${meta.contact.telephone}`} title={meta.contact.telephone} target="_self" onClick={(event) => contactClickHandler(event, "telephone")}>{meta.contact.telephone}</a>
                    </div>

                    <div className="content_item fax">
                        <span className="title">{meta.titleMap.fax}</span>
                        <a className="content" href={`tel:${meta.contact.fax}`} title={meta.contact.fax} target="_self" onClick={(event) => contactClickHandler(event, "fax")}>{meta.contact.fax}</a>
                    </div>

                    {
                        (() => {
                            if(deviceType == "mobile"){
                                return (
                                    <br />
                                );
                            }
                        })()
                    }

                    <div className="content_item cellphone">
                        <span className="title">{meta.titleMap.cellphone}</span>
                        <a className="content" href={`tel:${meta.contact.cellphone}`} title={meta.contact.cellphone} target="_self" onClick={(event) => contactClickHandler(event, "cellphone")}>{meta.contact.cellphone}</a>
                    </div>

                    {
                        (() => {
                            if(deviceType == "pc"){
                                return (
                                    <br />
                                );
                            }
                        })()
                    }

                    <div className="content_item id">
                        <span className="title">{meta.titleMap.id}</span>
                        <span className="content">{meta.contact.id}</span>
                    </div>

                    {
                        (() => {
                            if(deviceType == "mobile"){
                                return (
                                    <br />
                                );
                            }
                        })()
                    }

                    <div className="content_item email">
                        <span className="title">{meta.titleMap.email}</span>
                        <a className="content" href={`mailto:${meta.contact.email}`} title={meta.contact.email} target="_self" onClick={(event) => contactClickHandler(event, "email")}>{meta.contact.email}</a>
                    </div>
                </div>

                <div className="copy_right_section">Copyright © 2016-{year} {sunrise.seo.default.siteName} All Rights Reserved</div>

                <div className="gotop_section">
                    <Gotop />
                </div>
            </footer>

            <style jsx>
                {`
                    .footer_section{
                        position: relative;
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

                        .background_section{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: -1;
                        }

                        .logo_section{
                            display: block;
                            width: 300px;
                            height: 77px;

                            @media screen and (max-width: 414px){
                                width: 272px;
                                height: 70px;
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

                        .gotop_section{
                            margin-top: 30px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default App;
