import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext"

function LoginPage ()
{

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signin, errors: signinErrors } = useAuth()

  const onSubmited = handleSubmit( async ( data ) =>
  {
    signin( data )
  } )

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className='bg-red-900 max-w-md p-10 rounded-md'>


        {
          signinErrors.map( ( error, i ) => (
            <div className='bg-red-500 text-white p-2 my-2' key={ i }>
              { error }
            </div>
          ) )
        }

        <form onSubmit={ onSubmited } >

          <input type="email" { ...register( 'email', { required: true } ) } className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Email' />

          {
            errors.email && <p className='text-red-500'>Email is Required</p>
          }


          <input type="password" { ...register( 'password', { required: true } ) } className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Password' />

          {
            errors.password && <p className='text-red-500'>Password is Required</p>
          }

          <button type="submit" className="w-full bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded-md my-2">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage