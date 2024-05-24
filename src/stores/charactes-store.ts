import { makeAutoObservable } from "mobx";
import type { CharacterType } from "../types/characters/charactersType";
import { deleteDublicate } from "../utils/functions/deleteDublicate";

class CharactersStore {
    charactersData: CharacterType[] = [];
    page = 1;
 
    filterName = '';
    species=''
    gender=''
    status=''

    isFilter = false;
  

    constructor() {
        makeAutoObservable(this);
    }

    loadPosts(newData: CharacterType[] ) {    
        // this.charactersData = [...this.charactersData, ...newData];
        const res = deleteDublicate([...this.charactersData, ...newData], "id")
        
        this.charactersData = [...res]
    }

    setCharactersData(data: CharacterType[]) {
        this.charactersData = data;
    }

    setFilterName(name: string) {
        this.filterName = name;
    }
    setFilterSpecies(str: string) {
        this.species = str;
    }
    setFilterStatus(str:string){
        this.status = str
    }
    setFilterGender(str:string){
        this.gender = str
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