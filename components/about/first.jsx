
import { useSelector } from "react-redux";
import Image from "next/image";
import PropTypes from "prop-types";

const App = (props) => {
    const deviceType = useSelector((state) => {
        return state.deviceType;
    });

    return (
        <>
            <div className="first_section">
                <div className="left_section">
                    <div className="left_container">
                        <div className="poster_section">
                            <div className="padding_box"></div>
                            <Image src="/image/about/first/index.jpg" alt={props.about.first.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" />
                        </div>
                    </div>
                </div>

                <div className="right_section">
                    <div className="right_container">
                        <div className="title_section">
                            <h2 className="title">{props.about.first.title}</h2>
                            <h3 className="subtitle">{props.about.first.subtitle}</h3>

                            {
                                (() => {
                                    if(deviceType == "pc"){
                                        return (
                                            <div className="background">{props.about.subtitle.toUpperCase()}</div>
                                        );
                                    }
                                })()
                            }
                        </div>

                        <p className="content_section">{props.about.first.content}</p>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .first_section{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding-top: 40px;
                        padding-bottom: 40px;

                        @media screen and (max-width: 768px){
                            flex-direction: column;
                        }

                        @media screen and (max-width: 414px){
                            padding-top: 30px;
                            padding-bottom: 30px;
                        }

                        .left_section{
                            width: 40%;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;

                            @media screen and (max-width: 768px){
                                width: 90%;
                            }

                            .left_container{
                                width: 80%;

                                @media screen and (max-width: 768px){
                                    width: 100%;
                                }

                                .poster_section{
                                    position: relative;

                                    .padding_box{
                                        padding-bottom: 75%;
                                    }
                                }
                            }
                        }

                        .right_section{
                            flex: 1;
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-start;
                            align-items: center;

                            @media screen and (max-width: 768px){
                                justify-content: center;
                                margin-top: 30px;
                            }

                            .right_container{
                                width: 95%;

                                @media screen and (max-width: 768px){
                                    width: 90%;
                                }

                                .title_section{
                                    position: relative;
                                    height: 140px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: flex-end;
                                    align-items: left;

                                    @media screen and (max-width: 768px){
                                        height: auto;
                                    }

                                    .title{
                                        font-size: 30px;
                                        line-height: 45px;
                                        padding-top: 10px;
                                        padding-bottom: 10px;

                                        @media screen and (max-width: 414px){
                                            font-size: 28px;
                                        }
                                    }

                                    .subtitle{
                                        font-size: 22px;
                                        line-height: 30px;

                                        @media screen and (max-width: 414px){
                                            font-size: 20px;
                                        }

                                        &:before{
                                            content: "─";
                                            margin-right: 5px;
                                        }
                                    }

                                    .background{
                                        position: absolute;
                                        top: 0;
                                        left: 110px;
                                        color: var(--text-background-gray);
                                        font-size: 80px;
                                        z-index: -1;
                                    }
                                }

                                .content_section{
                                    line-height: 30px;
                                    margin-top: 20px;
                                    color: var(--black-light);
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
