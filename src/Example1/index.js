/* reading & changing state
---------------------------------------- */

import React from 'react';
import { Machine } from 'react-xstate-js';
import machineConfig from './machineConfig';

const Example1 = () => (
  <Machine config={machineConfig}>
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

export default Example1;
