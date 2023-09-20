import './Jogos.css';

const Jogos = ({ verificarLetra, palavraEscolhida, categoriaEscolhida, letras, letrasAdivinhadas, letrasErradas, tentativas, pontuacao}) => {
    return (
        <div className="game">
            <p className="pontos">
                <span>Pontuação: {pontuacao}</span>
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className='tipo'>
                Dica sobre a palavra: <span>{categoriaEscolhida}</span>
            </h3>
            <p>Você ainda tem {tentativas} tentativa(s).</p>

            <div className="palavraContainer">
                <span className='letra'>A</span>
                <span className="quadradoBranco"></span>
            </div>

            <div className="letraContainer">
                <p>Tente adivinhar uma letra da palavra..</p>
                <form>
                    <input type="text" name="letra" maxLength={1} required/>
                    <button>Jogar!</button>
                </form>
            </div>

            <div className="letrasErradasContainer">
                <p>letras já utilizadas:</p>
                <span>a, </span>
                <span>b, </span>
            </div>
        </div>
    );
}

export default Jogos;