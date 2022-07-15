
import { useSelector } from "react-redux";
import Image from "next/image";
import PropTypes from "prop-types";

const App = (props) => {
    const deviceType = useSelector((state) => {
        return state.deviceType;
    });

    return (
        <>
            <div className="second_section">
                <div className="left_section">
                    <div className="left_container">
                        {
                            (() => {
                                if(deviceType == "mobile" || deviceType == "pad"){
                                    return (
                                        <div className="poster_section">
                                            <div className="padding_box"></div>
                                            <Image src="/image/about/second/index.png" alt={props.about.second.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" />
                                        </div>
                                    );
                                }
                            })()
                        }
                        
                        <div className="title_section">
                            <h2 className="title">{props.about.second.title}</h2>
                            <h3 className="subtitle">{props.about.second.subtitle}</h3>
                        </div>

                        <div className="content_section">
                            {
                                props.about.second.content.map((item, index) => {
                                    return (
                                        <p className="content_list" key={index}>{item}</p>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                {
                    (() => {
                        if(deviceType == "pc"){
                            return (
                                <div className="right_section">
                                    <div className="right_container">
                                        <div className="poster_section">
                                            <div className="padding_box"></div>
                                            <Image src="/image/about/second/index.png" alt={props.about.second.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" />
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
                    .second_section{
                        position: relative;
                        background-color: var(--background-gray);
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-top: 100px;

                        @media screen and (max-width: 768px){
                            flex-direction: column;
                        }

                        .left_section{
                            width: 50%;
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                            align-items: center;

                            @media screen and (max-width: 768px){
                                width: 100%;
                                justify-content: center;
                            }

                            .left_container{
                                position: relative;
                                width: 90%;

                                @media screen and (max-width: 768px){
                                    top: -80px;
                                }

                                .poster_section{
                                    position: relative;

                                    .padding_box{
                                        padding-bottom: 124.67%;
                                    }
                                }

                                .title_section{
                                    @media screen and (max-width: 768px){
                                        margin-top: 30px;
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
                                }

                                .content_section{
                                    margin-top: 20px;

                                    .content_list{
                                        line-height: 30px;
                                        color: var(--black-light);
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
                            position: relative;
                            top: -75px;
                            
                            .right_container{
                                width: 60%;

                                .poster_section{
                                    position: relative;

                                    .padding_box{
                                        padding-bottom: 124.67%;
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
