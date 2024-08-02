import './GameOver.css'
import PropTypes from 'prop-types'

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>Fim de jogo!</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

GameOver.propTypes = {
    retry: PropTypes.func,
    score: PropTypes.number
}

export default GameOver