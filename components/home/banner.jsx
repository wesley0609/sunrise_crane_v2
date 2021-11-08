
import { connect } from "react-redux";
import { useEffect, useRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import LazyLoad from "lazyload";

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

    const imageSize = useMemo(() => {
        if(props.deviceType == "mobile"){
            return {
                width: 795,
                height: 955,
                paddingBottom: "120.13%"
            };
        }

        return {
            width: 1920,
            height: 680,
            paddingBottom: "35.42%"
        };
    }, [props.deviceType]);

    const getBannerImage = useCallback((item) => {
        if(props.deviceType == "mobile"){
            return require(`../../assets/image/home/banner/mobile/${item.src}`);
        }

        return require(`../../assets/image/home/banner/pc/${item.src}`);
    }, [props.deviceType]);

    useEffect(() => {
        glide.current = new Glide(".banner_section", {
            type: "carousel",
            autoplay: 5000,
            gap: 0,
            classes: {
                activeNav: "banner_bullet_active"
            }
        });

        glide.current.mount();

        let images = document.querySelectorAll(".banner_section .banner_image");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });

        return () => {
            glide.current.destroy();
        };
    }, [props.deviceType]);

    return (
        <>
            <div className="banner_section">
                <div className="banner_container glide__track" data-glide-el="track">
                    <div className="banner_items glide__slides">
                        {
                            props.banner.map((item, index) => {
                                return (
                                    <div className="banner_item glide__slide" key={index}>
                                        <div className="padding_box"></div>
                                        <img className="banner_image" width={imageSize.width} height={imageSize.height} data-src={getBannerImage(item)} src={require("../../assets/image/poster/default.png")} alt={item.title} />
                                        <div className="filter_box"></div>

                                        <div className="banner_text">
                                            <div className="title">{item.title}</div>
                                            <div className="subtitle">{item.subtitle}</div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className="banner_arrows" data-glide-el="controls">
                        <button className="banner_arrow left" data-glide-dir="<" title="上一個"></button>
                        <button className="banner_arrow right" data-glide-dir=">" title="下一個"></button>
                    </div>

                    <div className="banner_bullets glide__bullets" data-glide-el="controls[nav]">
                        {
                            props.banner.map((item, index) => {
                                return (
                                    <button className="banner_bullet glide__bullet" data-glide-dir={`=${index}`} title={index} key={index}>
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
                    .banner_section{
                        display: block;

                        @media screen and (min-width: 769px){
                            &:hover{
                                .banner_container{
                                    cursor: grab;
                                    
                                    .banner_arrows{
                                        display: block;
                                    }
                                }
                            }
                        }

                        .banner_container{
                            position: relative;
                            overflow: hidden;

                            .banner_items{
                                white-space: nowrap;
                                font-size: 0px;

                                /* connot use flex because web-vitails CLS */
                                .banner_item{
                                    width: 100%;
                                    display: inline-block;
                                    touch-action: pan-y;
                                    position: relative;

                                    .padding_box{
                                        padding-bottom: ${imageSize.paddingBottom};
                                    }

                                    .banner_image{
                                        display: block;
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;
                                    }

                                    .filter_box{
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;
                                        background-image: linear-gradient(90deg, #00000066, #ffffff00);
                                        opacity: .8;
                                    }

                                    .banner_text{
                                        position: absolute;
                                        top: 0;
                                        left: 15%;
                                        height: 100%;
                                        display: flex;
                                        flex-direction: column;
                                        justify-content: center;

                                        @media screen and (max-width: 414px){
                                            left: 5%;
                                        }

                                        .title{
                                            color: var(--white);
                                            font-size: 35px;
                                            line-height: 60px;

                                            @media screen and (max-width: 414px){
                                                font-size: 30px;
                                                line-height: 40px;
                                            }
                                        }

                                        .subtitle{
                                            color: var(--white);
                                            font-size: 18px;
                                            line-height: 40px;

                                            @media screen and (max-width: 414px){
                                                font-size: 16px;
                                            }
                                        }
                                    }
                                }
                            }

                            .banner_arrows{
                                display: none;

                                .banner_arrow{
                                    position: absolute;
                                    background-image: url(${require("../../assets/image/swiper/swiperArrow.png")});
                                    width: 60px;
                                    height: 60px;
                                    background-size: 60px 60px;
                                    top: 50%;
                                    opacity: .7;

                                    &:hover{
                                        opacity: 1;
                                    }

                                    &.left{
                                        left: 50px;
                                        transform: translateY(-50%);
                                    }

                                    &.right{
                                        right: 50px;
                                        transform: translateY(-50%) rotate(180deg);
                                    }
                                }
                            }

                            .banner_bullets{
                                position: absolute;
                                width: 100%;
                                height: 40px;
                                bottom: 0;
                                overflow: hidden;
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;

                                @media screen and (max-width: 414px){
                                    height: 30px;
                                }

                                .banner_bullet{
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
                                        border: 1px solid var(--white);
                                        background-color: transparent;

                                        @media screen and (max-width: 414px){
                                            width: 8px;
                                            height: 8px;
                                        }
                                    }

                                    &.banner_bullet_active{
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
    banner: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
