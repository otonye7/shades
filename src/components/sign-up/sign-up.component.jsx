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
    const classes = useStyles();
    return (
        <LoginContainer>
            <div className='container'>
                <div className='text-container'>
                    <h2 className='login-text'>Create an account</h2>
                </div>
            <form className={classes.root}   noValidate autoComplete="off">
              <div className='form-container'>
                <TextField  label="First Name" variant="outlined" />
                <br />
                <TextField  label="Last Name" variant="outlined" />
                <br />
                <TextField  label="Email" variant="outlined" />
                <br />
                <TextField label="Password"  variant="outlined" />
            </div>
           </form>
           <br />
           <div className='button-container'>
               <div className='btn'>
                    <Button className='btn'>Sign Up</Button>
               </div>
           </div>
         </div>
        </LoginContainer>   
    )
}

export default SignUp;
