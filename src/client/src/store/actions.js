const setList = (store, payload) => {
  const listName = payload.listName;
  store.setState({ [listName]: [...payload.list] });
};

const addToCart = (store, payload) => {
  const newCart = [...store.state.cart, payload.cartData];
  store.setState({ activeItemCartIndex: payload.cartIndex });
  store.setState({ cart: newCart });
};

const addExtras = (store, payload) => {
  const newCart = [...store.state.cart];
  const item = newCart[payload.cartIndex];

  if (item.extras) {
    item.extras = [...item.extras, payload.extras];
  } else {
    item.extras = [payload.extras];
  }

  newCart[payload.cartIndex] = item;
  store.setState({ cart: newCart });
};

const removeExtras = (store, payload) => {
  const newCart = [...store.state.cart];
  const item = newCart[payload.cartIndex];

  item.extras = item.extras.filter((extra) => {
    return extra.id !== payload.extras.id;
  });

  newCart[payload.cartIndex] = item;
  store.setState({ cart: newCart });
};

const removeFromCart = (store, payload) => {
  let currentItemIndex = store.state.activeItemCartIndex;
  let newCart = [...store.state.cart];
  newCart.splice(payload.cartIndex, 1);

  if (payload.cartIndex < currentItemIndex)
    store.setState({ activeItemCartIndex: currentItemIndex - 1 });

  store.setState({ cart: newCart });
};

const actions = {
  setList,
  addToCart,
  removeFromCart,
  addExtras,
  removeExtras,
};

export default actions;
