import React from 'react'

const BasicTypes = () => {
    const nombre: string= 'Alberto';
    const edad: number = 35;
    const estaActivo: boolean = false;
    const poderes: string[] = ['super', 'vuela', 'super velocidad'];
    
    return (
      <div>
          <h3>BasicTypes</h3>
            <span>{nombre}, {edad}, { estaActivo? 'activo': 'no activo' }</span>
            <hr />
            {poderes.join(', ')}
      </div>
  )
}

export default BasicTypes