import { Dispatch, SetStateAction } from 'react';

export type FilterPostsInputProps = {
   value: string;
   setValue: Dispatch<SetStateAction<string>>;
   placeholder: string;
   id: string;
   width?: string | number;
};
