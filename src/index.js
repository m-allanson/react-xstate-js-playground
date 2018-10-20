import React from 'react';
import ReactDOM from 'react-dom';
// import Example1 from './Example1';
import Example2 from './Example2';

const App = () => (
  <div>
    {/* <Example1 /> */}
    <Example2 />
  </div>
);

ReactDOM.render(
  <App />,
  // eslint-disable-next-line
  document.getElementById('root'),
);
