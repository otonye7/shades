import {useState} from 'react';
import { LoginContainer } from './sign-up.styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../button/button.component';


const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
      },
    },
  }));


const SignUp = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }
    
  
    const classes = useStyles();
    return (
        <LoginContainer>
            <div className='container'>
                <div className='text-container'>
                    <h2 className='login-text'>Create an account</h2>
                </div>
            <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
              <div className='form-container'>
                <TextField  onChange={handleName}  label="First Name" variant="outlined" />
                <br />
                <TextField  onChange={handleLastName} label="Last Name" variant="outlined" />
                <br />
                <TextField  onChange={handleEmail} label="Email" variant="outlined" />
                <br />
                <TextField onChange={handlePassword} label="Password"  variant="outlined" />
            </div>
            <div className='button-container'>
               <div className='btn'>
                    <Button  className='btn'>Sign Up</Button>
               </div>
           </div>
           </form>
         </div>
        </LoginContainer>   
    )
}

export default SignUp;


































