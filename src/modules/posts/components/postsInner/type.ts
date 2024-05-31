import { RefObject, ComponentType } from 'react';
import { ListOnItemsRenderedProps } from 'react-window';
import { FixedSizeGrid } from 'react-window';

export type PostsInnerProps<T> = {
   columnCount: number;
   columnWidth: number;
   height: number;
   rowCount: number;
   widthGrid: number;
   onItemsRendered: (props: ListOnItemsRenderedProps) => void;
   reference: RefObject<FixedSizeGrid<T>>;
   data: T[];
   Component: ComponentType<T>;
   rowHeight: number;
   rowHeightMobile: number;
   isMobileGridSettings: boolean;
};
