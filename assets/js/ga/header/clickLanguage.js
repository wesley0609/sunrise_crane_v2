
const app = (item) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "language",
        "label": "header",
        "value": item
    });
};

export default app;
