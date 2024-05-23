import { useState, useEffect} from 'react';

import { useStores } from '../../../context/root-store-context';
import { useInfiniteLoad } from '../../../ hooks/useInfiniteLoad/useInfiniteLoad';

import InfiniteLoader from 'react-window-infinite-loader';
import PostsInner from '../components/postsInner/PostsInner';

import { observer } from 'mobx-react-lite';
import { getGridSettings } from '../../../utils/functions/getGridSettings';

import type {CharacterType} from '../../../types/characters/charactersType';

import { GET_CHARACTERS } from '../../../schemas/characters/query/getCharacters';
import { GET_FILTERCHARACTERS } from '../../../schemas/characters/query/getFilteredCharacters';

let endpoints = GET_CHARACTERS

const { widthGrid, columnCount, columnWidth } = getGridSettings(window.innerWidth);
const CharactersPosts = observer(() => {

   const { characters } = useStores();

   const [hasMoreCharacters, setHasMoreCharacters] = useState(true);

   const vars = {
      page: characters.page,
      name: characters.isFilter && characters.filterName,
   
   };

   endpoints = characters.isFilter ? GET_FILTERCHARACTERS : GET_CHARACTERS

   useEffect(() => {
      console.log('useEf')
     
         characters.setPage(1)
         characters.setCharactersData([])
        
      
   }, [characters.isFilter, characters.filterName]);
   
    const {loadMoreCharacters, error, loading } = useInfiniteLoad(endpoints, vars, characters, 
      setHasMoreCharacters,hasMoreCharacters)

   const isCharacterLoaded = index => index < characters.charactersData.length;

   const rowCount = Math.ceil(characters.charactersData.length / columnCount);


   return (
      <>
         {characters.charactersData.length}==={characters.page} 
         <InfiniteLoader
            isItemLoaded={isCharacterLoaded}
            itemCount={
               hasMoreCharacters
                  ? characters.charactersData.length + columnCount
                  : characters.charactersData.length
            }
            loadMoreItems={loadMoreCharacters}
         >
            {({ onItemsRendered, ref }) => (
            <PostsInner
            columnCount={columnCount}
            columnWidth={columnWidth}
            height={1000}
            rowCount={rowCount}
            widthGrid={widthGrid}
            onItemsRendered={onItemsRendered}
            reference={ref}
            data={characters.charactersData}
         />
            )}
         </InfiniteLoader>
      </>
      
   );
});

export default CharactersPosts;