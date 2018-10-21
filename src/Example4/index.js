// an action triggering a transition

import React from 'react';
import { Machine } from 'react-xstate-js';
import machineConfig from './machineConfig';
import actionMap from './actionMap';

const Example4 = () => (
  <Machine
    config={machineConfig}
    actionMap={actionMap}
  >
    {({ transition, state, data }) => (
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
      <p>
        data:
        {' '}
        {JSON.stringify(data)}
      </p>
    </>
    )}
  </Machine>
);

export default Example4;
