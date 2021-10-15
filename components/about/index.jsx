
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import First from "./first.jsx";
import Second from "./second.jsx";
import Third from "./third.jsx";
import Fourth from "./fourth.jsx";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    return (
        <>
            <main className="banner_section">
                <h1 className="ssr_only">{props.about.title}</h1>
                <Banner banner={props.banner} />
                <First about={props.about} />
                <Second about={props.about} />
                <Third about={props.about} />
                <Fourth about={props.about} />
            </main>

            <style jsx>
                {`
                    .banner_section{
                        display: block;
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.object.isRequired,
    about: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
