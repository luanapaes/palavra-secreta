//CSS
import './App.css';

//React 
import { useCallback, useEffect, useState } from 'react';

//data
import {wordsList} from './data/palavras';

//componentes
import TelaInicial from './components/TelaInicial';
import Jogo from './components/Jogo';
import GameOver from './components/GameOver';



function App() {
  const estagios = [
    {id: 0, name: 'inicio'},
    {id: 1, name: 'jogo'},
    {id: 2, name: 'game over'},
  ];

  const [palavras] = useState(wordsList);
  const [gameEstagio, getGameEstagio] = useState(estagios[0].name);
  
  console.log(palavras);

 
  return (
    <>
      <div className='App'>
        {gameEstagio === 'inicio' && <TelaInicial/>}
        {gameEstagio === 'jogo' & <Jogo/>}
        {gameEstagio === 'game over' && <GameOver/>}
      </div>
      
    </>
  )
}

export default App
