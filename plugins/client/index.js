
import config from "./config.js";
import resize from "./resize.js";
import deviceType from "./deviceType.js";
import gtm from "./gtm.js";
import dataLayer from "./dataLayer.js";

const app = {
    config: config,
    resize: resize,
    deviceType: deviceType,
    gtm: gtm,
    dataLayer: dataLayer
};

export default app;
