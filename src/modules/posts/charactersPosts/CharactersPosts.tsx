import { useState, useEffect, useCallback } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import { useQuery } from '@apollo/client';
import { useStores } from '../../../context/root-store-context';
import InfiniteLoader from 'react-window-infinite-loader';
import CharactersCard from '../../../ui/cards/charactersCard/charactersCard';
import { GET_CHARACTERS } from '../components/api/queryCharacters';
import { observer } from 'mobx-react-lite';

import { getGridSettings } from '../../../utils/functions/getGridSettings';

import type {
   CharacterType,
   CharactersData,
   CharactersVars,
} from '../../../types/characters/charactersType';

const screenWidth = window.innerWidth;

const { widthGrid, columnCount, columnWidth } = getGridSettings(screenWidth);

const CharactersPosts = observer(() => {
   const { characters } = useStores();

   const [charactersData, setCharactersData] = useState<CharacterType[]>(
      characters.charactersData ? characters.charactersData : [],
   );
   const [page, setPage] = useState(characters.page);
   const [hasMoreCharacters, setHasMoreCharacters] = useState(true);

   const { data, loading, error } = useQuery<CharactersData, CharactersVars>(
      GET_CHARACTERS,
      {
         variables: { page },
         fetchPolicy: 'cache-first',
      },
   );

   useEffect(() => {
      if (data && data.characters && data.characters.results.length > 0) {
         const newCharacters = data.characters.results;
         setCharactersData(prevCharacters => [
            ...prevCharacters,
            ...newCharacters,
         ]);
         characters.loadPosts(newCharacters);
         setHasMoreCharacters(data.characters.info.next !== null);
      }
   }, [data]);

   const loadMoreCharacters = useCallback(async () => {
      if (loading || !hasMoreCharacters) return;
      setPage(prevPage => prevPage + 1);
   }, [loading, hasMoreCharacters]);

   const isCharacterLoaded = index => index < charactersData.length;

   const Cell = ({ columnIndex, rowIndex, style }) => {
      const itemIndex = rowIndex * columnCount + columnIndex;
      const item = charactersData[itemIndex];

      const cellStyle = {
         ...style,
         padding: '10px',
         boxSizing: 'border-box',
         width: '100%',
         display: columnCount === 1 && 'flex',
         justifyContent: columnCount === 1 && 'center',
         alignItems: columnCount === 1 && 'center',
      };

      return (
         <div style={cellStyle}>
            {item ? (
               <CharactersCard
                  id={item.id}
                  style={style}
                  species={item.species}
                  name={item.name}
                  image={item.image}
               />
            ) : (
               'Loading...'
            )}
         </div>
      );
   };

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
            <Grid
               style={{
                  overflowX: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
               columnCount={columnCount}
               columnWidth={columnWidth}
               height={800}
               rowCount={rowCount}
               rowHeight={columnCount === 1 ? 326 : 290}
               width={widthGrid}
               onItemsRendered={({
                  visibleRowStartIndex,
                  visibleRowStopIndex,
               }) =>
                  onItemsRendered({
                     overscanStartIndex: visibleRowStartIndex * columnCount,
                     overscanStopIndex:
                        visibleRowStopIndex * columnCount + columnCount,
                     visibleStartIndex: visibleRowStartIndex * columnCount,
                     visibleStopIndex:
                        visibleRowStopIndex * columnCount + columnCount,
                  })
               }
               ref={ref}
            >
               {Cell}
            </Grid>
         )}
      </InfiniteLoader>
   );
});

export default CharactersPosts;
