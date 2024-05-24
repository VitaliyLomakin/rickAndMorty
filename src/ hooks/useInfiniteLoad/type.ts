import { DocumentNode } from '@apollo/client';

export type UseInfiniteLoadProps<T> = {
   endpoint: DocumentNode;
   page: number;
   setData: React.Dispatch<React.SetStateAction<T[]>>;
   storeData: any;
   setHasMoreData: React.Dispatch<React.SetStateAction<boolean>>;
   hasMoreData: boolean;
   setPage: React.Dispatch<React.SetStateAction<number>>;
};

export type UseInfiniteLoadReturn<T> = {
   data: T | undefined;
   loading: boolean;
   error: any;
   loadMoreCharacters: () => void;
};
