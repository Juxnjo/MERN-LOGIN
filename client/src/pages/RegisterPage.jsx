import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth'

function RegisterPage ()
{
    const { register, handleSubmit } = useForm()

    return (
        <div className='bg-red-900 max-w-md p-10 rounded-md'>
            <form onSubmit={ handleSubmit( async ( values ) =>
            {
                console.log( values )
                const res = await registerRequest( values )
                console.log( res )
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