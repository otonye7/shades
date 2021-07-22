import { ReviewFormContainer } from './review-form.styles';
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

const ReviewForm = ({ handleSubmit, email, handleEmail, title, handleTitle, name, handleName, reviews, handleReviews }) => {
    const classes = useStyles();
    return (
        <ReviewFormContainer>
            <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                <div className='form-container'>
                    <TextField className='forms' type='email' size="large" value={email} onChange={handleEmail} label="Email" variant="outlined" />
                    <br />
                    <br />
                    <TextField className='forms' type='text' size="large" label="title" value={title} onChange={handleTitle} variant="outlined" />
                    <br />
                    <br />
                    <TextField className='forms' type='text' size="large" label="name" value={name} onChange={handleName} variant="outlined" />
                    <br />
                    <br />
                    <TextField className='forms' type='text' size="large" label="reviews" value={reviews} onChange={handleReviews} variant="outlined" />
                    <br />
                    <br />
                    <div className='button-container'>
                        <Button>Submit</Button>
                    </div>
                </div>
            </form>
        </ReviewFormContainer>
    )
}

export default ReviewForm;