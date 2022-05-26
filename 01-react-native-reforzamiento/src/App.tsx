import React from 'react'
import Formularios from './Components/Formularios'
import Login from './Components/Login'
import BasicTypes from './typescript/BasicTypes'
import Functions from './typescript/Functions'
import ObjectLiterals from './typescript/ObjectLiterals'

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a typescript</h1>
      <hr />
      <Formularios/>
      {/* <Login/> */}
      {/* <Functions/> */}
      {/* <ObjectLiterals/> */}
      {/* <BasicTypes /> */}
    </div>
  )
}

export default App