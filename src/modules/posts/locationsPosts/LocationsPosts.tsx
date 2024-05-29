import { useEffect, useState } from 'react';
import { useStores } from '../../../context/root-store-context';
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

const { widthGrid, columnCount, columnWidth, isMobileGridSettings } =
   getGridSettings(window.innerWidth);

let rowHeight = 148;
let rowHeightMobile = 148;

const LocationsPosts = observer(() => {
   const { locations } = useStores();
   const [hasMore, setHasMore] = useState(true);

   const vars = {
      page: locations.page,
      name: locations.isFilter ? locations.filterName : '',
      type: locations.type !== '' ? locations.type : undefined,
      dimension: locations.dimension !== '' ? locations.dimension : undefined,
   };

   const endpoint = locations.isFilter ? GET_FILTERED_LOCATIONS : GET_LOCATIONS;

   useEffect(() => {
      locations.setPage(1);
      locations.setLocationsData([]);

      return () => {
         locations.setPage(1);
         locations.setLocationsData([]);
      };
   }, [
      locations.isFilter,
      locations.filterName,
      locations.dimension,
      locations.type,
      locations,
   ]);

   const isDataLoaded = index => index < locations.locationsData.length;
   const rowCount = Math.ceil(locations.locationsData.length / columnCount);

   const { loadMoreData, error, loading, refetch } = useInfiniteLoad({
      nameEndpoint: 'locations',
      endpoint,
      vars,
      storeData: locations,
      hasMore,
      setHasMore,
   });
   console.log(locations.locationsData.length);

   return (
      <>
         {error && (
            <ErrorBlock
               message={error.message}
               name={error.name}
               refetch={refetch}
            />
         )}
         {!error &&
            loading &&
            locations.isFilter &&
            locations.locationsData.length === 0 && (
               <NotDataFiltered
                  dataName="locations"
                  desc="try something else("
               />
            )}
         <InfiniteLoader
            isItemLoaded={isDataLoaded}
            itemCount={locations.locationsData.length * 2}
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
                  data={locations.locationsData}
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
