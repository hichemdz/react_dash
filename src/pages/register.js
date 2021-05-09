import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import Data from '../data';
import { Redirect,useHistory } from "react-router-dom";
import Input from './componant/input';

const Register = () => {

  let history =  useHistory()
  const { auth, setAuth } = useContext(Data)

  const [dataForm, setForm] = useState();
  const [{ password, email, message, name ,password_confirmation}, setErors] = useState({ message: '', name: "", email: '', password: '' ,password_confirmation:''});
  const hundelSubmit = async (e) => {
    e.preventDefault();

   
    try {

      await axios.get('sanctum/csrf-cookie')
        .then(async res => {

          const login = await axios.post('api/register', dataForm)

          const { data } = await login;
         
          setAuth(data)
          localStorage.setItem('token', data.tkoen)
          history.push('/')
          

        })
    }
    catch (er) {
      if (er.response) {
        const { email, password,name,password_confirmation } = er.response.data.errors || { email: [], password: [],name:[],password_confirmation:[] };
        const { message } = er.response.data;

        console.log(er.response.data);
        setErors({email, password,name,message,password_confirmation})
      }
      else console.log('catch :', er);
    }



  }

  const hundelInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...dataForm, [name]: value })
  }

  if (localStorage.getItem('token')) return <Redirect to='/' />;

  return (

    <div className='h-screen bg-blue-400 flex flex-col items-center justify-center bg-red-900'>
      {(!email || !password) && message ? <p className='text-sm bg-white font-black text-red-500 px-5 py-2 my-5' >{message}</p> : ''}
      <div className='w-72  rounded-md bg-white px-5 py-8'>
        <h1 className=' text-center px-5 mb-5 text-3xl font-bold'>Admin </h1>
        <form className='' onSubmit={hundelSubmit} >
          {/* email */}

          {/* email */}
          <Input type='text' hundelInput={hundelInput} placeholder='Enter name'name={name} field='name' message={message} />
          {/* email */}
          <Input type='email' hundelInput={hundelInput} placeholder='Enter email' name={email} field='email' message={message} />
          {/* password */}
          <Input type='password' hundelInput={hundelInput} placeholder='Enter passwored ' name={password} field='password' message={message} />
          {/* confimaed password */}
          <Input type='password' hundelInput={hundelInput} placeholder='Enter passwored confimation' name={password_confirmation} field='password_confirmation' message={message} />



          <button className='bg-blue-600 px-5 py-1 rounded-lg text-gray-50' type='submit'>Register</button>
        </form>
      </div>
    </div>
  )

}
export default Register;