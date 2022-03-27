const addToDb = id => {
    const cart = JSON.parse(localStorage.getItem('shopping-cart')) || {};
    if (cart[id]) {
        cart[id] += 1;
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
}
const getDbData = () => {
    localStorage.getItem('shopping-cart');
}
export { addToDb, getDbData }