// import { Counter } from './Counter'
import "../src/style.css";
// import { useCustomHook1, useCustomHook2 } from "../src/customHooks";
import { ApolloProvider } from "@apollo/client";

import {client} from "./apollo/apolloClient";
import Counteries from "./components/Counteries";
const App = () => {

 
  return (
    <>
    <ApolloProvider client={client}>
        <h1>Services {process.env.NODE_ENV}</h1>
        <Counteries/>
    </ApolloProvider>
    </>
  );
};
export default App;
