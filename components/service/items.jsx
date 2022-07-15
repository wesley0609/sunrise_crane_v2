
import { useCallback } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import gaEvent from "../../assets/js/ga/index.js";

const App = (props) => {
    const serviceItemClickHandler = useCallback((event, item) => {
        gaEvent.service.clickService(item);
    }, []);

    return (
        <>
            <div className="service_items_section">
                <div className="background_section"></div>

                <div className="secvice_items_container">
                    <div className="service_items">
                        {
                            props.items.map((item, index) => {
                                return (
                                    <div className="service_item" onClick={(event) => serviceItemClickHandler(event, item)} key={index}>
                                        <div className="poster_section">
                                            <Image src={`/image/service/${item.src}`} width={150} height={150} alt={item.title} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="responsive" />
                                        </div>

                                        <div className="content_section">
                                            <h2 className="title">{item.title}</h2>
                                            <p className="description">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .service_items_section{
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        padding-top: 40px;
                        padding-bottom: 40px;
                        position: relative;

                        @media screen and (max-width: 414px){
                            padding-top: 20px;
                            padding-bottom: 20px;
                        }

                        .background_section{
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 120px;
                            bottom: 0;
                            left: 0;
                            background-color: var(--background-gray);
                        }

                        .secvice_items_container{
                            position: relative;
                            width: 82%;

                            @media screen and (max-width: 768px){
                                width: 92%;
                            }

                            .service_items{
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                justify-content: space-between;
                                align-items: stretch;

                                &:after{
                                    content: "";
                                    flex: auto;
                                }

                                .service_item{
                                    width: 31.33%;
                                    margin-top: 10px;
                                    margin-bottom: 10px;
                                    margin-left: 1%;
                                    margin-right: 1%;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    border: 1px solid #efefef;
                                    background-color: var(--white);
                                    text-align: center;
                                    cursor: pointer;

                                    @media screen and (min-width: 769px){
                                        &:hover{
                                            box-shadow: 3px 3px 10px #0000001a;
                                        }
                                    }

                                    @media screen and (max-width: 768px){
                                        width: 48%;
                                    }

                                    @media screen and (max-width: 414px){
                                        width: 98%;
                                    }

                                    .poster_section{
                                        display: block;
                                        width: 65%;
                                        height: auto;
                                        margin: 0 auto;
                                    }

                                    .content_section{
                                        margin-top: 20px;

                                        .title{
                                            font-weight: bold;
                                            line-height: 25px;
                                        }

                                        .description{
                                            font-size: 14px;
                                            line-height: 25px;
                                            margin-top: 25px;
                                            margin-bottom: 25px;
                                            color: var(--black-light);
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
    items: PropTypes.array.isRequired
};

export default App;
