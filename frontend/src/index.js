import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { UploadProvider } from './context/UploadContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <UploadProvider>
      <App />
    </UploadProvider>
  </React.StrictMode>
);
