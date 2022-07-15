
import PropTypes from "prop-types";

import Banner from "../banner/index.jsx";
import Information from "../information/index.jsx";
import Content from "./content.jsx";
import Map from "./map.jsx";

const App = (props) => {
    return (
        <>
            <main className="contact_section">
                <h1 className="ssr_only">{props.contact.title}</h1>
                <Banner banner={props.banner} />
                <Information information={props.contact.information} />
                <Content contact={props.contact.content} titleMap={props.titleMap} />
                <Map contact={props.contact.content} />
            </main>

            <style jsx>
                {`
                    .contact_section{
                        overflow: hidden;
                    }
                `}
            </style>
        </>
    );
};

App.propTypes = {
    banner: PropTypes.object.isRequired,
    titleMap: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired
};

export default App;
