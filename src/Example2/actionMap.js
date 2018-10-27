// an object that maps actions defined in the config to functions you want those actions to trigger (http://davidkpiano.github.io/xstate/docs/#/api/actions)
const actionMap = {
  myAction: () => {
    console.log('myAction fired');
  },
};

export default actionMap;
