export type CharacterType = {
    id:string
    name:string
    status?:string
    species:string
    type?:string
    gender?:string
    origin?:string
    location?:string
    image:string
    episode?: unknown
    created?:string
}
export type CharactersData = {
    characters: {
        results: CharacterType[];
        info: {
          next: string | null;
        };
      };
}

export type CharactersVars = {
    page: number;
  };

export type CharactersFilteredVars = {
  page:number
  name:string
  species:string
}