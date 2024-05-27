import PropTypes from 'prop-types';

const Message = ({msg}) => {
  return (
    <>
    <h1>State Lift</h1>
        <p>A mensagem é: {msg}</p>
    </>
  )
}

Message.propTypes = {
    msg: PropTypes.string
}

export default Message