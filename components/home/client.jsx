
import { useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import _ from "lodash";

const App = (props) => {
    const glide = useRef(null);
    const clientListSectionRef = useRef(null);

    const deviceType = useSelector((state) => {
        return state.deviceType;
    });

    const perView = (() => {
        if(deviceType == "mobile"){
            return 2;
        }
        
        if(deviceType == "pad"){
            return 3;
        }
        
        return 5;
    })();

    const meta = useMemo(() => {
        let client = _.cloneDeep(props.client);
        let last = client.length % perView;

        if(last){
            let display = client.length - last;

            client = client.slice(0, display);
        }

        return _.chunk(client, perView);
    }, [props.client, perView]);

    useEffect(() => {
        glide.current = new Glide(clientListSectionRef.current, {
            type: "carousel",
            gap: 0
        });

        glide.current.mount();

        return () => {
            glide.current.destroy();
        };
    }, [perView, props.homeClient]);

    return (
        <>
            <div className="client_section">
                <div className="background_section">
                    <Image src={`/image/home/client/background.jpg`} alt={props.homeClient.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} objectFit="cover" layout="fill" />
                </div>

                <div className="title_section">
                    <h2 className="title">{props.homeClient.title}</h2>
                    <div className="subtitle">{props.homeClient.subtitle.toUpperCase()}</div>
                    
                    {
                        (() => {
                            if(deviceType == "pc"){
                                return (
                                    <div className="background">{props.homeClient.subtitle.toUpperCase()}</div>
                                );
                            }
                        })()
                    }

                    <div className="border"></div>
                </div>

                <div className="client_list_section" ref={clientListSectionRef}>
                    <div className="client_container glide__track" data-glide-el="track">
                        <div className="client_items glide__slides">
                            {
                                meta.map((item, index) => {
                                    return (
                                        <div className="client_item glide__slide" key={index}>
                                            <div className="client_group">
                                                {
                                                    item.map((_item, _index) => {
                                                        return (
                                                            <div className="poster_section" key={_index}>
                                                                <div className="padding_box"></div>
                                                                <Image src={`/image/client/${_item.src}`} alt={_item.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" />
                                                                <h3 className="ssr_only">{_item.title}</h3>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <div className="client_arrows" data-glide-el="controls">
                            <button className="client_arrow left" data-glide-dir="<" title={sunrise.seo.other.prev}></button>
                            <button className="client_arrow right" data-glide-dir=">" title={sunrise.seo.other.next}></button>
                        </div>
                    </div>

                    <div className="client_bullets glide__bullets" data-glide-el="controls[nav]">
                        {
                            meta.map((item, index) => {
                                return (
                                    <button className="client_bullet glide__bullet" data-glide-dir={`=${index}`} title={index} key={index}>
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
                    .client_section{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding-top: 60px;
                        padding-bottom: 60px;
                        position: relative;

                        @media screen and (max-width: 768px){
                            padding-top: 35px;
                            padding-bottom: 35px;
                        }

                        @media screen and (max-width: 414px){
                            padding-top: 25px;
                            padding-bottom: 25px;
                        }

                        .background_section{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: -1;
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

                        .client_list_section{
                            width: 90%;

                            @media screen and (max-width: 768px){
                                margin-top: 20px;
                            }

                            .client_container{
                                position: relative;
                                overflow: hidden;
                                width: 100%;

                                @media screen and (min-width: 769px){
                                    &:hover{
                                        cursor: grab;
                                        
                                        .client_arrows{
                                            display: block;
                                        }
                                    }
                                }

                                .client_items{
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;

                                    .client_item{
                                        touch-action: pan-y;

                                        .client_group{
                                            display: flex;
                                            flex-direction: row;
                                            justify-content: center;
                                            align-items: center;

                                            .poster_section{
                                                position: relative;
                                                width: ${`${100 / perView}%`};

                                                .padding_box{
                                                    padding-bottom: 53.85%;
                                                }
                                            }
                                        }
                                    }
                                }

                                .client_arrows{
                                    display: none;

                                    .client_arrow{
                                        position: absolute;
                                        top: 50%;
                                        background-image: url("/image/swiper/default/blackArrow.svg");
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

                            .client_bullets{
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

                                .client_bullet{
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
    homeClient: PropTypes.object.isRequired,
    client: PropTypes.array.isRequired
};

export default App;
