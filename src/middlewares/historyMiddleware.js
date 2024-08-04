const historyMiddleware = (_store) => (next) => (action) => {
    const result = next(action);
    if (action.path) {
        window.navigate(action.path);
    }
    return result;
};

export { historyMiddleware };
