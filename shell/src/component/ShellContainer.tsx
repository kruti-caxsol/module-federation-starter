import { useLazyQuery } from '@apollo/client'
// import {GET_CONTINENTS} from "services/apollo_SR"
type Props = {}

export default function ShellContainer({}: Props) {
  // const [getContinents, { loading, error, data }] = useLazyQuery(GET_CONTINENTS);
  // console.log('print apolo form shel', loading, error,data)
  return (
    <>
      <div>ShellContainer</div>
      {/* <button onClick={()=>getContinents()}>fetch user data</button> */}
    </>
  )
}
