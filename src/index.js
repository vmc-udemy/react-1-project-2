import { StrictMode } from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/user.context';

import './index.scss';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
