import './App.css';
import StartScreen from './StartScreen/StartScreen.jsx';

import { useCallback, useEffect, useState } from 'react';

import { wordsList } from '../Data/words';
import Game from './Game/Game.jsx';
import GameOver from './GameOver/GameOver.jsx';

const stages = [{id: 1, name: "start"}, {id: 2, name: "game"}, {id: 3, name: "end"}];

const guessesQty = 3


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState("")
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickedWordCategory = useCallback(() => {
    // Pegue uma categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Pegue uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }, [words]);

  // Vai para a tela do jogo
  const startGame = useCallback(() => {
    // Limpando todos os states
    clearLetterStates();

    // Pegue a palavra e a categoria
    const { word, category } = pickedWordCategory();
    
    // Criar array de letras
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((letra) => letra.toLowerCase())

    // Preencher States
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name);
  }, [pickedWordCategory]);

  // Processo de letter letras
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // Checando se a letra ja foi utilizada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    } 

    // Incluir letras que o usuário adivinha, para certa ou errada
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter,
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter,
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // Condição de derrota
  useEffect(() => {
    if (guesses <= 0) {
      //resetar todos os states
      clearLetterStates()

      setGameStage(stages[2].name)
    } 
  }, [guesses])

  // Condição de vitória
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    if (guessedLetters.length === uniqueLetters.length) {
      //adcionar score
      setScore((actualScore) => actualScore += 100)

      //Restarta o jogo com nova palavra
      startGame();
    }

  }, [guessedLetters, letters, startGame])

  // Reiniciar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }

  return (
    <div className='App'>
      {gameStage == "start" && <StartScreen startGame = {startGame}/>}
      {gameStage == "game" && <Game verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters} 
      guessedLetters={guessedLetters} 
      wrongLetters={wrongLetters} 
      guesses={guesses} 
      score={score}/>}
      {gameStage == "end" && <GameOver retry={retry} score={score}/>}
    </div>
  )
}

export default App
