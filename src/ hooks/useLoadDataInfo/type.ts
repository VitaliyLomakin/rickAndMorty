import { DocumentNode } from 'graphql';

export type useLoadDataInfoProps = {
   endpoint: DocumentNode;
   id: number | string;
};

export type LoadDataInfoResponse<T> = {
   data: T | null;
   loading: boolean;
   error: any;
   refetch: () => void;
};
