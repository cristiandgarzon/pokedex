import React from 'react'

function Habilidades({arregloA}) {
     

  const habilidades=arregloA

  const handleclick1 = () => {
    alert("hola desde habilidades");
    console.log(habilidades)
    
  }

  return (
    <>
    <h2>Habilidades</h2>
    <ul>
        {habilidades.map(x=>(
          <li>{x.ability.name}</li>

        )

            
        )}  

    </ul>
    
    
    
    </>
    
  )
}

export default Habilidades