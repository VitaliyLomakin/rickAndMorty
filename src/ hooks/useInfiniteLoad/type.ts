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

export type UseInfiniteLoadReturn = {
   data: CharacterInfoType;
   loading: boolean;
   error: ApolloError | undefined;
   loadMoreCharacters: () => void;
   refetch: (
      variables?: Partial<OperationVariables>,
   ) => Promise<OperationVariables>;
};
