import { ChangeEvent, FC } from 'react';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { FilterPostsInputProps } from './type';

const FilterPostsInputImg = {
   width: '24',
   height: '24',
   marginRight: '8px',
};

const FilterPostsInput: FC<FilterPostsInputProps> = ({
   value,
   setValue,
   placeholder,
   id,
   width,
}) => {
   const isMobile = useMediaQuery('(max-width:600px)');

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };
   // все инпуты разной длины, а на мобилке на всю ширину
   return (
      <TextField
         sx={{ width: isMobile ? '100%' : width }}
         onChange={onChange}
         fullWidth
         id={id}
         value={value}
         placeholder={placeholder}
         variant="outlined"
         InputProps={{
            startAdornment: (
               <img
                  src="/image/search.svg"
                  alt="search icon"
                  style={FilterPostsInputImg}
               />
            ),
         }}
      />
   );
};

export default FilterPostsInput;
