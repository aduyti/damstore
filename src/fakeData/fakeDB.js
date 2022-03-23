const addToDb = id => {
    console.log(id);
    localStorage.getItem('shopping-cart');
}
const getDbData = () => {
    localStorage.getItem('shopping-cart');
}
export { addToDb, getDbData }