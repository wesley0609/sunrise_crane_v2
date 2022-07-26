
import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const App = (props) => {
    const iconLists = useMemo(() => {
        let title = props.about.third.title;
        let titleLists = title.text.split(title.split);
        let _iconLists = [];

        for(let i = 0; i < titleLists.length; i ++){
            _iconLists.push({
                src: `icon0${i + 1}.svg`,
                alt: titleLists[i]
            });
        }

        return _iconLists;
    }, [props.about]);

    return (
        <>
            <div className="third_section">
                <div className="background_section">
                    <Image src={`/image/about/third/background.jpg`} alt={props.about.third.title.text} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} objectFit="cover" layout="fill" />
                </div>

                <div className="top_section">
                    <h2 className="title">{props.about.third.title.text}</h2>
                    <p className="content">{props.about.third.content}</p>
                </div>

                <div className="bottom_section">
                    <div className="icon_items">
                        {
                            iconLists.map((item, index) => {
                                return (
                                    <div className="icon_item" key={index}>
                                        <div className="padding_box"></div>
                                        <Image src={`/image/about/third/${item.src}`} alt={item.alt} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" unoptimized />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .third_section{
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding-top: 60px;
                        padding-bottom: 60px;
                        position: relative;

                        @media screen and (max-width: 414px){
                            padding-top: 30px;
                            padding-bottom: 30px;
                        }

                        .background_section{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: -1;
                        }

                        .top_section{
                            width: 85%;

                            @media screen and (max-width: 768px){
                                width: 90%;
                            }

                            .title{
                                font-size: 30px;
                                color: var(--white);
                                line-height: 45px;
                                padding-top: 10px;
                                padding-bottom: 10px;

                                @media screen and (max-width: 414px){
                                    font-size: 28px;
                                }
                            }

                            .content{
                                line-height: 30px;
                                color: var(--white);
                                margin-top: 20px;
                            }
                        }

                        .bottom_section{
                            margin-top: 30px;
                            width: 55%;

                            @media screen and (max-width: 768px){
                                width: 80%;
                            }

                            .icon_items{
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                justify-content: center;
                                align-items: center;

                                .icon_item{
                                    position: relative;
                                    width: 15%;
                                    margin-left: 5%;
                                    margin-right: 5%;

                                    @media screen and (max-width: 414px){
                                        width: 30%;
                                        margin-top: 5%;
                                        margin-bottom: 5%;
                                        margin-left: 10%;
                                        margin-right: 10%;
                                    }

                                    .padding_box{
                                        padding-bottom: 100%;
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
    about: PropTypes.object.isRequired
};

export default App;
