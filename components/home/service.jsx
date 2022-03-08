
import { connect } from "react-redux";
import { useEffect, useMemo, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Glide from "@glidejs/glide";
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
    const glide = useRef(null);

    const perView = useMemo(() => {
        if(props.deviceType == "mobile"){
            return 1;
        }

        if(props.deviceType == "pad"){
            return 2;
        }
        
        return 4;
    }, [props.deviceType]);

    const serviceItemClickHandler = useCallback((event, item) => {
        gaEvent.home.clickService(item);
    }, []);

    useEffect(() => {
        glide.current = new Glide(".service_list_section", {
            type: "carousel",
            perView: perView,
            gap: 0,
            classes: {
                activeNav: "service_bullet_active"
            }
        });

        glide.current.mount();

        let images = document.querySelectorAll(".poster_section .poster");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });

        return () => {
            glide.current.destroy();
        };
    }, [perView, props.homeService]);

    return (
        <>
            <div className="service_section">
                <div className="title_section">
                    <h2 className="title">{props.homeService.title}</h2>
                    <div className="subtitle">{props.homeService.subtitle.toUpperCase()}</div>

                    {
                        (() => {
                            if(props.deviceType == "pc"){
                                return (
                                    <div className="background">{props.homeService.subtitle.toUpperCase()}</div>
                                );
                            }
                        })()
                    }

                    <div className="border"></div>
                </div>

                <div className="description_section">{props.homeService.description}</div>

                <div className="service_list_section">
                    <div className="service_container glide__track" data-glide-el="track">
                        <div className="service_items glide__slides">
                            {
                                props.service.map((item, index) => {
                                    return (
                                        <Link href={item.href} as={item.as} key={index}>
                                            <a className="service_item glide__slide" title={item.title} target="_self" onClick={(event) => serviceItemClickHandler(event, item)}>
                                                <div className="poster_section">
                                                    <div className="padding_box"></div>
                                                    <img className="poster" width="150" height="150" data-src={require(`../../assets/image/service/${item.src}`)} src={require("../../assets/image/poster/default.png")} alt={item.title} />
                                                </div>
                                                
                                                <h3 className="des_section">{item.title}</h3>
                                            </a>
                                        </Link>
                                    );
                                })
                            }
                        </div>

                        <div className="service_arrows" data-glide-el="controls">
                            <button className="service_arrow left" data-glide-dir="<" title={sunrise.seo.other.prev}></button>
                            <button className="service_arrow right" data-glide-dir=">" title={sunrise.seo.other.next}></button>
                        </div>
                    </div>

                    <div className="service_bullets glide__bullets" data-glide-el="controls[nav]">
                        {
                            props.service.map((item, index) => {
                                return (
                                    <button className="service_bullet glide__bullet" data-glide-dir={`=${index}`} title={index} key={index}>
                                        <i className="icon"></i>
                                    </button>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .service_section{
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding-top: 35px;
                        padding-bottom: 35px;

                        @media screen and (max-width: 414px){
                            padding-top: 25px;
                            padding-bottom: 25px;
                        }

                        .title_section{
                            position: relative;
                            height: 120px;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            align-items: center;

                            @media screen and (max-width: 768px){
                                height: auto;
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
                                bottom: 0;
                                color: var(--text-background-gray);
                                font-size: 100px;
                                z-index: -1;
                            }

                            .border{
                                width: 15px;
                                height: 1px;
                                background-color: var(--primary);
                            }
                        }

                        .description_section{
                            width: 70%;
                            line-height: 30px;
                            color: var(--black-light);

                            @media screen and (max-width: 768px){
                                margin-top: 20px;
                                width: 90%;
                            }
                        }
                        
                        .service_list_section{
                            width: 90%;
                            margin-top: 35px;

                            @media screen and (max-width: 768px){
                                margin-top: 0;
                            }

                            .service_container{
                                position: relative;
                                overflow: hidden;
                                width: 100%;

                                @media screen and (min-width: 769px){
                                    &:hover{
                                        .service_arrows{
                                            display: block;
                                        }
                                    }
                                }

                                .service_items{
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;

                                    .service_item{
                                        touch-action: pan-y;

                                        @media screen and (min-width: 769px){
                                            &:hover{
                                                .des_section{
                                                    color: var(--primary);
                                                }
                                            }
                                        }

                                        .poster_section{
                                            position: relative;
                                            margin-left: 18%;
                                            margin-right: 18%;

                                            .padding_box{
                                                padding-bottom: 100%;
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

                                        .des_section{
                                            font-weight: bold;
                                            line-height: 35px;
                                            width: 80%;
                                            margin-left: auto;
                                            margin-right: auto;
                                            text-overflow: ellipsis;
                                            white-space: nowrap;
                                            overflow: hidden;
                                        }
                                    }
                                }

                                .service_arrows{
                                    display: none;

                                    .service_arrow{
                                        position: absolute;
                                        top: 50%;
                                        background-image: url(${require("../../assets/image/swiper/default/blackArrow.svg")});
                                        height: 30px;
                                        width: 30px;
                                        background-size: 30px 30px;
                                        opacity: .5;

                                        &:hover{
                                            opacity: 1;
                                        }

                                        &.left{
                                            left: 0;
                                            transform: translateY(-50%);
                                        }

                                        &.right{
                                            right: 0;
                                            transform: translateY(-50%) rotate(180deg);
                                        }
                                    }
                                }
                            }

                            .service_bullets{
                                width: 100%;
                                height: 40px;
                                overflow: hidden;
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;

                                @media screen and (max-width: 414px){
                                    height: 30px;
                                }

                                .service_bullet{
                                    width: 20px;
                                    height: 20px;
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;

                                    @media screen and (max-width: 414px){
                                        width: 15px;
                                        height: 15px;
                                    }

                                    .icon{
                                        width: 10px;
                                        height: 10px;
                                        border-radius: 50%;
                                        border: 1px solid var(--primary);
                                        background-color: transparent;

                                        @media screen and (max-width: 414px){
                                            width: 8px;
                                            height: 8px;
                                        }
                                    }

                                    &.service_bullet_active{
                                        .icon{
                                            background-color: var(--primary);
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
    homeService: PropTypes.object.isRequired,
    service: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
