import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './component/css/general.css';

import AppInicio from './AppInicio';
import { AuthProvider } from './component/otros/AuthContext';

ReactDOM.render(
<React.StrictMode>
  <AuthProvider>
  <AppInicio/>
  </AuthProvider>
</React.StrictMode>,
  document.getElementById('root')
)
