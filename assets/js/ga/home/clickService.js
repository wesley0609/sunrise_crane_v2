
const app = (item) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "service",
        "label": "home",
        "value": item.title
    });
};

export default app;
