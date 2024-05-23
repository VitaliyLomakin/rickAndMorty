import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query getCharacters($page:Int){
  characters(page:$page){
    info{
      prev
      next
    }
  	results{
      id
      name
      species
      image
    }
  }
}
`