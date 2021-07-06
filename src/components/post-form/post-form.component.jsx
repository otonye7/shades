import {useState} from 'react';
import { PostFormContainer } from './post-form.styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../button/button.component';
import axios from 'axios';

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

const PostForm = () => {
    const classes = useStyles();
    const [value, setValues] = useState({
        title: '',
        price: '',
        description: '',
        image: ''
    })
    const {title, price, description, image} = value
    const [preview, setPreview] = useState('')
    
    let user = window.localStorage.getItem('auth');
    let userObj = JSON.parse(user);
    const token = userObj.token
    console.log(token)
    

    const handleSubmit = async (e) => {
        let glassData = new FormData()
        glassData.append('title', title)
        glassData.append('price', price)
        glassData.append('description', description)
        image && glassData.append('image', image)
        
        console.log([...glassData])

        try {
            let res = await axios.post(`http://localhost:8000/api/bestseller`, glassData, {
                headers: {
                    // Authorization: `Bearer ${token}`
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <PostFormContainer>
             <form className={classes.root}   noValidate autoComplete="off">
              <div className='form-container'>
                <input type='file' />
                <br />
                <TextField size="small"  label="Title" variant="outlined" />
                <br />
                <TextField type='number' size="small" label="Price"    variant="outlined" />
                <br />
                <TextField  size="large" label="Descripion"    variant="outlined" />
            </div>
            <br />
            <div className='button-container'>
               <div className='btn'>
                    <Button className='btn'>Post</Button>
               </div>
           </div>
           </form>
        </PostFormContainer>
    )
}

export default PostForm;