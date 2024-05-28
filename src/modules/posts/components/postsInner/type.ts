import { RefObject, ComponentType } from 'react';
import { ListOnItemsRenderedProps } from 'react-window';
import type { CharacterType } from '../../../../types/characters/charactersType';
import type { LocationType } from '../../../../types/locations/locationsType';
import type { EpisodeType } from '../../../../types/episodes/episodesType';

export type PostsInnerProps<T> = {
   columnCount: number;
   columnWidth: number;
   height: number;
   rowCount: number;
   widthGrid: number;
   onItemsRendered: (props: ListOnItemsRenderedProps) => void;
   reference: RefObject<any>;
   data: CharacterType[] | LocationType[] | EpisodeType[];
   Component: ComponentType<T>;
   rowHeight: number;
   rowHeightMobile: number;
   isMobileGridSettings: boolean;
};
