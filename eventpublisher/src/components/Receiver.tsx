import { useSub } from "services/PubSub_SR";

const Receiver = () => {
  const handleUserLoggedIn = (userData: any) => {
    console.log("print incomcidn", userData);
  };

  useSub("userLoggedIn", handleUserLoggedIn);
  return (
    <div>
      <hr />
      <h4>Receiver</h4>
      <hr />
    </div>
  );
};

export default Receiver;
