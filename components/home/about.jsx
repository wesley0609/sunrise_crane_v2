
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";

import gaEvent from "../../assets/js/ga/index.js";

const moreLinkClickHandler = (event) => {
    gaEvent.home.clickAbout();
};

const App = (props) => {
    return (
        <>
            <div className="about_section">
                <div className="left_section">
                    <div className="padding_box"></div>
                    <Image src="/image/home/about/about.jpg" alt={props.homeAbout.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" />
                </div>

                <div className="right_section">
                    <div className="right_container">
                        <div className="title_section">
                            <h2 className="title">{props.homeAbout.title}</h2>
                            <div className="subtitle">{props.homeAbout.subtitle.toUpperCase()}</div>
                            <div className="border"></div>
                        </div>

                        <p className="description_section">{props.homeAbout.description}</p>

                        <Link href={props.homeAbout.href} as={props.homeAbout.as}>
                            <a className="more_link" title={props.homeAbout.title} target="_self" onClick={(event) => moreLinkClickHandler(event)}>
                                <div className="ssr_only">{props.homeAbout.title}</div>
                                <i className="icon"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .about_section{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: stretch;

                        @media screen and (max-width: 768px){
                            flex-direction: column;
                        }

                        .left_section{
                            position: relative;
                            width: 60%;

                            @media screen and (max-width: 768px){
                                width: 100%;
                            }

                            .padding_box{
                                padding-bottom: 45.22%;
                            }
                        }

                        .right_section{
                            flex: 1;
                            background-image: linear-gradient(180deg, var(--primary), var(--primary-light));
                            padding-top: 35px;
                            padding-bottom: 35px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;

                            @media screen and (max-width: 414px){
                                padding-top: 25px;
                                padding-bottom: 25px;
                            }

                            .right_container{
                                width: 70%;

                                @media screen and (max-width: 768px){
                                    width: 90%;
                                }

                                .title_section{
                                    .title{
                                        color: var(--white);
                                        font-size: 22px;

                                        @media screen and (max-width: 414px){
                                            font-size: 20px;
                                        }
                                    }

                                    .subtitle{
                                        color: var(--white);
                                        font-size: 30px;
                                        line-height: 60px;

                                        @media screen and (max-width: 414px){
                                            font-size: 28px;
                                        }
                                    }

                                    .border{
                                        width: 15px;
                                        height: 1px;
                                        background-color: var(--white);
                                    }
                                }

                                .description_section{
                                    color: var(--white);
                                    line-height: 30px;
                                    margin-top: 20px;
                                }

                                .more_link{
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                    background-color: var(--black);
                                    border: 1px solid var(--black);
                                    width: fit-content;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    margin-top: 35px;
                                    color: var(--white);
                                    font-size: 12px;
                                    line-height: 46px;

                                    &:before{
                                        content: "READ MORE";
                                    }

                                    .icon{
                                        background-image: url("/image/home/more/whiteMore.svg");
                                        height: 4px;
                                        width: 26px;
                                        background-size: 100% 100%;
                                        margin-left: 8px;
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
    homeAbout: PropTypes.object.isRequired
};

export default App;
