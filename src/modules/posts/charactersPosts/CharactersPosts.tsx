import { useState} from 'react';

import { useStores } from '../../../context/root-store-context';
import { useInfiniteLoad } from '../../../ hooks/useInfiniteLoad/useInfiniteLoad';

import InfiniteLoader from 'react-window-infinite-loader';

import PostsInner from '../components/postsInner/PostsInner';

import { observer } from 'mobx-react-lite';
import { getGridSettings } from '../../../utils/functions/getGridSettings';

import { GET_CHARACTERS } from '../components/api/queryCharacters';

import type {
   CharacterType,
   CharactersData,
   CharactersVars,
} from '../../../types/characters/charactersType';

const { widthGrid, columnCount, columnWidth } = getGridSettings(window.innerWidth);

const CharactersPosts = observer(() => {
   const { characters } = useStores();

   const [charactersData, setCharactersData] = useState<CharacterType[]>(
      characters.charactersData ? characters.charactersData : [],
   );
   const [page, setPage] = useState(characters.page);
   const [hasMoreCharacters, setHasMoreCharacters] = useState(true);

   const {loadMoreCharacters } = useInfiniteLoad(GET_CHARACTERS, page, setCharactersData, characters, setHasMoreCharacters,hasMoreCharacters,setPage)

   const isCharacterLoaded = index => index < charactersData.length;

   const rowCount = Math.ceil(charactersData.length / columnCount);

   return (
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
   );
});

export default CharactersPosts;
