const actionMap = {
  // actions receive an event & send parameter (incase they need to read event data or change the state)
  myAction: (event, send) => {
    console.log('myAction fired');
    setTimeout(
      () => send({ type: 'NEXT' }),
      500,
    );
  },
};

export default actionMap;
