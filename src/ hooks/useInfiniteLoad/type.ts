import { DocumentNode } from '@apollo/client';
import { CharacterStoreType } from '../../stores/charactes-store';
import { ApolloError, OperationVariables } from '@apollo/client';
import type { CharacterInfoType } from '../../types/characters/charactersType';
import type { LocationsStoreStoreType } from '../../stores/locations-store';
import type { EpisodesStoreType } from '../../stores/episodes-store';
import { Dispatch, SetStateAction } from 'react';

type VarsType = Record<string, unknown>;

export type UseInfiniteLoadProps = {
   nameEndpoint: string;
   endpoint: DocumentNode;
   vars: VarsType; // так как тут много вариантов от просто page для скролла, до фильтрации
   storeData: CharacterStoreType | LocationsStoreStoreType | EpisodesStoreType;
   setHasMore: Dispatch<SetStateAction<boolean>>;
   hasMore: boolean;
};

export type UseInfiniteLoadReturn = {
   data: CharacterInfoType;
   loading: boolean;
   error: ApolloError | undefined;
   loadMoreData: () => void;
   refetch: (
      variables?: Partial<OperationVariables>,
   ) => Promise<OperationVariables>;
};
