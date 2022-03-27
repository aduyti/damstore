const addToDb = (id) => {
    const cart = getDbData() || {};
    if (id in cart) {
        cart[id] += 1;
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem('damstore-cart', JSON.stringify(cart));
    return cart[id] === 1;
}
const getDbData = () => {
    return JSON.parse(localStorage.getItem('damstore-cart'));
}
export { addToDb, getDbData }