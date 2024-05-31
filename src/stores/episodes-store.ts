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
      this.setPage = this.setPage.bind(this);
      this.setEpisodesData = this.setEpisodesData.bind(this);
   }

   loadPosts(newData: EpisodeType[]) {
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
      this.page += 1;
   }
   setIsFilter(boolean: boolean) {
      this.isFilter = boolean;
   }
}

export type EpisodesStoreType = EpisodesStore;
export default new EpisodesStore();
