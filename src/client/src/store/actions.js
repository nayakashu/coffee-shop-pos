const setList = (store, payload) => {
  const listName = payload.listName;
  store.setState({ [listName]: [...payload.list] });
};

const addToCart = (store, payload) => {
  const newCart = [...store.state.cart, payload.cartData];
  store.setState({ cart: newCart });
};

const removeFromCart = (store, payload) => {
  let newCart = [...store.state.cart];
  newCart.splice(payload.cartIndex, 1);
  store.setState({ cart: newCart });
};

const actions = {
  setList,
  addToCart,
  removeFromCart,
};

export default actions;
