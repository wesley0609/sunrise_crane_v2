
import { connect } from "react-redux";
import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import LazyLoad from "lazyload";

import gaEvent from "../../assets/js/ga/index.js";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const contactClickHandler = useCallback((event, item) => {
        gaEvent.footer.clickContact(item);
    }, []);

    useEffect(() => {
        let images = document.querySelectorAll(".left_section .contact_image");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });
    }, []);

    return (
        <>
            <div className="content_section">
                <div className="background_section"></div>

                <div className="content_container">
                    <div className="left_section">
                        <div className="padding_box"></div>
                        <img className="contact_image" width="1200" height="900" data-src={require("../../assets/image/contact/index.jpg")} src={require("../../assets/image/poster/default.png")} alt={props.contact.title} />
                    </div>

                    <div className="right_section">
                        <div className="right_container">
                            <div className="title_section">{props.contact.title}</div>

                            <div className="contact_items">
                                <div className="contact_item">
                                    <div className="item_title">
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/contact/icon/telephone.svg")} alt={props.titleMap.telephone} />
                                        <h2 className="title">{props.titleMap.telephone}</h2>
                                    </div>
                                    
                                    <h3 className="ssr_only">{props.contact.telephone}</h3>
                                    <a className="content" href={`tel:${props.contact.telephone}`} title={props.contact.telephone} target="_self" onClick={(event) => contactClickHandler(event, "telephone")}>{props.contact.telephone}</a>
                                </div>

                                <div className="contact_item">
                                    <div className="item_title">
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/contact/icon/cellphone.svg")} alt={props.titleMap.cellphone} />
                                        <h2 className="title">{props.titleMap.cellphone}</h2>
                                    </div>
                                    
                                    <h3 className="ssr_only">{props.contact.cellphone}</h3>
                                    <a className="content" href={`tel:${props.contact.cellphone}`} title={props.contact.cellphone} target="_self" onClick={(event) => contactClickHandler(event, "cellphone")}>{props.contact.cellphone}</a>
                                </div>

                                <div className="contact_item">
                                    <div className="item_title">
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/contact/icon/fax.svg")} alt={props.titleMap.fax} />
                                        <h2 className="title">{props.titleMap.fax}</h2>
                                    </div>
                                    
                                    <h3 className="ssr_only">{props.contact.fax}</h3>
                                    <a className="content" href={`tel:${props.contact.fax}`} title={props.contact.fax} target="_self" onClick={(event) => contactClickHandler(event, "fax")}>{props.contact.fax}</a>
                                </div>

                                <div className="contact_item">
                                    <div className="item_title">
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/contact/icon/id.svg")} alt={props.titleMap.id} />
                                        <h2 className="title">{props.titleMap.id}</h2>
                                    </div>
                                    
                                    <h3 className="ssr_only">{props.contact.id}</h3>
                                    <span className="content">{props.contact.id}</span>
                                </div>

                                <div className="contact_item">
                                    <div className="item_title">
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/contact/icon/email.svg")} alt={props.titleMap.email} />
                                        <h2 className="title">{props.titleMap.email}</h2>
                                    </div>
                                    
                                    <h3 className="ssr_only">{props.contact.email}</h3>
                                    <a className="content" href={`mailto:${props.contact.email}`} title={props.contact.email} target="_self" onClick={(event) => contactClickHandler(event, "email")}>{props.contact.email}</a>
                                </div>
                                
                                <div className="contact_item">
                                    <div className="item_title">
                                        <img className="icon" width="24" height="24" src={require("../../assets/image/contact/icon/address.svg")} alt={props.titleMap.address} />
                                        <h2 className="title">{props.titleMap.address}</h2>
                                    </div>
                                    
                                    <h3 className="ssr_only">{props.contact.fullAddress.whole}</h3>
                                    <a className="content" href={props.contact.fullAddress.mapUrl} title={props.contact.fullAddress.whole} target="_blank" rel="noreferrer" onClick={(event) => contactClickHandler(event, "address")}>{props.contact.fullAddress.whole}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .content_section{
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        padding-top: 40px;
                        padding-bottom: 40px;
                        position: relative;

                        @media screen and (max-width: 414px){
                            padding-top: 20px;
                            padding-bottom: 0;
                        }

                        .background_section{
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 120px;
                            bottom: 0;
                            left: 0;
                            background-color: var(--background-gray);
                        }

                        .content_container{
                            width: 80%;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: stretch;
                            position: relative;

                            @media screen and (max-width: 768px){
                                width: 90%;
                                flex-direction: column;
                            }

                            .left_section{
                                width: 40%;
                                position: relative;

                                @media screen and (max-width: 768px){
                                    width: 100%;
                                }

                                .padding_box{
                                    padding-bottom: 75%;
                                }

                                .contact_image{
                                    display: block;
                                    position: absolute;
                                    width: 100%;
                                    height: 100%;
                                    top: 0;
                                    left: 0;
                                }
                            }

                            .right_section{
                                flex: 1;
                                background-color: var(--white);
                                box-shadow: 0px 3px 20px #0000000d;
                                display: flex;
                                flex-direction: column;
                                flex-wrap: wrap;
                                justify-content: center;
                                align-items: center;
                                padding-top: 20px;
                                padding-bottom: 20px;

                                @media screen and (max-width: 768px){
                                    width: 100%;
                                }

                                .right_container{
                                    width: 70%;

                                    @media screen and (max-width: 768px){
                                        width: 90%;
                                    }

                                    .title_section{
                                        font-size: 22px;
                                        line-height: 30px;
                                        padding-bottom: 10px;
                                        border-bottom: 1px solid #b1b1b1;

                                        @media screen and (max-width: 414px){
                                            font-size: 20px;
                                        }
                                    }

                                    .contact_items{
                                        margin-top: 15px;
                                        margin-left: 15px;
                                        line-height: 25px;

                                        @media screen and (max-width: 768px){
                                            margin-left: 0;
                                        }

                                        .contact_item{
                                            display: flex;
                                            flex-direction: row;
                                            justify-content: flex-start;
                                            align-items: flex-start;
                                            margin-top: 5px;

                                            @media screen and (min-width: 769px){
                                                a:hover{
                                                    text-decoration: underline;
                                                }
                                            }

                                            .item_title{
                                                display: flex;
                                                flex-direction: row;
                                                justify-content: center;
                                                align-items: center;

                                                .icon{
                                                    display: block;
                                                    width: 20px;
                                                    height: 20px;

                                                    @media screen and (max-width: 414px){
                                                        width: 16px;
                                                        height: 16px;
                                                    }
                                                }

                                                .title{
                                                    margin-left: 6px;

                                                    @media screen and (max-width: 414px){
                                                        font-size: 14px;
                                                        margin-left: 4px;
                                                    }

                                                    &:after{
                                                        content: "：";
                                                    }
                                                }
                                            }

                                            .content{                                                
                                                @media screen and (max-width: 414px){
                                                    font-size: 14px;
                                                }
                                            }
                                        }
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
    titleMap: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
