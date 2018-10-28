/* An example using the defaultData prop
-------------------------------------------------------------------- */

import React from 'react';
import { Machine } from 'react-xstate-js';
import machineConfig from './machineConfig';
import actionMap from './actionMap';
import defaultData from './defaultData';

const Example5 = () => (
  <Machine
    config={machineConfig}
    actionMap={actionMap}
    defaultData={defaultData}
  >
    {({ state, send, data }) => (
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
      <p>
        data:
        {' '}
        {JSON.stringify(data)}
      </p>
    </>
    )}
  </Machine>
);

export default Example5;
