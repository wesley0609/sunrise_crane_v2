
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import Information from "../information/index.jsx";
import Items from "./items.jsx";

const App = (props) => {
    return (
        <>
            <main className="service_section">
                <h1 className="ssr_only">{props.service.title}</h1>
                <Banner banner={props.banner} />
                <Information information={props.service.information} />
                <Items items={props.service.content} />
            </main>

            <style jsx>
                {`
                    .service_section{
                        overflow: hidden;
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.object.isRequired,
    service: PropTypes.object.isRequired
};

export default App;
