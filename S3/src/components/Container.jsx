import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div style={{border: '1px solid black'}}>
        <h1>Sou um container</h1>
        {children}
    </div>
  )
}

Container.propTypes = {
    children: PropTypes.any
}

export default Container;