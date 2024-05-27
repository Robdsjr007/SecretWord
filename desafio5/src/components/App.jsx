import './App.css'
import CarDetails from './CarDetails/CarDetails'

function App() {

  const carros = [{id: 1, nome: "Ferrari", color: "Amarela"}, {id: 2, nome: "Lamborghini", color: "Azul"}, {id: 3, nome: "Mustang", color: "Cinza"}]

  return (
    <div className='.App'>
      <h1>Estilizando uma lista de carros</h1>
      <div className="car_container">
        {carros.map((car) => (
          <CarDetails key={car.id} car={car}/>
        ))}
      </div>
    </div>
  )
}

export default App
