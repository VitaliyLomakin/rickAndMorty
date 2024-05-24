import  { ChangeEvent} from 'react';
import TextField from '@mui/material/TextField';
import { useMediaQuery } from '@mui/material';

const FilterPostsInput = ({value, setValue, placeholder, id}) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    const sx = isMobile
      ? { width: '100%' }
      : { width: '23%' }; 
    

    const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value as string)
     }
    return (
        <>
            <TextField sx={sx} onChange={onChange} id="outlined-basic" value={value} label={placeholder} variant="outlined" />
        </>
    );
}

export default FilterPostsInput;
