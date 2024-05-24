import { LocationType } from '../locations/locationsType';
import { EpisodeType } from '../episodes/episodesType';

export type CharacterType = {
   id: string;
   name: string;
   status?: string;
   species: string;
   type?: string;
   gender?: string;
   origin?: string;
   location?: LocationType[];
   image: string;
   episode?: EpisodeType[];
   created?: string;
};

export type CharacterInfoType = {
   character: {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender;
      location: LocationType[];
      image: string;
      episode: EpisodeType[];
   };
};

type CharactersResults = {
   results: CharacterType[];
};

type CharactersInfo = {
   pages: number;
   count: number;
   prev: number;
   next: number;
};

export type CharactersData = {
   characters: {
      results: CharactersResults;
      info: CharactersInfo;
   };
};

export type CharactersVars = {
   page: number;
};

export type CharactersFilteredVars = {
   page: number;
   name: string;
   species: string;
};
