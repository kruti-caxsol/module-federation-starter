import React from 'react'
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useCountriesDataLazy } from '../apollo/queries/getCountriesLazy';

type Props = {}

function Counteries({}: Props) {

const {getCountriesData, data}=    useCountriesDataLazy()
//     const GET_CONTINENTS = gql`
//     query GetContinents {
//       continents {
//         code, name
//       }
//     }
//     `;

// // const { loading, error, data } = useQuery(GET_CONTINENTS);
// const [getData, data] = useLazyQuery(GET_CONTINENTS);

  //  const data = useCustomQuery()

console.log('print graphql' ,data)
   
  return (
    <>
    <div>Counteries</div>
    <button onClick={()=>getCountriesData()}>fetch data</button>
    </>
  )
}

export default Counteries