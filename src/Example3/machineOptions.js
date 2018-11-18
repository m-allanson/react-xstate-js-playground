import { actions } from 'xstate';

const { assign } = actions;

const machineOptions = {
  actions: {
    myAction: assign({ foo: ctx => 'bar' }),
  },
};

export default machineOptions;
