import { EpisodesStoreType } from '../../../../stores/episodes-store';

type TypeLocationsApplyFilters = {
   episodes: EpisodesStoreType;
   newName: string;
};

export const episodesApplyFilters = ({
   episodes,
   newName,
}: TypeLocationsApplyFilters) => {
   if (newName.trim() !== '') {
      episodes.setFilterName(newName.trim());
      episodes.setIsFilter(true);
      episodes.setPage(1);
   } else {
      episodes.setFilterName('');
      episodes.setIsFilter(false);
   }
};
