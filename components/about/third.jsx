
import { connect } from "react-redux";
import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import LazyLoad from "lazyload";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const iconLists = useMemo(() => {
        let title = props.about.third.title;
        let titleLists = title.split("、");
        let _iconLists = [];

        for(let i = 0; i < titleLists.length; i ++){
            _iconLists.push({
                src: `icon0${i + 1}.svg`,
                alt: titleLists[i]
            });
        }

        return _iconLists;
    }, [props.about]);

    useEffect(() => {
        let images = document.querySelectorAll(".icon_items .icon");

        new LazyLoad(images, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        });
    }, []);

    return (
        <>
            <div className="third_section">
                <div className="top_section">
                    <h2 className="title">{props.about.third.title}</h2>
                    <h3 className="content">{props.about.third.content}</h3>
                </div>

                <div className="bottom_section">
                    <div className="icon_items">
                        {
                            iconLists.map((item, index) => {
                                return (
                                    <div className="icon_item" key={index}>
                                        <div className="padding_box"></div>
                                        <img className="icon" width="100" height="100" data-src={require(`../../assets/image/about/third/${item.src}`)} src={require("../../assets/image/poster/default.png")} alt={item.alt} key={index} />
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
                        background-image: url(${require("../../assets/image/about/third/background.jpg")});
                        background-size: cover;
                        background-position: center center;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding-top: 60px;
                        padding-bottom: 60px;

                        @media screen and (max-width: 414px){
                            padding-top: 30px;
                            padding-bottom: 30px;
                        }

                        .top_section{
                            width: 85%;

                            @media screen and (max-width: 768px){
                                width: 90%;
                            }

                            .title{
                                font-size: 30px;
                                color: var(--white);
                                line-height: 50px;

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

                                    .icon{
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
                `}
            </style>
        </>
    );
};

App.propTypes = {
    about: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
