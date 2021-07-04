import {useState} from 'react';
import { LoginContainer } from './login.styles';
import LoginForm from '../login-form/login-form.component';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Login = () => {
const history = useHistory();
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

         if (res.data) {
             window.localStorage.setItem('auth', JSON.stringify(res.data))

                 history.push('/')
         }
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
                </div>
                <br />
                <br />
                <div className='login-form'>
                <LoginForm 
                   email={email}
                   password={password}
                   handleEmail={handleEmail}
                   handlePassword={handlePassword}
                   handleSubmit={handleSubmit}
                />
                </div>
               
         </div>
        </LoginContainer>   
    )
}

export default Login



