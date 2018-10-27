/* An example of reading & changing state
---------------------------------------- */

import React from 'react';
import { Machine } from 'react-xstate-js';
import machineConfig from './machineConfig';

const Example1 = () => (
  <Machine config={machineConfig}>
    {({ state, send }) => (
    <>
      <button
        type="button"
        onClick={() => send({ type: 'PREVIOUS' })}
      >
        previous
      </button>
      <button
        type="button"
        onClick={() => send({ type: 'NEXT' })}
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
