import React from 'react';
import ReactDOM from 'react-dom';
import Example1 from './Example1';
// import Example2 from './Example2';
// import Example3 from './Example3';

const App = () => (
  <>
    <Example1 />
    {/* <Example2 /> */}
    {/* <Example3 /> */}
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
