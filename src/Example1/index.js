// minimum example - changing state

import React from 'react';
import { Machine } from 'react-xstate-js';
import statechart from './statechart';

const Example1 = () => (
  <Machine statechart={statechart}>
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

export default Example1;
