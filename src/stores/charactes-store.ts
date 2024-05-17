import { makeAutoObservable, runInAction } from "mobx";
import type { CharactersType } from "../types/characters/charactersType";

class CharactersStore {
   
    charactersData:CharactersType[] = []
    page = 1

    constructor(){
        makeAutoObservable(this)
    }
    loadPosts(newData:CharactersType[]){
      
        this.page+=1;
        this.charactersData = [...this.charactersData,...newData]
    }

    
}

export default new CharactersStore()