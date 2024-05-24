import { RefObject } from 'react';
import { ListOnItemsRenderedProps } from 'react-window';
import type { CharacterType } from '../../../../types/characters/charactersType';

type DataArrType = CharacterType;

export type PostsInnerProps = {
   columnCount: number;
   columnWidth: number;
   height: number;
   rowCount: number;
   widthGrid: number;
   onItemsRendered: (props: ListOnItemsRenderedProps) => void;
   reference: RefObject<any>;
   data: DataArrType[];
};
