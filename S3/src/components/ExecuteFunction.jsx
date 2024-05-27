import PropTypes from 'prop-types';

const ExecuteFunction = ({event}) => {
  return (
    <>
    <h1>Props de evento</h1>
    <button onClick={event}>Mensagem para o console</button>
    </>
  )
}

ExecuteFunction.propTypes = {
    event: PropTypes.func
}

export default ExecuteFunction