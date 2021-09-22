
const app = (item) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "contact",
        "label": "contact",
        "value": item
    });
};

export default app;
