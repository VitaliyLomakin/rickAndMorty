import CharactersPosts from '../../modules/posts/charactersPosts/CharactersPosts';
import CharactersFilters from '../../modules/filters/charactersFilters/CharactersFilters';


const Characters =  () => {
   

    return (
        <>
            <CharactersFilters  />
            <CharactersPosts />  
        </>
    );
}

export default Characters;
