import React from 'react';
import './App.css';

import { usePatch } from './useFeathers';

function App() {
  const [user, loading, error] = usePatch('users', 'ABK5wkeVtuxFh7Ic', {
    name: 'usePatch'
  });

  console.log('user => ', user);

  return (
    <div className="App">
      <header className="App-header">
        {loading && <span>Carregando...</span>}
        {!loading && <span>Não carregando...</span>}
        {error && <span>{error}</span>}
        {user._id && (
          <span>Usuario atualizado com patch {user.name}.</span>
        )}
      </header>
    </div>
  );
}

export default App;
