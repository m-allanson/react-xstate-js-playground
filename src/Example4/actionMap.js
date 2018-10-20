const actionMap = {
  // anything returned from the actionMap will be stored in the data property (this is useful for scenario where an action triggers an async call that fetches data)
  myAction: () => {
    console.log('myAction fired');
    return { foo: 'bar' };
  },
};

export default actionMap;
