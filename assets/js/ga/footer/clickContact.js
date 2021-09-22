
const app = (item) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "contact",
        "label": "footer",
        "value": item
    });
};

export default app;
