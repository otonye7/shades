import { QuestionFormContainer } from './question-form.styles';
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

const QuestionsForm = ({ handleQuestionsSubmit, question, handleQuestions }) => {
    const classes = useStyles();
    return (
        <QuestionFormContainer>
            <form className={classes.root} onSubmit={handleQuestionsSubmit} noValidate autoComplete="off">
                <div className='form-container'>
                    <TextField className='forms' type='text' size="large" value={question} onChange={handleQuestions} label="Ask Question ?" variant="outlined" />
                    <br />
                    <br />
                    <div className='button-container'>
                        <Button>Submit</Button>
                    </div>
                </div>
            </form>
        </QuestionFormContainer>
    )
}

export default QuestionsForm;