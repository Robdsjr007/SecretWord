import './App.css'
import UserDetails from './components/UserDetails'

function App() {
  
  const pessoas = 
  [ { id: 1, nome: "Robson", idade: 18, profissao: "Dev"},
    { id: 2, nome: "Isabella", idade: 17, profissao: "RH" },
    { id: 3, nome: "João", idade: 20, profissao: "Cientista"} ];
  
  return (
    <>
      <UserDetails arrayObjPessoas={pessoas}/>
    </>
  )
}

export default App
