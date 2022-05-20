import React from 'react'

const Functions = () => {
    const sumar = (a: number, b: number): number => {
        return a + b
    }
  return (
      <div>
          <div>Functions</div>
          <h1> El Resultado es : {sumar(1,2)}</h1>
      </div>
  )
}

export default Functions