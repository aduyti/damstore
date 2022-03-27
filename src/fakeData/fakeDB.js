const addToDb = (id) => {
    const cart = JSON.parse(localStorage.getItem('damstore-cart')) || {};
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
    localStorage.getItem('damstore-cart');
}
export { addToDb, getDbData }