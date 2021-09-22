
const app = (item) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "service",
        "label": "service",
        "value": item.title
    });
};

export default app;
