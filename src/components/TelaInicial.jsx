import './TelaInicial.css';

const TelaInicial = ({comecarJogo}) =>{
    return(
        <div className='start'>
            <h1>Palavra Secreta</h1>
            <p>Clique no botão para começar a jogar</p>
            <button onClick={comecarJogo}>Começar!</button>
        </div>
    );
}

export default TelaInicial;