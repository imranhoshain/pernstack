import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', background: '#f5f7fb' }}>
      <header style={{ padding: '16px', background: '#0f172a', color: '#fff' }}>
        <h1 style={{ margin: 0 }}>PERN Upload Demo</h1>
      </header>
      <main style={{ maxWidth: '960px', margin: '24px auto', padding: '0 16px' }}>
        <Home />
      </main>
    </div>
  );
}

export default App;
