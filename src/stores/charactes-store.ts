import { makeAutoObservable } from "mobx";
import type { CharacterType } from "../types/characters/charactersType";
import { deleteDublicate } from "../utils/functions/deleteDublicate";

class CharactersStore {
    charactersData: CharacterType[] = [];
    page = 1;
    filteredCharactersData: CharacterType[] = [];
    filteredPage = 1;
    filterName = '';
    isFilter = false;
    fullLoading = false

    constructor() {
        makeAutoObservable(this);
    }

    loadPosts(newData: CharacterType[] ) {
        this.page += 1;
        this.charactersData = [...this.charactersData, ...newData];
    }

    filteredLoadPosts(newData: CharacterType[], inputVal: string, pageState: number) {
        console.log(newData)
        console.log(inputVal.length);
        if (inputVal.length === 0) {
            this.isFilter = false;
            this.filterName = ''
            this.filteredPage = 0
          return 
        } else {
            this.isFilter = true;
            this.filterName = inputVal;
            
            this.filteredPage += 1;
            this.filteredCharactersData = [...this.filteredCharactersData, ...newData];
            
        }
    }
    filteredLoadPostsInfiniteScroll(newData:CharacterType[]){
        this.filteredPage += 1;
        const data = deleteDublicate([...this.filteredCharactersData, ...newData], "id") 
        this.filteredCharactersData = [...data];
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
    setIsFilter(boolean:boolean){
        this.isFilter = boolean
    }

    setFilteredPage(page: number) {
        this.filteredPage = page;
    }
}

export default new CharactersStore();