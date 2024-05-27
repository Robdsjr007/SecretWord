const Challenge = () => {
  
    const n1 = Math.random();
    const n2 = Math.random();

    return (
    <div>
        <p>Primeiro valor: {n1}</p>
        <p>Segundo valor: {n2}</p>
        <button onClick={() => console.log(n1 + n2)}>Somar</button>
    </div>
  )
}

export default Challenge