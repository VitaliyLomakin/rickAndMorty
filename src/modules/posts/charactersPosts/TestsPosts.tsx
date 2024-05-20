// import React, { useState, useEffect, useCallback } from 'react';
// import { FixedSizeGrid as Grid } from 'react-window';
// import { useQuery } from '@apollo/client';
// import { useStores } from '../../../context/root-store-context';
// import InfiniteLoader from 'react-window-infinite-loader';
// import CharactersCard from '../../../ui/cards/charactersCard/charactersCard';
// import { GET_CHARACTERS } from '../components/api/queryCharacters';
// import { observer } from 'mobx-react-lite';

// const columnCount = 4;

// const TestPosts = observer(() => {
  
//   const { characters } = useStores();

//   const [charactersData, setCharactersData] = useState(characters.charactersData ? characters.charactersData :  []  );
//   const [page, setPage] = useState(characters.page);
//   const [hasMoreCharacters, setHasMoreCharacters] = useState(true);

// console.log(characters.page)

//   const { data, loading, error } = useQuery(GET_CHARACTERS, {
//     variables: { page },
//     fetchPolicy: 'cache-first',
//   });



//   useEffect(() => {
  
//     if (data && data.characters && data.characters.results.length > 0) {
          
//       const newCharacters = data.characters.results;
//       setCharactersData(prevCharacters => [...prevCharacters, ...newCharacters]);
//       characters.loadPosts(newCharacters)
//       setHasMoreCharacters(data.characters.info.next !== null);
//     }
//   }, [data]);



//   const loadMoreCharacters = useCallback(async () => {
//     if (loading || !hasMoreCharacters) return;
//     setPage(prevPage => prevPage + 1);
//   }, [loading, hasMoreCharacters]);

//   const isCharacterLoaded = index => index < charactersData.length;

//   const Cell = ({ columnIndex, rowIndex, style }) => {
//     const itemIndex = rowIndex * columnCount + columnIndex;
//     const item = charactersData[itemIndex];

//     return (
//       <div style={{ ...style, padding: '10px', boxSizing: 'border-box' }}>
//         {item.id}
//         {item ? <CharactersCard id={item.id} name={item.name} image={item.image} /> : 'Loading...'}
//       </div>
//     );
//   };

//   const rowCount = Math.ceil(charactersData.length / columnCount);

//   return (
//     <InfiniteLoader
//       isItemLoaded={isCharacterLoaded}
//       itemCount={hasMoreCharacters ? charactersData.length + columnCount : charactersData.length}
//       loadMoreItems={loadMoreCharacters}
//     >
//       {({ onItemsRendered, ref }) => (
//         <Grid
//           style={{ overflowX: 'hidden', background: 'red' }}
//           className="inner"
//           columnCount={columnCount}
//           columnWidth={260}
//           height={800}
//           rowCount={rowCount}
//           rowHeight={300}
//           width={1040}
//           onItemsRendered={({ visibleRowStartIndex, visibleRowStopIndex }) =>
//             onItemsRendered({
//               overscanStartIndex: visibleRowStartIndex * columnCount,
//               overscanStopIndex: visibleRowStopIndex * columnCount + columnCount,
//               visibleStartIndex: visibleRowStartIndex * columnCount,
//               visibleStopIndex: visibleRowStopIndex * columnCount + columnCount,
//             })
//           }
//           ref={ref}
//         >
//           {Cell}
//         </Grid>
//       )}
//     </InfiniteLoader>
//   );
// });

// export default TestPosts;
