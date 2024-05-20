import { makeAutoObservable, runInAction } from "mobx";
import type { CharacterType } from "../types/characters/charactersType";

class CharactersStore {
   
    charactersData:CharacterType[] = []
    page = 1

    constructor(){
        makeAutoObservable(this)
    }
    loadPosts(newData:CharacterType[]){
        this.page+=1;
        this.charactersData = [...this.charactersData, ...newData]
    }

    
}

export default new CharactersStore()