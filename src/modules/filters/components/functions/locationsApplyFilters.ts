import { LocationsStoreStoreType } from '../../../../stores/locations-store';

type TypeLocationsApplyFilters = {
   locations: LocationsStoreStoreType;
   newName: string;
   newType: string;
   newDimension: string;
};

export const locationsApplyFilters = ({
   locations,
   newName,
   newType,
   newDimension,
}: TypeLocationsApplyFilters) => {
   if (newName.trim() !== '' || newType || newDimension) {
      locations.setFilterName(newName.trim());
      locations.setFilterType(newType);
      locations.setFilterDimension(newDimension);

      locations.setIsFilter(true);
      locations.setPage(1);
   } else {
      locations.setFilterName('');
      locations.setFilterType('');
      locations.setFilterDimension('');
      locations.setIsFilter(false);
   }
};
