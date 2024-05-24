import { makeAutoObservable } from "mobx";
import type { CharacterType } from "../types/characters/charactersType";
import { deleteDublicate } from "../utils/functions/deleteDublicate";

class CharactersStore {
    charactersData: CharacterType[] = [];
    page = 1;
 
    filterName = '';
    species=''
    isFilter = false;
  

    constructor() {
        makeAutoObservable(this);
    }

    loadPosts(newData: CharacterType[] ) {    
        // this.charactersData = [...this.charactersData, ...newData];
        const res = deleteDublicate([...this.charactersData, ...newData], "id")
        console.log(res)
        this.charactersData = [...res]
    }

    setCharactersData(data: CharacterType[]) {
        this.charactersData = data;
    }

    setFilterName(name: string) {
        this.filterName = name;
    }
    setFilterSpecies(name: string) {
        console.log(name)
        this.species = name;
    }

    setPage(page:number) {
        this.page = page;
    }
    setIsFilter(boolean:boolean){
        this.isFilter = boolean
    }
    setPagePlusNumber(){
      this.page++ ;
    }
   
}

export default new CharactersStore();