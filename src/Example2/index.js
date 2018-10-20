// triggering an action

import React from 'react';
import { Machine } from 'react-xstate-js';
import statechart from './statechart';
import actionMap from './actionMap';

const Example2 = () => (
  <Machine
    statechart={statechart}
    actionMap={actionMap}
  >
    {({ transition, state }) => (
    <>
      <button
        type="button"
        onClick={() => transition({ type: 'PREVIOUS' })}
      >
        previous
      </button>
      <button
        type="button"
        onClick={() => transition({ type: 'NEXT' })}
      >
        next
      </button>
      <p>
        state:
        {' '}
        {state}
      </p>
    </>
    )}
  </Machine>
);

export default Example2;