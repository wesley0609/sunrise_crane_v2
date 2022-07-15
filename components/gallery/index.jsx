
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import Information from "../information/index.jsx";
import Items from "./items.jsx";

const App = (props) => {
    return (
        <>
            <main className="gallery_section">
                <h1 className="ssr_only">{props.gallery.title}</h1>
                <Banner banner={props.banner} />
                <Information information={props.gallery.information} />
                <Items items={props.gallery.content} />
            </main>

            <style jsx>
                {`
                    .gallery_section{
                        overflow: hidden;
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

export default App;
