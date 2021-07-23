import { MailFormContainer } from './mail-form.styles';
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

const MailForm = ({ handleSubmit, email, handleEmail }) => {
    const classes = useStyles();
    return (
        <MailFormContainer>
            <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                <div className='form-container'>
                    <TextField type='email' size="small" value={email} onChange={handleEmail} label="Email" variant="outlined" />
                </div>
                <br />
                <div className='btns'>
                    <Button>Subscribe</Button>
                </div>
            </form>
        </MailFormContainer>
    )
}

export default MailForm;
