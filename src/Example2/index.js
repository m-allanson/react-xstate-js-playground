/* options (with actions)
---------------------------------- */

import React from 'react';
import { Machine } from 'react-xstate-js';
import machineConfig from './machineConfig';
import machineOptions from './machineOptions';

const Example2 = () => (
  <Machine
    config={machineConfig}
    options={machineOptions}
  >
    {({ service, state }) => (
    <>
      <button
        type="button"
        onClick={() => service.send({ type: 'PREVIOUS' })}
      >
        previous
      </button>
      <button
        type="button"
        onClick={() => service.send({ type: 'NEXT' })}
      >
        next
      </button>
      <p>
        state:
        {' '}
        {JSON.stringify(state.value)}
      </p>
    </>
    )}
  </Machine>
);

export default Example2;
