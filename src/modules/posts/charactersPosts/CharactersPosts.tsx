import { useEffect } from 'react';
import { useStores } from '../../../context/root-store-context';
import { useInfiniteLoad } from '../../../ hooks/useInfiniteLoad/useInfiniteLoad';
import InfiniteLoader from 'react-window-infinite-loader';
import PostsInner from '../components/postsInner/PostsInner';
import { observer } from 'mobx-react-lite';
import { getGridSettings } from '../../../utils/functions/getGridSettings';
import { GET_CHARACTERS } from '../../../schemas/characters/query/getCharacters';
import { GET_FILTERCHARACTERS } from '../../../schemas/characters/query/getFilteredCharacters';

const { widthGrid, columnCount, columnWidth } = getGridSettings(
   window.innerWidth,
);

const CharactersPosts = observer(() => {
   const { characters } = useStores();

   const vars = {
      page: characters.page,
      name: characters.isFilter ? characters.filterName : '',
      species:
         characters.species !== 'null' && characters.species !== ''
            ? characters.species
            : undefined,
      gender:
         characters.gender !== 'null' && characters.gender !== ''
            ? characters.gender
            : undefined,
      status:
         characters.status !== 'null' && characters.status !== ''
            ? characters.status
            : undefined,
   };

   const endpoint = characters.isFilter ? GET_FILTERCHARACTERS : GET_CHARACTERS;

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

   const { loadMoreCharacters, error, loading, data, refetch } =
      useInfiniteLoad({
         endpoint,
         vars,
         storeData: characters,
      });

   useEffect(() => {
      console.log(error);

      if (error) {
         console.error(error, 'err');
         refetch();
         loadMoreCharacters();
      }
   }, [error, data, loading, loadMoreCharacters]);

   return (
      <>
         <InfiniteLoader
            isItemLoaded={isCharacterLoaded}
            itemCount={characters.charactersData.length * 2}
            loadMoreItems={loadMoreCharacters}
         >
            {({ onItemsRendered, ref }) => (
               <PostsInner
                  columnCount={columnCount}
                  columnWidth={columnWidth}
                  height={600}
                  rowCount={rowCount}
                  widthGrid={widthGrid}
                  onItemsRendered={onItemsRendered}
                  reference={ref}
                  data={characters.charactersData}
               />
            )}
         </InfiniteLoader>
         {loading && 'load...'}
      </>
   );
});

export default CharactersPosts;
