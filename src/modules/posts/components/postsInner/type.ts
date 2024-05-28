import { RefObject, ComponentType } from 'react';
import { ListOnItemsRenderedProps } from 'react-window';
import type { CharacterType } from '../../../../types/characters/charactersType';
import type { LocationType } from '../../../../types/locations/locationsType';

export type PostsInnerProps<T> = {
   columnCount: number;
   columnWidth: number;
   height: number;
   rowCount: number;
   widthGrid: number;
   onItemsRendered: (props: ListOnItemsRenderedProps) => void;
   reference: RefObject<any>;
   data: CharacterType[] | LocationType[];
   Component: ComponentType<T>;
   rowHeight: number;
   rowHeightMobile: number;
   isMobileGridSettings: boolean;
};
