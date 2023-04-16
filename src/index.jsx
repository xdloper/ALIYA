import React from 'react';
import { createRoot } from 'react-dom/client';

////////////////////////////////

import './style/index.css';
import './style/index.scss';

////////////////////////////////

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div className="exampleText">hello worlds</div>  
  </React.StrictMode>,
);

