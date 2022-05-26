import React, { useEffect, useReducer } from 'react'

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

type LoginPayload = {
		username: string,
		nombre: string,
}


type AuthAction = 
| {type: 'logout'}
| {type: 'login', payload: LoginPayload }

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return{
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
				case 'login':
					return {
						validando: false,
						token: 'ABC123',
						nombre: action.payload.nombre,
						username: action.payload.username
					}
        default:
            return state
    }
}

const Login = () => {
    const [{validando, token,nombre}, dispatch] = useReducer(authReducer, initialState)
    useEffect(()=>
    {
        setTimeout(()=>{
            dispatch({type: 'logout'})
            }, 3000)
            
    },[]
    )
		const login = () =>{
			dispatch({type: 'login', payload: {username: 'Beto', nombre: 'Alberto'}})
		}
		const logout = () =>{
			dispatch({type: 'logout'})
		}
    if(validando){
        return(
                <div className='alert alert-info'>
                    validando usuario...
                </div>
            
            )
        }
  return (
    <div>
        <h3>Login</h3>
        <hr />
        {
					token?
        <div className='alert alert-success'>
            Autenticado, hola {nombre}
        </div>
				:
        <div className='alert alert-danger'>
            No Autenticado
        </div>

				}
				{
					token?
        <button className='btn btn-danger' onClick={logout}>
            Logout
        </button>
				:

        <button className='btn btn-primary' onClick={login}>
            Login
        </button>
				}
        
    </div>
  )
}

export default Login