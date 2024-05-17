import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query getCharacters($page:Int){
  characters(page:$page){
  	results{
      id
      name
      species
      image
    }
  }
}
`