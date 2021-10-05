
import { connect } from "react-redux";
import { useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import LazyLoad from "lazyload";
import _ from "lodash";

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
            return 2;
        }
        
        if(props.deviceType == "pad"){
            return 3;
        }
        
        return 5;
    }, [props.deviceType]);

    const meta = useMemo(() => {
        let client = _.cloneDeep(props.client);
        let last = client.length % perView;

        if(last){
            let display = client.length - last;

            client = client.slice(0, display);
        }

        return _.chunk(client, perView);
    }, [props.client, perView]);

    const posterSectionWidth = useMemo(() => {
        return `${100 / perView}%`;
    }, [perView]);

    useEffect(() => {
        glide.current = new Glide(".client_list_section", {
            type: "carousel",
            gap: 0,
            classes: {
                activeNav: "client_bullet_active"
            }
        });

        glide.current.mount();

        let images = document.querySelectorAll(".client_section .client_image");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });

        return () => {
            glide.current.destroy();
        };
    }, [perView]);

    return (
        <>
            <div className="client_section">
                <div className="title_section">
                    <h2 className="title">{props.homeClient.title}</h2>
                    <div className="subtitle">{props.homeClient.subtitle.toUpperCase()}</div>
                    
                    {
                        (() => {
                            if(props.deviceType == "pc"){
                                return (
                                    <div className="background">{props.homeClient.subtitle.toUpperCase()}</div>
                                );
                            }
                        })()
                    }

                    <div className="border"></div>
                </div>

                <div className="client_list_section">
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
                                                                <img className="client_image" width="400" height="216" data-src={require(`../../assets/image/client/${_item.src}`)} src={require("../../assets/image/poster/default.png")} alt={_item.title} />
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
                            <button className="client_arrow left" data-glide-dir="<" title="上一個"></button>
                            <button className="client_arrow right" data-glide-dir=">" title="下一個"></button>
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
                        background-image: url(${require("../../assets/image/home/client/background.jpg")});
                        background-size: cover;
                        background-position: center center;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding-top: 60px;
                        padding-bottom: 60px;

                        @media screen and (max-width: 768px){
                            padding-top: 35px;
                            padding-bottom: 35px;
                        }

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
                            z-index: 0;

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
                                        touch-action: none;

                                        .client_group{
                                            display: flex;
                                            flex-direction: row;
                                            justify-content: center;
                                            align-items: center;

                                            .poster_section{
                                                position: relative;
                                                width: ${posterSectionWidth};

                                                .padding_box{
                                                    padding-bottom: 53.85%;
                                                }

                                                .client_image{
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

                                .client_arrows{
                                    display: none;

                                    .client_arrow{
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

                                    &.client_bullet_active{
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
