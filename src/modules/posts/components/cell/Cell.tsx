import React from 'react';
import { getCellStyle } from '../../../../utils/functions/getCellStyle';
import type { CellProps } from './type';

export const Cell = <T,>({
   columnIndex,
   rowIndex,
   style,
   columnCount,
   data,
   Component,
}: CellProps<T>) => {
   const itemIndex = rowIndex * columnCount + columnIndex;
   const item = data[itemIndex];

   const cellStyle = getCellStyle(columnCount, style);

   return <div style={cellStyle}>{item && <Component {...item} />}</div>;
};
