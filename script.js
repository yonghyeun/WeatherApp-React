const createStore = (reducer) => {
  let state;
  let listners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listners.forEach((listner) => listner());
  };

  const subscribe = (listenr) => {
    listners.push(listners);

    return () => {
      listners.filter((l) => l !== listenr);
    };
  };
};
