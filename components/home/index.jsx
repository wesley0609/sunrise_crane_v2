
import { connect } from "react-redux";
import PropTypes from "prop-types";

import pkg from "../../package.json";

import Banner from "./banner.jsx";
import Service from "./service.jsx";
import About from "./about.jsx";
import Gallery from "./gallery.jsx";
import Client from "./client.jsx";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    return (
        <>
            <main className="home_section">
                <h1 className="ssr_only">{pkg.siteName}</h1>
                <Banner banner={props.banner} />
                <Service homeService={props.home["service"]} service={props.service} />
                <About homeAbout={props.home["about"]} />
                <Gallery homeGallery={props.home["gallery"]} />
                <Client homeClient={props.home["client"]} client={props.client} />
            </main>

            <style jsx>
                {`
                    .home_section{
                        overflow: hidden;
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.array.isRequired,
    service: PropTypes.array.isRequired,
    home: PropTypes.object.isRequired,
    client: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
