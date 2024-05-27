import { useState } from 'react'
import './MyForm.css'
import PropTypes from 'prop-types';

const MyForm = ({user}) => {
    // Controller inputs

    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value);
    }

    //console.log(name)
    //console.log(email)

    const handleSubmit = (e) => {
        if (name || email || role == " ") {
            e.preventDefault();
            alert("Campos vazios!")
        } else {
        e.preventDefault();
        console.log("enviando formulário")
        console.log(name, email, role)
        setEmail("")
        setName("")
        setRole("")
        }
    }

  return (
    <div>
        {/* Envio de form */}
        {/* Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            {/* Label envolvendo input */}
            <label>
                <span>Email</span>
                {/* Simplificando state */}
                <input type="email" name='email' placeholder='Digite o seu email:' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="adm">Administrador</option>
                <option value="user">Usuário</option>
                <option value="sdsds">Saudades</option>
            </select>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

MyForm.propTypes = {
    user: PropTypes.object.isRequired
}

export default MyForm