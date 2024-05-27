import PropTypes from 'prop-types';

const ShowUserName = ({ text }) => {
  return (
    <>
    <h1>Props e propTypes</h1>
        <p>O valor da props é: <strong>{text}</strong></p>
    </>
  )
}

ShowUserName.propTypes = {
    text: PropTypes.string
}

export default ShowUserName