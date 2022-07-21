
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";

const getImagePriorityBool = (index) => {
    if(index == 0){
        return true;
    }

    return false;
};

const App = (props) => {
    const glide = useRef(null);

    const deviceType = useSelector((state) => {
        return state.deviceType;
    });

    const getBannerImage = (item) => {
        if(deviceType == "mobile"){
            return `/image/home/banner/mobile/${item.src}`;
        }

        return `/image/home/banner/pc/${item.src}`;
    };

    useEffect(() => {
        glide.current = new Glide(".banner_section", {
            type: "carousel",
            autoplay: 5000,
            gap: 0
        });

        glide.current.mount();

        return () => {
            glide.current.destroy();
        };
    }, [deviceType, props.banner]);

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
                                        <Image src={getBannerImage(item)} alt={item.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" priority={getImagePriorityBool(index)} />
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
                        <button className="banner_arrow left" data-glide-dir="<" title={sunrise.seo.other.prev}></button>
                        <button className="banner_arrow right" data-glide-dir=">" title={sunrise.seo.other.next}></button>
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
                                        padding-bottom: 35.42%;

                                        @media screen and (max-width: 414px){
                                            padding-bottom: 120.13%;
                                        }
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
                                        top: 50%;
                                        left: 15%;
                                        transform: translateY(-50%);
                                        width: 70%;

                                        @media screen and (max-width: 414px){
                                            left: 5%;
                                            width: 90%;
                                        }

                                        .title{
                                            color: var(--white);
                                            font-size: 35px;
                                            line-height: 60px;
                                            white-space: initial;

                                            @media screen and (max-width: 414px){
                                                font-size: 30px;
                                                line-height: 40px;
                                            }
                                        }

                                        .subtitle{
                                            color: var(--white);
                                            font-size: 18px;
                                            line-height: 40px;
                                            white-space: initial;

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
                                    background-image: url("/image/swiper/swiperArrow.png");
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

                                    &.glide__bullet--active{
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

export default App;
