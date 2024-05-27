import { DocumentNode } from '@apollo/client';
import { CharacterStoreType } from '../../stores/charactes-store';
import { ApolloError, OperationVariables } from '@apollo/client';
import type { CharacterInfoType } from '../../types/characters/charactersType';

type VarsType = Record<string, any>;

export type UseInfiniteLoadProps = {
   endpoint: DocumentNode;
   vars: VarsType; // так как тут много вариантов от просто page для скролла, до фильтрации
   storeData: CharacterStoreType;
};

export type UseInfiniteLoadReturn<T> = {
   data: CharacterInfoType; // Тут необходимо определить тип данных
   loading: boolean;
   error: ApolloError | undefined; // ApolloError необходимо импортировать из @apollo/client
   loadMoreCharacters: () => void;
   refetch: (
      variables?: Partial<OperationVariables>,
   ) => Promise<CharacterInfoType>;
};

// data: any; // Тут необходимо определить тип данных
// loading: boolean;
// error: ApolloError | undefined; // ApolloError необходимо импортировать из @apollo/client
// loadMoreCharacters: () => void;
// refetch: (variables?: Partial<OperationVariables>) => Promise<any>;
