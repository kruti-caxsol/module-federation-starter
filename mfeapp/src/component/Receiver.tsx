import React, { Suspense } from "react";
import { useSub } from "services/PubSub_SR";

const ExampleTwo = React.lazy(() => import("styleguide/ExampleTwo"));

function Receiver() {
  const handleUserLoggedIn = () => {
    // console.log("print incomcidn", userData); userData: string
  };

  useSub("userLoggedIn", handleUserLoggedIn);
  return (
    <div>
      <hr />
      <h4>Receiver</h4>
      <hr />
      <Suspense fallback="Loading">
        <ExampleTwo />
      </Suspense>
    </div>
  );
}

export default Receiver;
