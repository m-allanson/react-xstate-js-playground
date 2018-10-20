const actionMap = {
  // actions receive an event and transition parameter (incase they need to read event data or fire a transition)
  myAction: (event, transition) => {
    console.log('myAction fired');
    setTimeout(
      () => transition({ type: 'NEXT' }),
      500,
    );
  },
};

export default actionMap;
