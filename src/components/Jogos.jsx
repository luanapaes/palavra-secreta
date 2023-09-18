import './Jogos.css';

const Jogos = ({verificarLetra}) =>{
    return(
        <div>
            <h1>Jogo</h1>
           <button onClick={verificarLetra}>Finalizar jogo</button>
        </div>
    );
}

export default Jogos;