import React from 'react'

interface Persona {
  nombreCompleto: string,
  edad: number,
  direccion: {
    calle: string,
    ciudad: string
  },
}
const ObjectLiterals = () => {
  const persona: Persona = {
    nombreCompleto: 'Juan',
    edad: 30,
    direccion  : {
      calle: 'Calle falsa 123',
      ciudad: 'Ciudad falsa'
    }
  }
  return (
    <div>
        <h3>ObjectLiterals</h3>
        <code>
          <pre>
            {JSON.stringify(persona, null, 2)}
          </pre>
        </code>
    </div>
  )
}

export default ObjectLiterals