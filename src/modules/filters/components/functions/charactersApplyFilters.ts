import { CharacterStoreType } from '../../../../stores/charactes-store';

type TypecharactersApplyFilters = {
   characters: CharacterStoreType;
   newName: string;
   newSpecies: string;
   newGender: string;
   newStatus: string;
};

export const charactersApplyFilters = ({
   characters,
   newName,
   newSpecies,
   newGender,
   newStatus,
}: TypecharactersApplyFilters) => {
   if (newName.trim() !== '' || newSpecies || newGender || newStatus) {
      characters.setFilterName(newName.trim());
      characters.setFilterSpecies(newSpecies);
      characters.setFilterGender(newGender);
      characters.setFilterStatus(newStatus);
      characters.setIsFilter(true);
      characters.setPage(1);
   } else {
      characters.setFilterName('');
      characters.setFilterSpecies('');
      characters.setFilterGender('');
      characters.setFilterStatus('');
      characters.setIsFilter(false);
   }
};
