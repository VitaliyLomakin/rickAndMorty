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
      gender: string;
      origin: LocationType;
      location: LocationType;
      image: string;
      episode: EpisodeType[];
   };
};
