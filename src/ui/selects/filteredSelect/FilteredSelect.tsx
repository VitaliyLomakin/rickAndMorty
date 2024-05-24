import { FC } from 'react';
import { useMediaQuery } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import type { FilteredSelectProps } from './type';

const FilteredSelect: FC<FilteredSelectProps> = ({
   data,
   setData,
   arrValue,
   label,
   id,
}) => {
   const isMobile = useMediaQuery('(max-width:600px)');

   const sx = isMobile ? { width: '100%' } : { width: '23%' };

   const handleChange = (event: SelectChangeEvent) => {
      setData(event.target.value as string);
   };
   return (
      <FormControl sx={sx}>
         <InputLabel id={label}>{label}</InputLabel>
         <Select
            labelId={label}
            id={id}
            value={data}
            label={label}
            onChange={handleChange}
            placeholder={label}
         >
            {arrValue.map(el => (
               <MenuItem key={el} value={el}>
                  {el}
               </MenuItem>
            ))}
         </Select>
      </FormControl>
   );
};

export default FilteredSelect;
