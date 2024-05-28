import React, { FC } from 'react';
import { getCellStyle } from '../../../../utils/functions/getCellStyle';
import type { CellProps } from './type';

export const Cell: FC<CellProps<any>> = ({
   columnIndex,
   rowIndex,
   style,
   columnCount,
   data,
   Component,
}) => {
   const itemIndex = rowIndex * columnCount + columnIndex;
   const item = data[itemIndex];

   const cellStyle = getCellStyle(columnCount, style);

   return <div style={cellStyle}>{item && <Component {...item} />}</div>;
};
