import { useSub } from "services/PubSub_SR";

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
    </div>
  );
}

export default Receiver;
