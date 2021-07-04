import { LoginFormContainer } from './login-form.styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../button/button.component';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 550,
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
        borderColor: 'black',
        }
      },
    },
  }));

const LoginForm = ({handleSubmit, email,  handleEmail, password, handlePassword}) => {
    const classes = useStyles();
    return (
        <LoginFormContainer>
             <form className={classes.root} onSubmit={handleSubmit}  noValidate autoComplete="off">
              <div className='form-container'>
                <TextField type='email' size="small" value={email} onChange={handleEmail}  label="Email" variant="outlined" />
                <br />
                <TextField type='password' size="small" label="Password" value={password} onChange={handlePassword}   variant="outlined" />
            </div>
            <div className='button-container'>
               <h5 className='forgot-password-text'>Forgot your password ?</h5>
               <div className='btn'>
                    <Button className='btn'>Login</Button>
               </div>
               <h5 className='forgot-password-text'>Create Account</h5>
           </div>
           </form>
        </LoginFormContainer>
    )
}

export default LoginForm;
















