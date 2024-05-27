import PropTypes from 'prop-types';

const UserDetails = ({ arrayObjPessoas }) => {

    const podeDirigir = idade => idade >= 18 ? "pode dirigir" : "não pode dirigir";

    return (
    <>
    <h1>Desafio 4</h1>
        {arrayObjPessoas.map((pessoa) => (
            <li key={pessoa.id}><strong>{pessoa.nome}</strong> tem <strong>{pessoa.idade}</strong> anos e é <strong>{pessoa.profissao}</strong> e <strong>{podeDirigir(pessoa.idade)}</strong></li>
        ))}
    </>
  )
}

UserDetails.propTypes = {
    arrayObjPessoas: PropTypes.array
}

export default UserDetails;

