import { makeAutoObservable } from "mobx";
import type { CharacterType } from "../types/characters/charactersType";

class CharactersStore {
    charactersData: CharacterType[] = [];
    page = 1;
    filteredCharactersData: CharacterType[] = [];
    filteredPage = 1;
    filterName = '';
    isFilter = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadPosts(newData: CharacterType[] ) {
        this.page += 1;
        this.charactersData = [...this.charactersData, ...newData];
    }

    filteredLoadPosts(newData: CharacterType[], inputVal: string) {
      
        if (inputVal) {
        
          this.isFilter = true;
          this.filterName = inputVal;
          this.filteredCharactersData = [...this.filteredCharactersData, ...newData];        
        } 
    }
    filteredLoadPostsInfiniteScroll(newData:CharacterType[]){
      
           
            this.filteredCharactersData = [...this.filteredCharactersData, ...newData];
        
    }

    setCharactersData(data: CharacterType[]) {
        this.charactersData = data;
    }

    setFilteredCharactersData(data: CharacterType[]) {
        this.filteredCharactersData = data;
    }

    setFilterName(name: string) {
        this.filterName = name;
    }

    setPage(page: number) {
        this.page = page;
    }

    setFilteredPage(page: number) {
        this.filteredPage = page;
    }
    setIsFilter(boolean:boolean){
        this.isFilter = boolean
    }
}

export default new CharactersStore();
