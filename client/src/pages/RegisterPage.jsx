import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterPage ()
{
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth()
    const navigate = useNavigate()

    useEffect( () =>
    {
        if ( isAuthenticated ) navigate( '/tasks' )
    }, [ isAuthenticated, navigate ] )
    return (
        <div className='bg-red-900 max-w-md p-10 rounded-md'>
            <form onSubmit={ handleSubmit( async ( values ) =>
            {
                signup( values )
            } ) }>
                <input type="text" { ...register( 'username', { required: true } ) } className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Username' />

                <input type="email" { ...register( 'email', { required: true } ) } className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Email' />

                <input type="password" { ...register( 'password', { required: true } ) } className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Password' />

                <button type="submit" className="w-full bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded-md my-2">Register</button>
            </form>
        </div>
    )
}

export default RegisterPage