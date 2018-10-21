// an action chaning state

import React from 'react';
import { Machine } from 'react-xstate-js';
import machineConfig from './machineConfig';
import actionMap from './actionMap';

const Example3 = () => (
  <Machine
    config={machineConfig}
    actionMap={actionMap}
  >
    {({ send, state }) => (
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

export default Example3;
