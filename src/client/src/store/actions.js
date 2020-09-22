const setList = (store, payload) => {
  const listName = payload.listName;
  store.setState({ [listName]: [...payload.list] });
};

const actions = {
  setList,
};

export default actions;
