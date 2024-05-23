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
   const [charactersData, setCharactersData] = useState<CharacterType[]>(
     []
   );
   const [page, setPage] = useState(characters.page);
   const [pageFiltered, setPageFiltered] = useState(characters.filteredPage)
   const [hasMoreCharacters, setHasMoreCharacters] = useState(true);

   const vars = {
      page: characters.isFilter ? pageFiltered  : page  ,
      name: characters.isFilter && characters.filterName,
      species:  characters.isFilter && ''
    };
    endpoints = characters.isFilter ? GET_FILTERCHARACTERS : GET_CHARACTERS

   useEffect(() => {
      if(characters.filteredCharactersData.length === 0){
         setCharactersData([])
      }
      setCharactersData(characters.isFilter ? characters.filteredCharactersData : characters.charactersData);  
    }, [characters.isFilter, characters.charactersData, characters.filteredCharactersData]);
   
    const {loadMoreCharacters, error, loading } = useInfiniteLoad(endpoints, vars, setCharactersData, characters, setHasMoreCharacters,hasMoreCharacters,characters.isFilter ? setPageFiltered : setPage)

   const isCharacterLoaded = index => index < charactersData.length;

   const rowCount = Math.ceil(charactersData.length / columnCount);

   console.log(loading)

   return (
      <>
         
         <InfiniteLoader
            isItemLoaded={isCharacterLoaded}
            itemCount={
               hasMoreCharacters
                  ? charactersData.length + columnCount
                  : charactersData.length
            }
            loadMoreItems={loadMoreCharacters}
         >
            {({ onItemsRendered, ref }) => (
            <PostsInner
            columnCount={columnCount}
            columnWidth={columnWidth}
            height={800}
            rowCount={rowCount}
            widthGrid={widthGrid}
            onItemsRendered={onItemsRendered}
            reference={ref}
            data={charactersData}
         />
            )}
         </InfiniteLoader>
      </>
      
   );
});

export default CharactersPosts;