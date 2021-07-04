import {useState} from 'react';
import { LoginContainer } from './login.styles';
import LoginForm from '../login-form/login-form.component';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const error = {
     message : "All inputs are required"
  }


  const handleEmail = (e) => {
      setEmail(e.target.value)
  }

  const handlePassword = (e) => {
      setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!email || !password) {
         return  alert(error.message)
      }
      try {
         const res =  await axios.post(`http://localhost:8000/api/login`, {
             email,
             password
         })
         console.log(res)
      }
      catch (err) {
          console.log(err)
      }
  }

    return (
        <LoginContainer>
            <div className='container'>
                <div className='text-container'>
                    <h2 className='login-text'>Login</h2>
                    <h3>{email}</h3>
                    <h3>{password}</h3>
                </div>
                <LoginForm 
                   email={email}
                   password={password}
                   handleEmail={handleEmail}
                   handlePassword={handlePassword}
                   handleSubmit={handleSubmit}
                />
         </div>
        </LoginContainer>   
    )
}

export default Login



