
import { connect } from "react-redux";
import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import LazyLoad from "lazyload";

import gaEvent from "../../assets/js/ga/index.js";

const mapStateToProps = (state) => {
    return {
        deviceType: state.deviceType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const moreLinkClickHandler = useCallback((event) => {
        gaEvent.home.clickGallery();
    }, []);

    useEffect(() => {
        let images = document.querySelectorAll(".poster_section .poster");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });
    }, []);

    return (
        <>
            <div className="gallery_section">
                <div className="left_section">
                    <div className="left_container">
                        <div className="title_section">
                            <h2 className="title">{props.homeGallery.title}</h2>
                            <div className="subtitle">{props.homeGallery.subtitle.toUpperCase()}</div>

                            {
                                (() => {
                                    if(props.deviceType == "pc"){
                                        return (
                                            <div className="background">{props.homeGallery.subtitle.toUpperCase()}</div>
                                        );
                                    }
                                })()
                            }

                            <div className="border"></div>
                        </div>

                        {
                            (() => {
                                if(props.deviceType == "mobile" || props.deviceType == "pad"){
                                    return (
                                        <div className="poster_section">
                                            <div className="padding_box"></div>
                                            <img className="poster" width="900" height="628" data-src={require("../../assets/image/home/gallery/index.png")} src={require("../../assets/image/poster/default.png")} alt={props.homeGallery.title} />
                                        </div>
                                    );
                                }
                            })()
                        }

                        <h3 className="description_section">{props.homeGallery.description}</h3>

                        <Link href={props.homeGallery.href} as={props.homeGallery.as}>
                            <a className="more_link" title={props.homeGallery.title} target="_self" onClick={(event) => moreLinkClickHandler(event)}>
                                <div className="ssr_only">{props.homeGallery.title}</div>
                                <i className="icon"></i>
                            </a>
                        </Link>
                    </div>
                </div>

                {
                    (() => {
                        if(props.deviceType == "pc"){
                            return (
                                <div className="right_section">
                                    <div className="right_container">
                                        <div className="poster_section">
                                            <div className="padding_box"></div>
                                            <img className="poster" width="900" height="628" data-src={require("../../assets/image/home/gallery/index.png")} src={require("../../assets/image/poster/default.png")} alt={props.homeGallery.title} />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })()
                }
            </div>

            <style jsx>
                {`
                    .gallery_section{
                        background-image: url(${require("../../assets/image/home/gallery/background.jpg")});
                        background-size: cover;
                        background-position: right center;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding-top: 60px;
                        padding-bottom: 60px;

                        @media screen and (max-width: 768px){
                            flex-direction: column;
                            padding-top: 35px;
                            padding-bottom: 35px;
                        }

                        @media screen and (max-width: 414px){
                            padding-top: 25px;
                            padding-bottom: 25px;
                        }

                        .left_section{
                            width: 50%;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;

                            @media screen and (max-width: 768px){
                                width: 100%;
                            }

                            .left_container{
                                width: 75%;

                                @media screen and (max-width: 768px){
                                    width: 90%;
                                }

                                .title_section{
                                    position: relative;
                                    height: 120px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: flex-end;
                                    align-items: left;
                                    z-index: 0;

                                    @media screen and (max-width: 768px){
                                        height: auto;
                                        align-items: center;
                                    }

                                    .title{
                                        font-size: 22px;

                                        @media screen and (max-width: 414px){
                                            font-size: 20px;
                                        }
                                    }

                                    .subtitle{
                                        font-size: 30px;
                                        line-height: 60px;

                                        @media screen and (max-width: 414px){
                                            font-size: 28px;
                                        }

                                        &:first-letter{
                                            color: var(--primary);
                                        }
                                    }

                                    .background{
                                        position: absolute;
                                        top: 0;
                                        left: 50px;
                                        color: #f1f2f2;
                                        font-size: 80px;
                                        z-index: -1;
                                    }

                                    .border{
                                        width: 15px;
                                        height: 1px;
                                        background-color: var(--primary);
                                    }
                                }

                                .poster_section{
                                    margin-top: 20px;
                                    position: relative;

                                    .padding_box{
                                        padding-bottom: 75.55%;
                                    }

                                    .poster{
                                        display: block;
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;
                                    }
                                }

                                .description_section{
                                    margin-top: 20px;
                                    line-height: 30px;
                                    color: var(--black-light);
                                }

                                .more_link{
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                    background-color: transparent;
                                    border: 1px solid var(--black);
                                    width: fit-content;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    margin-top: 35px;
                                    font-size: 12px;
                                    line-height: 46px;

                                    &:before{
                                        content: "READ MORE";
                                    }

                                    .icon{
                                        background-image: url(${require("../../assets/image/home/more/blackMore.svg")});
                                        height: 4px;
                                        width: 26px;
                                        background-size: 100% 100%;
                                        margin-left: 8px;
                                    }
                                }
                            }
                        }

                        .right_section{
                            flex: 1;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            
                            .right_container{
                                width: 80%;

                                .poster_section{
                                    position: relative;

                                    .padding_box{
                                        padding-bottom: 75.55%;
                                    }

                                    .poster{
                                        display: block;
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;
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
    homeGallery: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
