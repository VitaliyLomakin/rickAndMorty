import { useEffect, useState } from 'react';
import { useInfiniteLoad } from '../../../ hooks/useInfiniteLoad/useInfiniteLoad';

import InfiniteLoader from 'react-window-infinite-loader';
import PostsInner from '../components/postsInner/PostsInner';
import EpisodesCard from '../../../ui/cards/episodesCard/EpisodesCard';
import Loader from '../../../ui/loader/Loader';
import ErrorBlock from '../../../ui/errorBlock/ErrorBlock';
import NotDataFiltered from '../../../ui/notDataFiltered/NotDataFiltered';
import LoaderBox from '../../../ui/loaderBox/LoaderBox';

import { observer } from 'mobx-react-lite';
import { getGridSettings } from '../../../utils/functions/getGridSettings';
import { GET_EPISODES } from '../../../schemas/episodes/query/getEpisodes';
import { GET_FILTERED_EPISODES } from '../../../schemas/episodes/query/getFilteredEpisodes';

import type { EpisodeType } from '../../../types/episodes/episodesType';

import { rootStore } from '../../../stores/rootStore';

const { widthGrid, columnCount, columnWidth, isMobileGridSettings } =
   getGridSettings(window.innerWidth);

const rowHeight = 168;
const rowHeightMobile = 168;

const EpisodesPosts = observer(() => {
   const {
      episodesData,
      page,
      filterName,
      isFilter,
      setPage,
      setEpisodesData,
   } = rootStore.episodes;

   const [hasMore, setHasMore] = useState(true);
   const vars = {
      page: page,
      name: isFilter ? filterName : '',
   };

   const endpoint = isFilter ? GET_FILTERED_EPISODES : GET_EPISODES;

   useEffect(() => {
      return () => {
         setPage(1);
         setEpisodesData([]);
      };
   }, [setPage, setEpisodesData, isFilter, filterName]);

   const isDataLoaded = index => index < episodesData.length;
   const rowCount = Math.ceil(episodesData.length / columnCount);

   const { loadMoreData, error, loading, refetch } = useInfiniteLoad({
      nameEndpoint: 'episodes',
      endpoint,
      vars,
      storeData: rootStore.episodes,
      setHasMore,
      hasMore,
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
         {!error && !loading && isFilter && episodesData.length === 0 && (
            <NotDataFiltered dataName="episodes" desc="try something else(" />
         )}
         <InfiniteLoader
            isItemLoaded={isDataLoaded}
            itemCount={episodesData.length * 2}
            loadMoreItems={loadMoreData}
         >
            {({ onItemsRendered, ref }) => (
               <PostsInner<EpisodeType>
                  columnCount={columnCount}
                  columnWidth={columnWidth}
                  height={600}
                  rowCount={rowCount}
                  widthGrid={widthGrid}
                  onItemsRendered={onItemsRendered}
                  reference={ref}
                  data={episodesData}
                  Component={EpisodesCard}
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

export default EpisodesPosts;
