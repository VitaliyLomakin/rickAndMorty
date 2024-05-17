import React, {  useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';


import type { CharactersType } from '../../types/characters/charactersType';

import CharactersPosts from '../../modules/posts/charactersPosts/CharactersPosts';


const Characters = () => {

    

    return (
        <>
           
            <CharactersPosts /> 
        </>
    );
}

export default Characters;
