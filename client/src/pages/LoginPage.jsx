import { useForm } from "react-hook-form"

function LoginPage ()
{

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmited = handleSubmit( async ( data ) =>
  {
    console.log( data )
  } )

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className='bg-red-900 max-w-md p-10 rounded-md'>
        <form onSubmit={ onSubmited } >

          <input type="email" { ...register( 'email', { required: true } ) } className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Email' />

          {
            errors.email && <p className='text-red-500'>Email is Required</p>
          }


          <input type="password" { ...register( 'password', { required: true } ) } className='w-full bg-red-700 text-white px-4 py-2 rounded-md my-2' placeholder='Password' />

          {
            errors.password && <p className='text-red-500'>Password is Required</p>
          }

          <button type="submit" className="w-full bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded-md my-2">Register</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage