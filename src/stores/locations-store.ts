import { makeAutoObservable } from 'mobx';
import type { LocationType } from '../types/locations/locationsType';
import { deleteDublicate } from '../utils/functions/deleteDublicate';

class LocationsStore {
   locationsData: LocationType[] = [];
   page = 1;
   filterName = '';
   type = '';
   dimension = '';
   isFilter = false;

   constructor() {
      makeAutoObservable(this);
      this.setPage = this.setPage.bind(this);
      this.setLocationsData = this.setLocationsData.bind(this);
   }

   loadPosts(newData: LocationType[]) {
      const res = deleteDublicate([...this.locationsData, ...newData], 'id');

      this.locationsData = [...res];
   }

   setLocationsData(data: LocationType[]) {
      this.locationsData = data;
   }

   setFilterName(name: string) {
      this.filterName = name;
   }
   setFilterType(str: string) {
      this.type = str;
   }
   setFilterDimension(str: string) {
      this.dimension = str;
   }

   setPage(page: number) {
      this.page = page;
   }

   setIsFilter(boolean: boolean) {
      this.isFilter = boolean;
   }
   setPagePlusNumber() {
      this.page += 1;
   }
}

export type LocationsStoreStoreType = LocationsStore;

const locationsStore = new LocationsStore();
export default locationsStore;
