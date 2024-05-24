import CharactersPosts from '../../modules/posts/charactersPosts/CharactersPosts';
import CharactersFilters from '../../modules/filters/charactersFilters/CharactersFilters';
import { CSSProperties } from 'react';

const styleImg: CSSProperties = {
   marginBottom: '16px',
   width: '100%',
   maxWidth: '600px',
   objectFit: 'cover',
};

const Characters = () => {
   return (
      <>
         <img
            style={styleImg}
            src="/image/rickAndMorty.png"
            alt="rick and morty"
         />
         <CharactersFilters />
         <CharactersPosts />
      </>
   );
};

export default Characters;
