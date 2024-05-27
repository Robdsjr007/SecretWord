import './App.css'
import MyForm from './MyForm/MyForm'

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{name: "Josias", email: "Josias@gmail.com", role: "user"}}/>
    </>
  )
}

export default App
