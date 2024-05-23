import { gql } from "@apollo/client";

export const GET_FILTERCHARACTERS = gql`
  query getFilteredCharacters($page: Int, $name: String, $species: String){
  characters(page: $page, filter: {name: $name, species:$species } ){
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