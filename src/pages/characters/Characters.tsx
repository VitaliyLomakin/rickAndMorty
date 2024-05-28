import CharactersPosts from '../../modules/posts/charactersPosts/CharactersPosts';
import CharactersFilters from '../../modules/filters/charactersFilters/CharactersFilters';
import Banner from '../../ui/banner/Banner';

const Characters = () => {
   return (
      <>
         <Banner src="/image/rickAndMorty.png" alt="rick and morty" />
         <CharactersFilters />
         <CharactersPosts />
      </>
   );
};

export default Characters;
