import { pubEmitter, useSub } from "services/PubSub_SR";

function SubscriberComponent() {
  const handleUserLoggedIn = (userData: string) => {
    console.log("print incomcidn from dashboard", userData);
  };
  const handleClick = () => {
    pubEmitter("userLoggedIn", { name: "Vishal" });
  };
  useSub("userLoggedIn", handleUserLoggedIn);

  return (
    <div>
      <h4>Receiver/Emitter Component</h4>
      <div>
        <button type="button" onClick={handleClick}>
          Emitter Two
        </button>
      </div>
    </div>
  );
}

export default SubscriberComponent;
