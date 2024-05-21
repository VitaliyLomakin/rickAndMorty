import  { ChangeEvent} from 'react';
import TextField from '@mui/material/TextField';

const FilterPostsInput = ({value, setValue, placeholder, id}) => {
    

    const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value as string)
     }
    return (
        <>
            <TextField onChange={onChange} id="outlined-basic" value={value} label={placeholder} variant="outlined" />
        </>
    );
}

export default FilterPostsInput;
