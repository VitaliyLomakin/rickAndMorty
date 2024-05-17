import  {  useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import {  FixedSizeList as List, FixedSizeGrid as Grid   } from 'react-window'; 
import PostsInner from '../components/postsInner/PostsInner';
import CharactersCard from '../../../ui/cards/charactersCard/charactersCard';
import { observer } from 'mobx-react-lite';
import { useInView } from 'react-intersection-observer';

import type { CharactersType } from '../../../types/characters/charactersType';

import { GET_CHARACTERS } from '../components/api/queryCharacters';


import { useStores } from '../../../context/root-store-context';



const CharactersPosts= observer( () => {
    
    const {ref, inView} = useInView({
        threshold: 1
    })
    const {characters} =useStores()   
    const [charactersState, setCharactersState] = useState<CharactersType[]>(characters.charactersData)

    const {data, loading, error} = useQuery(GET_CHARACTERS, {
        variables: {
            page: characters.page
        }
    })
    useEffect(()=>{
        if(data && inView ){

            const newCharacters =  data.characters.results
            
            characters.loadPosts([...newCharacters])
            
            
            setCharactersState(prevState =>[...prevState, ...newCharacters]);
        }
       
        
    }, [data, inView])


   
   
    return (
        <PostsInner >
       
        <Grid 
          columnCount={4}
          columnWidth={240}
          height={charactersState.length * 70}
          rowCount={Math.ceil(charactersState.length / 4)} 
          rowHeight={280}
          width={1000}>
            
            {  ({ columnIndex, rowIndex, style}) => {
          
            const index = rowIndex * 4 + columnIndex;
                const character = charactersState[index];
                if (!character) {
                    return null;
                }

                const { name, species, id, image } = character;
                return (    
                    <div >
                           <CharactersCard  style={style} key={id} name={name} species={species} id={id} image={image} /> 
                    </div>  
                  
                    );
            }}
        </Grid>
        
         {
            loading && <h2>load...</h2>
         }
       
        <div ref={ref} >тут будет спинер!!!</div>
      
        </PostsInner>
      
        
    );
})

export default CharactersPosts;

 
