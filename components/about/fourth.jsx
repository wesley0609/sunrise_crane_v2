
import { useSelector } from "react-redux";
import Image from "next/image";
import PropTypes from "prop-types";

const App = (props) => {
    const deviceType = useSelector((state) => {
        return state.deviceType;
    });

    return (
        <>
            <div className="fourth_section">
                {
                    (() => {
                        if(deviceType == "pc"){
                            return (
                                <div className="left_section">
                                    <div className="padding_box"></div>
                                    <Image src="/image/about/fourth/index.jpg" alt={props.about.fourth.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" />
                                </div>
                            );
                        }
                    })()
                }

                <div className="right_section">
                    <div className="right_container">
                        <h2 className="title">{props.about.fourth.title}</h2>
                        <p className="content">{props.about.fourth.content}</p>
                    </div>

                    {
                        (() => {
                            if(deviceType == "mobile" || deviceType == "pad"){
                                return (
                                    <div className="poster_container">
                                        <Image src="/image/about/fourth/index.jpg" width={864} height={592} alt={props.about.fourth.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="responsive" />
                                    </div>
                                );
                            }
                        })()
                    }
                </div>
            </div>

            <style jsx>
                {`
                    .fourth_section{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;

                        @media screen and (max-width: 768px){
                            flex-direction: column;
                        }

                        .left_section{
                            position: relative;
                            width: 40%;

                            .padding_box{
                                padding-bottom: 65.82%;
                            }
                        }

                        .right_section{
                            flex: 1;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            padding-top: 45px;
                            padding-bottom: 45px;

                            @media screen and (max-width: 768px){
                                flex-direction: column;
                                padding-bottom: 0;
                            }

                            @media screen and (max-width: 414px){
                                padding-top: 30px;
                            }

                            .right_container{
                                width: 90%;

                                .title{
                                    font-size: 30px;
                                    line-height: 45px;
                                    padding-top: 10px;
                                    padding-bottom: 10px;

                                    @media screen and (max-width: 414px){
                                        font-size: 28px;
                                    }
                                }

                                .content{
                                    line-height: 30px;
                                    margin-top: 20px;
                                    color: var(--black-light);
                                }
                            }

                            .poster_container{
                                width: 100%;
                                height: 100%;
                                margin-top: 30px;
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
