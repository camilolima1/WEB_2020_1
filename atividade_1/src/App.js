import React from 'react';
import './App.css';

import Estudante from './components/questao1/Estudante';
import EstudanteClass from './components/questao2/EstudanteClass';
import PaiEstudante from './components/questao3/PaiEstudante';
import PaiEstudanteClass from './components/questao4/PaiEstudanteClass';

function App() {
  return (
    <div className="App">
      Questão 1
      <Estudante />
      Questão 2
      <EstudanteClass />
      Questão 3
      <PaiEstudante />
      Questão 4
      <PaiEstudanteClass />

    </div>
  );
}

export default App;
