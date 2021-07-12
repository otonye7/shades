import {useState} from 'react';
import { PostFormContainer } from './new-arrival-form.styles';
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

const NewArrivalForm = () => {
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
    const token = userObj.token;
    

    const handleSubmit = async (e) => {
        let glassData = new FormData()
        glassData.append('title', title)
        glassData.append('price', price)
        glassData.append('description', description)
        image && glassData.append('image', image)
        
        console.log([...glassData])

        try {
            let res = await axios.post(`http://localhost:8000/api/create-new-arrival`, glassData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (err) {
            console.log(err)
            alert("Image failed to save");
        }
    }

    const handleImageChange = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]))
        setValues({...value, image: e.target.files[0]})
    }

    const handleChange = (e) => {
        setValues({...value, [e.target.name]: e.target.value})
    }

    return (
        <PostFormContainer>
             <form className={classes.root} onSubmit={handleSubmit}  noValidate autoComplete="off">
              <div className='form-container'>
                <input name='image' type='file' onChange={handleImageChange} />
                <br />
                <TextField onChange={handleChange} name='title' size="small"  label="Title" variant="outlined" />
                <br />
                <TextField onChange={handleChange} name='price' type='number' size="small" label="Price"    variant="outlined" />
                <br />
                <TextField onChange={handleChange} name='description' size="large" label="Descripion"    variant="outlined" />
            </div>
            <br />
            <div className='button-container'>
               <img src={preview} alt="preview_image" className='img img-fluid m-2'/>
                <pre>{JSON.stringify(value)}</pre>
               <div className='btn'>
                    <Button className='btn'>Post</Button>
               </div>
           </div>
           </form>
        </PostFormContainer>
    )
}

export default NewArrivalForm;