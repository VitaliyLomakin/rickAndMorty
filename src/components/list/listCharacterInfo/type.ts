import type { EpisodeType } from '../../../types/episodes/episodesType';
import type { CharacterInfoType } from '../../../types/characters/charactersType';

export type ListCharacterInfoProps = {
   data: CharacterInfoType;
};

export type ListCharacterInfoLinkProps = {
   url: string;
   arr: EpisodeType[];
};
