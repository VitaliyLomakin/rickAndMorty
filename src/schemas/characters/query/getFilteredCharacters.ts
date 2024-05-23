import { gql } from "@apollo/client";

export const GET_FILTERCHARACTERS = gql`
  query getFilteredCharacters($page: Int, $name: String){
  characters(page: $page, filter: {name: $name} ){
    info{
      count
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