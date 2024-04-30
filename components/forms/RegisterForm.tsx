'use client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../Button';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Input from '../inputs/input';
import { GoLock } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { TRegister, RegisterSchema } from '@/utils/schema';
import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaGoogle,
} from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import PasswordStrengthBar from 'react-password-strength-bar';

const Form = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TRegister>({
    resolver: zodResolver(RegisterSchema),
  });
  const processForm: SubmitHandler<TRegister> = async (data) => {
    const userInputs = RegisterSchema.parse(data);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/sign-up-email`,
      {
        method: 'POST',
        body: JSON.stringify(userInputs),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (res.ok) {
      // toast.success('user registered');
      router.push('/login');
    }
    reset();
  };
  const [hide, setHide] = useState(true);
  const clickHandler = () => {
    setHide((prev) => !prev);
  };
  return (
    <>
      <form onSubmit={handleSubmit(processForm)} className='form__input'>
        <Input
          id='firstName'
          label='First Name'
          placeholder='firstname'
          register={register}
          errors={errors}
          name='firstName'
          type='text'
          icon={<BiUser />}
        />
        <Input
          id='lastName'
          label='Last Name'
          placeholder=''
          register={register}
          errors={errors}
          name='lastName'
          type='text'
          icon={<BiUser />}
        />
        <Input
          id='email'
          label='Email'
          placeholder='email'
          register={register}
          errors={errors}
          name='email'
          type='email'
          icon={<MdOutlineEmail />}
        />
        <Input
          id='password'
          label='Password'
          placeholder=''
          register={register}
          errors={errors}
          name='password'
          type='password'
          icon={<GoLock />}
          clickHandler={clickHandler}
          state={hide}
          hideIcon={<BsEyeSlash />}
          showIcon={<BsEye />}
        />
        <div className='pass__strength py-2 w-full'>
          <p>Password Strength</p>
          <PasswordStrengthBar
            password={watch('password')}
            className='strength'
          />
        </div>
        <div className='terms'>
          {/* <input type='checkbox' {...register('checkbox')} /> */}
          <p>
            By creating an account you agree to our{' '}
            <span>Terms & Conditions</span>
          </p>
        </div>
        <Button
          disabled={isSubmitting}
          outline
          label={isSubmitting ? 'Registering...' : 'Register'}
        />
      </form>
      <div className='icons__wrapper'>
        <p>Contact with</p>
        <div className='icons'>
          <FaGoogle onClick={() => signIn('google')} />
          <FaGithub onClick={() => signIn('github')} />
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </>
  );
};

export default Form;
