import { ComponentType } from 'react';

export type CellProps<T> = {
   columnIndex: number;
   rowIndex: number;
   style: React.CSSProperties;
   columnCount: number;
   data: T[];
   Component: ComponentType<T>;
};
