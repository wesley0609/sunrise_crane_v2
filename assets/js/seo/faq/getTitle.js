
import pkg from "../../../../package.json";
import title from "../../../json/seo/title.json";

const app = () => {
    return `${title["faq"]} - ${pkg.siteName}`;
};

export default app;
