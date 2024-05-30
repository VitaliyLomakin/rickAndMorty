import { Dispatch, SetStateAction } from 'react';

export type FilteredSelectProps = {
   data: string;
   setData: Dispatch<SetStateAction<string>>;
   arrValue: string[];
   label: string;
   id: string;
};
