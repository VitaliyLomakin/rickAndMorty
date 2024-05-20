import {FC} from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import { Cell } from '../cell/Cell';

import type { PostsInnerProps } from './type';


const PostsInner:FC<PostsInnerProps> = ({columnCount, columnWidth,height, rowCount ,widthGrid, onItemsRendered ,reference, data  }) => {
    return (
        <Grid
               style={{
                  overflowX: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
               columnCount={columnCount}
               columnWidth={columnWidth}
               height={height}
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
               ref={reference}
            >
               {({ columnIndex, rowIndex, style }) => (
            <Cell
               columnIndex={columnIndex}
               rowIndex={rowIndex}
               style={style}
               columnCount={columnCount}
               data={data}
            />
         )}
            </Grid>
    );
}

export default PostsInner;
