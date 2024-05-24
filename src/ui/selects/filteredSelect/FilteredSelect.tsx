import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import type { FilteredSelectProps } from './type';


const FilteredSelect:FC<FilteredSelectProps>= ({data ,setData, arrValue, label, id}) => {

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value as string);
  };
    return (
        <FormControl >
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          id={id}
          value={data}
          label={label}
          onChange={handleChange}
        >
          {
            arrValue.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)
          }
        </Select>
      </FormControl>
    );
}

export default FilteredSelect;
