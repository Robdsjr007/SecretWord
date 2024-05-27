import PropTypes from 'prop-types';

const CarDetails = ({brand, color, km, newCar}) => {
  return (
    <>
        <h3>Detalhes do carro</h3>
        <ul>
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>KM: {km}</li>
            <li>Carro novo: {newCar ? "Sim": "Não"}</li>
        </ul>
    </>
  )
}

CarDetails.propTypes = {
    brand: PropTypes.string,
    color: PropTypes.string,
    km: PropTypes.number,
    newCar : PropTypes.bool
}

export default CarDetails