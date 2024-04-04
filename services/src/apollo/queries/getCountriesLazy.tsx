

import { gql, useLazyQuery } from '@apollo/client';


export const useCountriesDataLazy=()=>{
    const GET_CONTINENTS = gql`
    query GetContinents {
      continents {
        code, name
      }
    }
    `;

const [ getCountriesData, {loading, error, data} ] = useLazyQuery(GET_CONTINENTS);

return({
    getCountriesData,
    loading,
    error,
    data    
})

}