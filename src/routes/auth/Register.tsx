import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PiEyeSlash, PiEyeLight } from "react-icons/pi";
import { useState } from 'react';

const registerSchema = z.object({
  name: z.string().min(1, { message: 'Name must be at least 1 character' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // Error attaches to this field
});

type RegisterFormData = z.infer<typeof registerSchema>

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async(data: RegisterFormData) => {
    console.log(data)
    console.log(isSubmitting)
  }

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className='lg:w-1/3 w-full md:w-1/2'>
      <h1 className="font-bold text-2xl text-center">Create an account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
          <label className='label'>Name</label>
          <input {...register('name')} placeholder='Business name' 
          className='input'/>
          {errors.name && <p className='input-error'>{errors.name.message}</p>}
        </div>
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
        <div className='flex flex-col relative'>
          <label className='label'>Confirm password</label>
          <input {...register('confirmPassword')} placeholder='********' 
          type={showConfirmPassword ? "text" : "password"}
          className='input'/>
          <span className='absolute top-[60%] right-6 text-gray-500' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <PiEyeLight/> : <PiEyeSlash/>}
          </span>
          {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword.message}</p>}
        </div>
        {/***remember me button */}
        <button type="submit" disabled={isSubmitting} className='form-button'>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default Register