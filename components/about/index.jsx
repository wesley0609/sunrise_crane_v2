
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import First from "./first.jsx";
import Second from "./second.jsx";
import Third from "./third.jsx";
import Fourth from "./fourth.jsx";

const App = (props) => {
    return (
        <>
            <main className="about_section">
                <h1 className="ssr_only">{props.about.title}</h1>
                <Banner banner={props.banner} />
                <First about={props.about} />
                <Second about={props.about} />
                <Third about={props.about} />
                <Fourth about={props.about} />
            </main>

            <style jsx>
                {`
                    .about_section{
                        overflow: hidden;
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

export default App;
