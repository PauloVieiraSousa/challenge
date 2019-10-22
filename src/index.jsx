import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import App from './containers/App/App';


ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);