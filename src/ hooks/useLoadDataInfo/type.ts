import { DocumentNode } from 'graphql';
import { ApolloError } from '@apollo/client';

export type useLoadDataInfoProps = {
   endpoint: DocumentNode;
   id: number | string;
};

export type LoadDataInfoResponse<T> = {
   data: T | null;
   loading: boolean;
   error: ApolloError | undefined;
   refetch: () => void;
};
