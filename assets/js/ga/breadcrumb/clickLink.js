
const app = (router, item) => {
    dataLayer.push({
        "event": "sunrise",
        "action": "click",
        "category": "breadcrumb",
        "label": router.route,
        "value": item.title
    });
};

export default app;
