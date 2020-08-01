import React from 'react';
import './App.css';

import Arena from './components/questao1e2/Arena';
import World from './components/questao3/World';
import {ArenaNova, Hero, Enemy} from './components/questao4/ArenaNova';

function App() {
  return (
    <div className="App">
        <h2>Questão 1 e 2:</h2>
        <Arena />
        <h2>Questão 3:</h2>
        <World>
          <Arena /> <br />
          <Arena /> <br />
          <Arena /> 
        </World>
        <h2>Questão 4:</h2>
        <div className="arena">
          <ArenaNova arena='Tokio'>
              <Hero name='Noelle Silva' img='https://i.pinimg.com/564x/1e/78/e6/1e78e60ada9a064b6830f44529c72a96.jpg'/>
              <Enemy name='Fana' img='https://i.pinimg.com/564x/1d/6b/e9/1d6be9fd6fc91b9107c776a636d984fb.jpg'/>
          </ArenaNova>
        </div>
        
    </div>
  );
}

export default App;
