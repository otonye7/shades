import { useState } from 'react';
import { LoginContainer } from './login.styles';
import LoginForm from '../login-form/login-form.component';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/api/login`, {
                email,
                password
            })
            toast.success('Login Successful')
            if (res.data) {
                window.localStorage.setItem('auth', JSON.stringify(res.data))
                history.push('/')
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            }
        }
        catch (err) {
            if (err.response.status === 400) toast.error(err.response.data)
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
                <ToastContainer position="top-center" />
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



