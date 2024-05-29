import { makeAutoObservable } from 'mobx';
import type { EpisodeType } from '../types/episodes/episodesType';
import { deleteDublicate } from '../utils/functions/deleteDublicate';

class EpisodesStore {
   episodesData: EpisodeType[] = [];
   page = 1;
   filterName = '';
   isFilter = false;

   constructor() {
      makeAutoObservable(this);
   }

   loadPosts(newData: EpisodeType[]) {
      console.log(newData);
      const res = deleteDublicate([...this.episodesData, ...newData], 'id');

      this.episodesData = [...res];
   }

   setEpisodesData(data: EpisodeType[]) {
      this.episodesData = data;
   }

   setFilterName(name: string) {
      this.filterName = name;
   }

   setPage(page: number) {
      this.page = page;
   }

   setPagePlusNumber() {
      this.page++;
   }
   setIsFilter(boolean: boolean) {
      this.isFilter = boolean;
   }
}

export type EpisodesStoreType = EpisodesStore;
export default new EpisodesStore();
