import { ChangeEvent, FC } from 'react';
import TextField from '@mui/material/TextField';
import { useMediaQuery } from '@mui/material';
import type { FilterPostsInputProps } from './type';

const FilterPostsInput: FC<FilterPostsInputProps> = ({
   value,
   setValue,
   placeholder,
   id,
   width,
}) => {
   const isMobile = useMediaQuery('(max-width:600px)');

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value as string);
   };
   return (
      <>
         <TextField
            onChange={onChange}
            style={{ maxWidth: !isMobile && width, width: '100%' }}
            id={id}
            value={value}
            placeholder={placeholder}
            variant="outlined"
            InputProps={{
               startAdornment: (
                  <img
                     src="/image/search.svg"
                     alt="search icon"
                     style={{ width: 24, height: 24, marginRight: '8px' }}
                  />
               ),
            }}
         />
      </>
   );
};

export default FilterPostsInput;
