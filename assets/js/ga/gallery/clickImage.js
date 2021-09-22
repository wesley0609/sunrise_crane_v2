
const app = (item) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "image",
        "label": "gallery",
        "value": item.title
    });
};

export default app;
