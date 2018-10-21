// an action triggering a transition

import React from 'react';
import { Machine } from 'react-xstate-js';
import machineConfig from './machineConfig';
import actionMap from './actionMap';

const Example3 = () => (
  <Machine
    config={machineConfig}
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

export default Example3;
