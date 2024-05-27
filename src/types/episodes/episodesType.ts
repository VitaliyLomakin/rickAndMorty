import type { CharacterType } from '../characters/charactersType';

export type EpisodeType = {
   id: number;
   name: string;
   air_date: string;
   episode: string;
   characters?: CharacterType[];
   created?: string;
};
