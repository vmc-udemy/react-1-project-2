import { StrictMode } from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

import './index.scss';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
