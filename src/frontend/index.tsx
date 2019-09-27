import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './ts/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
