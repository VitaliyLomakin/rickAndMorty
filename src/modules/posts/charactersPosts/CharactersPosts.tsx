import { useEffect } from 'react';
import { useStores } from '../../../context/root-store-context';
import { useInfiniteLoad } from '../../../ hooks/useInfiniteLoad/useInfiniteLoad';
import InfiniteLoader from 'react-window-infinite-loader';
import PostsInner from '../components/postsInner/PostsInner';
import CharactersCard from '../../../ui/cards/charactersCard/charactersCard';
import Loader from '../../../ui/loader/Loader';
import LoaderBox from '../../../ui/loaderBox/LoaderBox';
import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { getGridSettings } from '../../../utils/functions/getGridSettings';
import { GET_CHARACTERS } from '../../../schemas/characters/query/getCharacters';
import { GET_FILTERED_CHARACTERS } from '../../../schemas/characters/query/getFilteredCharacters';

import type { CharacterType } from '../../../types/characters/charactersType';

const { widthGrid, columnCount, columnWidth, isMobileGridSettings } =
   getGridSettings(window.innerWidth);

let rowHeight = 290;
let rowHeightMobile = 326;

const CharactersPosts = observer(() => {
   const { characters } = useStores();

   const vars = {
      page: characters.page,
      name: characters.isFilter ? characters.filterName : '',
      species: characters.species !== '' ? characters.species : undefined,
      gender: characters.gender !== '' ? characters.gender : undefined,
      status: characters.status !== '' ? characters.status : undefined,
   };

   const endpoint = characters.isFilter
      ? GET_FILTERED_CHARACTERS
      : GET_CHARACTERS;

   useEffect(() => {
      characters.setPage(1);
      characters.setCharactersData([]);

      return () => {
         characters.setPage(1);
         characters.setCharactersData([]);
      };
   }, [
      characters.isFilter,
      characters.filterName,
      characters.gender,
      characters.status,
      characters.species,
      characters,
   ]);

   const isCharacterLoaded = index => index < characters.charactersData.length;
   const rowCount = Math.ceil(characters.charactersData.length / columnCount);

   const { loadMoreData, error, loading, refetch } = useInfiniteLoad({
      nameEndpoint: 'characters',
      endpoint,
      vars,
      storeData: characters,
   });

   useEffect(() => {
      console.log(error);

      if (error) {
         console.error(error, 'err');
         refetch();
         loadMoreData();
      }
   }, [error, loadMoreData, refetch]);

   return (
      <>
         <InfiniteLoader
            isItemLoaded={isCharacterLoaded}
            itemCount={characters.charactersData.length * 2}
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
                  data={characters.charactersData}
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
