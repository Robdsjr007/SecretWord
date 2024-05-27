import { useState } from "react"

const CondicionalRender = () => {

    const [x] = useState(true)

    const [name, setName] = useState("Carlos")

  return (
    <div>
        <h1>Isso será exibido???</h1>
        {x && <p>se for true, sim!</p>}
        {!x && <p>é falso esse parágrafo!</p>}
        <h1>IF ternário</h1>
        {name == "João" ? (<>
            <p>Olá {name}!</p>
        </>) : (
            <>
                <p>Você não é o  João, seu nome é {name}</p>
            </>
        )}
        <button onClick={() => setName(name !== "João" ? "João": "Carlos")}>Muda o nome</button>
    </div>
    
  )
}

export default CondicionalRender