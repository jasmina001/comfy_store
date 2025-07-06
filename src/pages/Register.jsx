import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
function Register() {
  return (
    <section className='h-screen grid bg-[#4e4949] place-items-center'>
          <Form className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-6' method='post'>
            <h4 className='text-center text-3xl font-bold'>Register</h4>
            <FormInput type={'text'} label={'username'} name={'username'} />
            <FormInput type={'email'} label={'email'} name={'indentifeir'}  />
            <FormInput type={'password'} label={'password'} name={'password'} />
            <div className="mt-4">
              <SubmitBtn text={'register'} />
            </div>
            
            <p className='text-center'>Already a member? <Link to={'/login'} className='ml-2 link link-hover link-primary capitalize'>login</Link></p>
          </Form>
        </section>
  )
}

export default Register