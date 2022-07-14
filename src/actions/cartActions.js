export const addToCart = (item) => ({
    type: "add",
    payload: item,
});

export const removeToCart = (item) => ({
    type: "remove",
    payload: item,
});
