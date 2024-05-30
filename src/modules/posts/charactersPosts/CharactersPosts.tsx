import { useEffect, useState } from 'react';
import { useInfiniteLoad } from '../../../ hooks/useInfiniteLoad/useInfiniteLoad';
import InfiniteLoader from 'react-window-infinite-loader';
import PostsInner from '../components/postsInner/PostsInner';
import CharactersCard from '../../../ui/cards/charactersCard/charactersCard';
import Loader from '../../../ui/loader/Loader';
import LoaderBox from '../../../ui/loaderBox/LoaderBox';
import NotDataFiltered from '../../../ui/notDataFiltered/NotDataFiltered';
import ErrorBlock from '../../../ui/errorBlock/ErrorBlock';
import { observer } from 'mobx-react-lite';
import { getGridSettings } from '../../../utils/functions/getGridSettings';
import { GET_CHARACTERS } from '../../../schemas/characters/query/getCharacters';
import { GET_FILTERED_CHARACTERS } from '../../../schemas/characters/query/getFilteredCharacters';

import type { CharacterType } from '../../../types/characters/charactersType';

import { rootStore } from '../../../stores/rootStore';

const { widthGrid, columnCount, columnWidth, isMobileGridSettings } =
   getGridSettings(window.innerWidth);

let rowHeight = 290;
let rowHeightMobile = 326;

const CharactersPosts = observer(() => {
   const {
      charactersData,
      page,
      isFilter,
      species,
      gender,
      status,
      filterName,
      setPage,
      setCharactersData,
   } = rootStore.characters;

   const [hasMore, setHasMore] = useState(true);

   const vars = {
      page: page,
      name: isFilter ? filterName : '',
      species: species !== '' ? species : undefined,
      gender: gender !== '' ? gender : undefined,
      status: status !== '' ? status : undefined,
   };

   const endpoint = isFilter ? GET_FILTERED_CHARACTERS : GET_CHARACTERS;

   useEffect(() => {
      return () => {
         setPage(1);
         setCharactersData([]);
      };
   }, [isFilter, filterName, gender, status, species, rootStore.characters]);

   const isCharacterLoaded = index => index < charactersData.length;
   const rowCount = Math.ceil(charactersData.length / columnCount);

   const { loadMoreData, error, loading, refetch } = useInfiniteLoad({
      nameEndpoint: 'characters',
      endpoint,
      vars,
      storeData: rootStore.characters,
      hasMore,
      setHasMore,
   });

   useEffect(() => {
      console.log(error);

      if (error) {
         console.error(error, 'err');
      }
   }, [error, loadMoreData, refetch]);

   return (
      <>
         {error && (
            <ErrorBlock
               message={error.message}
               name={error.name}
               refetch={loadMoreData}
            />
         )}
         {!error && !loading && isFilter && charactersData.length === 0 && (
            <NotDataFiltered dataName="characters" desc="try something else(" />
         )}
         <InfiniteLoader
            isItemLoaded={isCharacterLoaded}
            itemCount={charactersData.length * 2}
            loadMoreItems={loadMoreData}
         >
            {({ onItemsRendered, ref }) => (
               <PostsInner<CharacterType>
                  columnCount={columnCount}
                  columnWidth={columnWidth}
                  height={600}
                  rowCount={rowCount}
                  widthGrid={widthGrid}
                  onItemsRendered={onItemsRendered}
                  reference={ref}
                  data={charactersData}
                  Component={CharactersCard}
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

export default CharactersPosts;
