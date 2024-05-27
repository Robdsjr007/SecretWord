import './StartScreen.css'
import PropTypes from 'prop-types'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Jogar</button>
    </div>
  )
}

StartScreen.propTypes = {
    startGame: PropTypes.func
}

export default StartScreen