import { useState } from 'react';
import { LoginContainer } from './sign-up.styles';
import SignUpForm from '../signup-form/signup-form.component';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";


const SignUp = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const error = {
        message: "All inputs are required"
    }


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !password || !email || !lastName) {
            return alert(error.message)
        }
        try {
            const res = await axios.post(`https://sohoquette.herokuapp.com/api/signup`, {
                name,
                lastName,
                email,
                password
            })
            toast.success('Sign Up Successful')
            history.push('/login')
        }
        catch (err) {
            if (err.response.status === 400) toast.error(err.response.data)
        }
    }

    return (
        <LoginContainer>
            <div className='container'>
                <div className='text-container'>
                    <h2 className='login-text'>Create an account</h2>
                </div>
                <ToastContainer />
                <SignUpForm
                    name={name}
                    lastName={lastName}
                    email={email}
                    password={password}
                    handleName={handleName}
                    handleLastName={handleLastName}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    handleSubmit={handleSubmit}
                />
            </div>
        </LoginContainer>
    )
}

export default SignUp;


































