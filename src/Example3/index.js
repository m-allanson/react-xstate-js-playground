/* An example of an action's function changing the state (see ./actionMap)
----------------------------------------------------------------------- */

import React from 'react';
import { Machine } from 'react-xstate-js';
import machineConfig from './machineConfig';
import actionMap from './actionMap';

const Example3 = () => (
  <Machine
    config={machineConfig}
    actionMap={actionMap}
  >
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
        {JSON.stringify(state)}
      </p>
    </>
    )}
  </Machine>
);

export default Example3;
