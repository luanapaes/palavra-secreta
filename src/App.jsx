//CSS
import './App.css';

//React 
import { useCallback, useEffect, useState } from 'react';

//data
import { wordsList } from './data/palavras';

//componentes
import TelaInicial from './components/TelaInicial';
import Jogos from './components/Jogos';
import GameOver from './components/GameOver';

const estagios = [
  { id: 0, name: 'inicio' },
  { id: 1, name: 'jogo' },
  { id: 2, name: 'game over' },
];

function App() {
  const [palavras] = useState(wordsList);
  const [gameEstagio, setGameEstagio] = useState(estagios[0].name);

  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
  const [letras, setLetras] = useState([]);

  const palavraCategoriaEscolhidas = () =>{
    //para escolher a categoria aleatoriamente
    const categorias = Object.keys(palavras);
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)];
    console.log(categoria);
    //o random retorna um valor quebrado então não pegaria uma posição 1,2 ou 3, por exemplo
    //então usamos o floor para arredondar o valor para baixo

    //para escolher a palavra aleatoriamente
    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)];
    console.log(palavra);

    return{categoria, palavra};
  }

  //inicia o jogo
  const comecarJogo = () => {
    //palavra e categoria escolhida
    const {palavra, categoria} = palavraCategoriaEscolhidas();
    console.log(palavra, categoria);

    //criar um array de letras
    let letrasPalavras = palavra.split('');
    letrasPalavras = letrasPalavras.map((l) => l.toLowerCase());
    console.log(letrasPalavras);

    //seta os status
    setPalavraEscolhida(palavra);
    setCategoriaEscolhida(categoria);
    setLetras(letras);

    setGameEstagio(estagios[1].name);
  }

  //processamento das letras nos inputs
  const verificarLetra = () => {
    setGameEstagio(estagios[2].name)
  }

  //reiniciar jogo
  const reiniciarJogo = () => {
    setGameEstagio(estagios[0].name)
  }

  return (
    <>
      <div className='App'>
        {gameEstagio === 'inicio' && <TelaInicial comecarJogo={comecarJogo} />}
        {gameEstagio === 'jogo' && <Jogos verificarLetra={verificarLetra} />}
        {gameEstagio === 'game over' && <GameOver reiniciarJogo={reiniciarJogo} />}
      </div>

    </>
  )
}

export default App
