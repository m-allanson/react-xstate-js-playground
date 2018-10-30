const machineConfig = {
  key: 'example2',
  strict: true,
  initial: 'step1',
  states: {
    step1: {
      on: {
        NEXT: {
          target: 'step2',
        },
      },
    },
    step2: {
      onEntry: ['myAction'],
      on: {
        PREVIOUS: {
          target: 'step1',
        },
        NEXT: {
          target: 'step3',
        },
      },
    },
    step3: {
      on: {
        PREVIOUS: {
          target: 'step2',
        },
      },
    },
  },
};

export default machineConfig;
