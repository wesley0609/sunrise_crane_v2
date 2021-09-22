
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import Information from "../information/index.jsx";
import GalleryItems from "./galleryItems.jsx";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    return (
        <>
            <div className="gallery_section">
                <h1 className="ssr_only">{props.gallery.title}</h1>
                <Banner banner={props.banner} />
                <Information information={props.gallery.information} />
                <GalleryItems gallery={props.gallery.gallery} />
            </div>

            <style jsx>
                {`
                    .gallery_section{
                        display: block;
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.object.isRequired,
    gallery: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
