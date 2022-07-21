
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import PropTypes from "prop-types";
import lgZoom from "lightgallery/plugins/zoom";
import lgHash from "lightgallery/plugins/hash";

import gaEvent from "../../assets/js/ga/index.js";

// lightgallery plugin cannot server-side-render
const LightGallery = dynamic(() => import("lightgallery/react"), {
    ssr: false
});

const galleryItemPlaceholderClickHandler = (event) => {
    event.preventDefault();
};

const galleryItemClickHandler = (event, item) => {
    gaEvent.gallery.clickImage(item);
};

const App = (props) => {
    const galleryItemsSectionRef = useRef(null);

    const [placeholderDisplay, setPlaceholderDisplay] = useState(true);
    const [scopedId, setScopedId] = useState(null);
    
    const setting = {
        plugins: [lgZoom, lgHash],
        licenseKey: process.env.NEXT_PUBLIC_LG_KEY,
        download: false,
        onInit: () => {
            setPlaceholderDisplay(false);
        }
    };

    const getGalleryItemHref = (index) => {
        return `/gallery/#lg=1&slide=${index}`;
    };

    const getGalleryItemSubHTML = (item) => {
        let html = [];

        html.push(`<h4>${item.title}</h4>`);

        if(item.subtitle){
            html.push(`<p>${item.subtitle}</p>`);
        }

        html = html.join("");

        return html;
    };

    const getGalleryItemText = (item) => {
        let text = item.title;

        if(item.subtitle){
            text += ` - ${item.subtitle}`;
        }

        return text;
    };

    useEffect(() => {
        let classLists = galleryItemsSectionRef.current.classList;

        for(let i = 0; i < classLists.length; i ++){
            let classList = classLists[i];

            if(classList.indexOf("jsx") != -1){
                setScopedId(classList);

                break;
            }
        }
    }, []);

    return (
        <>
            <div className="gallery_items_section" ref={galleryItemsSectionRef}>
                <div className="background_section"></div>
                
                <div className="gallery_items_container">
                    {
                        (() => {
                            if(placeholderDisplay){
                                return (
                                    // sync with to be presented
                                    <div className="gallery_items placeholder">
                                        {
                                            props.items.map((item, index) => {
                                                return (
                                                    <a className="gallery_item" href={getGalleryItemHref(index)} title={item.subtitle} target="_self" onClick={(event) => galleryItemPlaceholderClickHandler(event)} key={index}>
                                                        <div className="padding_box"></div>
                                                        <Image src={`/image/gallery/${item.src}`} alt={getGalleryItemText(item)} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" />
                                                        <h2 className="gallery_text">{getGalleryItemText(item)}</h2>
                                                    </a>
                                                );
                                            })
                                        }
                                    </div>
                                );
                            }
                        })()
                    }

                    <LightGallery elementClassNames={`${scopedId} gallery_items`} onInit={setting.onInit} plugins={setting.plugins} download={setting.download} licenseKey={setting.licenseKey}>
                        {
                            props.items.map((item, index) => {
                                return (
                                    <a className="gallery_item" href={getGalleryItemHref(index)} data-lg-size="1200-900" data-sub-html={getGalleryItemSubHTML(item)} data-src={`/image/gallery/${item.src}`} title={item.subtitle} target="_self" onClick={(event) => galleryItemClickHandler(event, item)} key={index}>
                                        <div className="padding_box"></div>
                                        <Image src={`/image/gallery/${item.src}`} alt={getGalleryItemText(item)} placeholder="blur" blurDataURL={sunrise.config.imagePlaceholder} layout="fill" />
                                        <h2 className="gallery_text">{getGalleryItemText(item)}</h2>
                                    </a>
                                );
                            })
                        }
                    </LightGallery>
                </div>
            </div>

            <style jsx>
                {`
                    .gallery_items_section{
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

                        .gallery_items_container{
                            width: 82%;

                            @media screen and (max-width: 768px){
                                width: 92%;
                            }

                            .gallery_items{
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                justify-content: space-between;
                                align-items: center;

                                &:after{
                                    content: "";
                                    flex: auto;
                                }

                                &.placeholder{
                                    .gallery_item{
                                        .gallery_text{
                                            display: none;
                                        }
                                    }
                                }

                                .gallery_item{
                                    display: block;
                                    position: relative;
                                    border-radius: 2px;
                                    overflow: hidden;
                                    width: 23%;
                                    margin-top: 10px;
                                    margin-bottom: 10px;
                                    margin-left: 1%;
                                    margin-right: 1%;
                                    cursor: zoom-in;

                                    @media screen and (min-width: 769px){
                                        &:hover{
                                            .gallery_text{
                                                display: block;
                                            }
                                        }
                                    }

                                    @media screen and (max-width: 768px){
                                        width: 48%;
                                    }

                                    @media screen and (max-width: 414px){
                                        width: 98%;
                                    }

                                    .padding_box{
                                        padding-bottom: 75%;
                                    }

                                    .gallery_text{
                                        display: none;
                                        position: absolute;
                                        width: 100%;
                                        height: 35px;
                                        bottom: 0;
                                        left: 0;
                                        background-image: linear-gradient(180deg, transparent, #000000);
                                        line-height: 35px;
                                        font-size: 13px;
                                        color: var(--white);
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        overflow: hidden;

                                        @media screen and (max-width: 768px){
                                            display: block;
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
