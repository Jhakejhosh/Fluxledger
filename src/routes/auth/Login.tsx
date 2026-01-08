import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PiEyeSlash, PiEyeLight } from "react-icons/pi";
import { useState } from 'react';
import GoogleAuth from '../../components/ui/GoogleAuth';
import { Link } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8),
});

type LoginFormData = z.infer<typeof loginSchema>

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async(data: LoginFormData) => {
    console.log(data)
    console.log(isSubmitting)
  }

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='lg:w-1/3 w-full md:w-1/2'>
      <h1 className="font-bold text-2xl text-center">Login to your an account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='pt-6'>
        <div className='flex flex-col'>
          <label className='label'>Email</label>
          <input type='email' {...register('email')} placeholder='businessname@gmail.com' 
          className='input'/>
          {errors.email && <p className='input-error'>{errors.email.message}</p>}
        </div>
        <div className='flex flex-col relative'>
          <label className='label'>Password</label>
          <input {...register('password')} placeholder='********' 
          type={showPassword ? "text" : "password"}
          className='input'/>
          <span className='absolute top-[60%] right-6 text-gray-500' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <PiEyeLight/> : <PiEyeSlash/>}
          </span>
          {errors.password && <p className='input-error'>{errors.password.message}</p>}
        </div>
        {/**Forgot password***/}
        <p className='text-blue-500 text-end py-2'>Forgot Password</p>
        <button type="submit" disabled={isSubmitting} className='form-button bg-black text-white mt-3'>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <div>
          <p className='p text-center py-6'>Or</p>
        </div>
        <GoogleAuth/>
        <p className='text-sm text-center py-3'>Don't have an account?  
          <Link to='/register' className='text-blue-500'>Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login

