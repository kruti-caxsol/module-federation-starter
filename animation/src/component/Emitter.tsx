import { eventPub } from "services/PubSub_SR";

function Emitter() {
  const handleClick = () => {
    // console.log("clicked MFE-1 emitter");
    eventPub("userLoggedIn", { name: "asdf" });
  };

  return (
    <div>
      <h4>Emitter Component</h4>
      <div>
        <button type="button" onClick={handleClick}>
          Emitter One
        </button>
      </div>
    </div>
  );
}

export default Emitter;
