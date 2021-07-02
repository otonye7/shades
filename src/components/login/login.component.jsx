import { LoginContainer } from './login.styles';
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


const Login = () => {
    const classes = useStyles();
    return (
        <LoginContainer>
            <div className='container'>
                <div className='text-container'>
                    <h2 className='login-text'>Login</h2>
                </div>
            <form className={classes.root}   noValidate autoComplete="off">
              <div className='form-container'>
                <TextField type='email' label="Email" variant="outlined" />
                <br />
                <TextField label="Password"  variant="outlined" />
            </div>
           </form>
           <div className='button-container'>
               <h5 className='forgot-password-text'>Forgot your password ?</h5>
               <div className='btn'>
                    <Button className='btn'>Login</Button>
               </div>
               <h5 className='forgot-password-text'>Create Account</h5>
           </div>
         </div>
        </LoginContainer>   
    )
}

export default Login



