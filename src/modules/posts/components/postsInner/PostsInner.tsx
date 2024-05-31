import { FixedSizeGrid as Grid } from 'react-window';
import { Cell } from '../cell/Cell';
import { PostsInnerProps } from './type';

const PostsInner = <T,>({
   columnCount,
   columnWidth,
   height,
   rowCount,
   widthGrid,
   onItemsRendered,
   reference,
   data,
   Component,
   rowHeight,
   rowHeightMobile,
   isMobileGridSettings,
}: PostsInnerProps<T>) => {
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
         rowHeight={isMobileGridSettings ? rowHeightMobile : rowHeight}
         width={widthGrid}
         onItemsRendered={({ visibleRowStartIndex, visibleRowStopIndex }) =>
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
            <Cell<T>
               columnCount={columnCount}
               data={data}
               columnIndex={columnIndex}
               rowIndex={rowIndex}
               style={style}
               Component={Component}
            />
         )}
      </Grid>
   );
};

export default PostsInner;
