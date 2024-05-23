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


type CharactersResults = {
  results: CharacterType[];
};

type CharactersInfo = {
  pages:number
  count:number
  prev:number
  next:number
};


export type CharactersData = {
    characters: {
        results:CharactersResults;
        info: CharactersInfo
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