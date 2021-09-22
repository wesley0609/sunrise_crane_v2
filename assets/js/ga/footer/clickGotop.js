
const app = (router) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "gotop",
        "label": router.route
    });
};

export default app;
