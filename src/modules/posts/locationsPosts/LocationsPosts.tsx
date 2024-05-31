import { useEffect, useState } from 'react';
import { useInfiniteLoad } from '../../../ hooks/useInfiniteLoad/useInfiniteLoad';
import InfiniteLoader from 'react-window-infinite-loader';
import PostsInner from '../components/postsInner/PostsInner';
import LocationsCard from '../../../ui/cards/locationsCard/LocationsCard';
import Loader from '../../../ui/loader/Loader';
import ErrorBlock from '../../../ui/errorBlock/ErrorBlock';
import LoaderBox from '../../../ui/loaderBox/LoaderBox';
import NotDataFiltered from '../../../ui/notDataFiltered/NotDataFiltered';
import { observer } from 'mobx-react-lite';
import { getGridSettings } from '../../../utils/functions/getGridSettings';
import { GET_LOCATIONS } from '../../../schemas/locations/query/getLocations';
import { GET_FILTERED_LOCATIONS } from '../../../schemas/locations/query/getFilteredLocations';

import type { LocationType } from '../../../types/locations/locationsType';

import { rootStore } from '../../../stores/rootStore';

const { widthGrid, columnCount, columnWidth, isMobileGridSettings } =
   getGridSettings(window.innerWidth);

const rowHeight = 148;
const rowHeightMobile = 148;

const LocationsPosts = observer(() => {
   const {
      locationsData,
      setLocationsData,
      setPage,
      isFilter,
      type,
      dimension,
      page,
      filterName,
   } = rootStore.locations;

   const [hasMore, setHasMore] = useState(true);

   const vars = {
      page: page,
      name: isFilter ? filterName : '',
      type: type !== '' ? type : undefined,
      dimension: dimension !== '' ? dimension : undefined,
   };

   const endpoint = isFilter ? GET_FILTERED_LOCATIONS : GET_LOCATIONS;

   useEffect(() => {
      return () => {
         setPage(1);
         setLocationsData([]);
      };
   }, [setPage, setLocationsData, filterName, type, dimension, isFilter]);

   const isDataLoaded = index => index < locationsData.length;
   const rowCount = Math.ceil(locationsData.length / columnCount);

   const { loadMoreData, error, loading, refetch } = useInfiniteLoad({
      nameEndpoint: 'locations',
      endpoint,
      vars,
      storeData: rootStore.locations,
      hasMore,
      setHasMore,
   });

   return (
      <>
         {error && (
            <ErrorBlock
               message={error.message}
               name={error.name}
               refetch={refetch}
            />
         )}
         {!error && !loading && isFilter && locationsData.length === 0 && (
            <NotDataFiltered dataName="locations" desc="try something else(" />
         )}
         <InfiniteLoader
            isItemLoaded={isDataLoaded}
            itemCount={locationsData.length * 2}
            loadMoreItems={loadMoreData}
         >
            {({ onItemsRendered, ref }) => (
               <PostsInner<LocationType>
                  columnCount={columnCount}
                  columnWidth={columnWidth}
                  height={600}
                  rowCount={rowCount}
                  widthGrid={widthGrid}
                  onItemsRendered={onItemsRendered}
                  reference={ref}
                  data={locationsData}
                  Component={LocationsCard}
                  rowHeight={rowHeight}
                  rowHeightMobile={rowHeightMobile}
                  isMobileGridSettings={isMobileGridSettings}
               />
            )}
         </InfiniteLoader>
         <LoaderBox height={50}>{loading && <Loader />}</LoaderBox>
      </>
   );
});

export default LocationsPosts;
