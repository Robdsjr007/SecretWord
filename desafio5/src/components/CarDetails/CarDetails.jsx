import PropTypes from 'prop-types';
import styles from './CarDetails.module.css'

const CarDetails = ({car}) => {
  return (
    <div className={styles.card}>
        <h1>Nome: {car.nome}</h1>
        <p>Cor: {car.color}</p>
    </div>
  )
}

CarDetails.propTypes = {
    car: PropTypes.object
}

export default CarDetails