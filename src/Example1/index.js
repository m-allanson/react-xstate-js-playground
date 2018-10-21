// reading & changing state

import React from 'react';
import { Machine } from 'react-xstate-js';
import machineConfig from './machineConfig';

const Example1 = () => (
  <Machine config={machineConfig}>
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
