import { SignUpFormContainer } from './signup-form.styles';
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



const SignUpForm = ({handleSubmit, handleName, handleLastName, name, password, lastName, email,  handleEmail, handlePassword}) => {
    const classes = useStyles();
    return (
        <SignUpFormContainer>
            <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
              <div className='form-container'>
                <TextField value={name} onChange={handleName}  label="First Name" variant="outlined" />
                <br />
                <TextField value={lastName} onChange={handleLastName} label="Last Name" variant="outlined" />
                <br />
                <TextField value={email} onChange={handleEmail} label="Email" variant="outlined" />
                <br />
                <TextField value={password} onChange={handlePassword} label="Password"  variant="outlined" />
            </div>
            <br />
            <div className='button-container'>
               <div className='btn'>
                    <Button  className='btn'>Sign Up</Button>
               </div>
           </div>
           </form>
        </SignUpFormContainer>
    )
}

export default SignUpForm