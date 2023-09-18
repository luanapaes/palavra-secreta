import './GameOver.css';

const GameOver = ({reiniciarJogo}) =>{
    return(
        <div>
            <h1>Game Over</h1>
            <button onClick={reiniciarJogo}>Reiniciar</button>
        </div>
    );
}

export default GameOver;