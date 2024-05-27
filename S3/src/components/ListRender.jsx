import { useState } from "react"

const ListRender = () => {
  
    const [users, setUsers] = useState([
        {id: 1, nome: "Robson", idade: 18},
        {id: 2, nome: "Isabella", idade: 17}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3);


        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
    <>
    <h1>List render</h1>
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.nome} - {user.idade}</li>
    ))}
    </ul>
    <button onClick={deleteRandom}>Delete random user</button>
    </>
  )
}

export default ListRender