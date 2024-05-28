import { useQuery } from '@apollo/client';

import type { useLoadDataInfoProps } from './type';
import type { LoadDataInfoResponse } from './type';

export const useLoadDataInfo = <T>({
   endpoint,
   id,
}: useLoadDataInfoProps): LoadDataInfoResponse<T> => {
   const { data, loading, error, refetch } = useQuery(endpoint, {
      variables: { id },
      fetchPolicy: 'cache-first',
   });

   return { data, loading, error, refetch };
};
