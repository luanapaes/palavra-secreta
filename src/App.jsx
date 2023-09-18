//CSS
import './App.css';

//React 
import { useCallback, useEffect, useState } from 'react';

//data
import {wordsList} from './data/palavras';

//componentes
import TelaInicial from './components/TelaInicial';
import Jogos from './components/Jogos';
import GameOver from './components/GameOver';



function App() {
  const estagios = [
    {id: 0, name: 'inicio'},
    {id: 1, name: 'jogo'},
    {id: 2, name: 'game over'},
  ];

  const [palavras] = useState(wordsList);
  const [gameEstagio, setGameEstagio] = useState(estagios[0].name);
  
  //começar jogo das palavras secretas
  const comecarJogo = () =>{
    setGameEstagio(estagios[1].name)
  }

  //processamento das letras nos inputs
  const verificarLetra = () => {
    setGameEstagio(estagios[2].name)
  }

  //reiniciar jogo
  const reiniciarJogo = () =>{
    setGameEstagio(estagios[0].name)
  }
 
  return (
    <>
      <div className='App'>
        {gameEstagio === 'inicio' && <TelaInicial comecarJogo={comecarJogo}/>}
        {gameEstagio === 'jogo' && <Jogos verificarLetra={verificarLetra}/>}
        {gameEstagio === 'game over' && <GameOver reiniciarJogo={reiniciarJogo}/>}
      </div>
      
    </>
  )
}

export default App
