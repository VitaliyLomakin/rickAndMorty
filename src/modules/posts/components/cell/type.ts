import { ComponentType } from 'react';

export type CellProps<T> = {
   columnCount: number;
   columnIndex: number;
   rowIndex: number;
   style: React.CSSProperties;
   data: T[];
   Component: ComponentType<T>;
};
