import { useState } from 'react';

// Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMsgState from './components/ChangeMsgState';

// Styles / CSS
import './App.css'

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Ferrari", color: "Branca", newCar: false, km: 1200},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234}
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }


  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <ListRender />
      <CondicionalRender />
      <ShowUserName text="Robdsjr007"/>
      <h1>Loop com componentes</h1>
      {cars.map((car) => (
      <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
      ))}

      {/* Children */}
      <Container>
        <p>Paragrafo</p>
      </Container>

      {/* Executar Função*/}
      <ExecuteFunction event={showMessage}/>

      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMsgState handleMessage={handleMessage}/>

    </div>
  )
}

export default App
