import { pubEmitter } from "services/PubSub_SR";
type Props = {};

function Emitter({}: Props) {
  const handleClick = () => {
    console.log("clicked MFE-1 emitter");
    pubEmitter("userLoggedIn", { name: "asdf" });
  };

  return (
    <div>
      <h4>Emitter Component</h4>
      <div>
        <button onClick={handleClick}>Emitter One</button>
      </div>
    </div>
  );
}

export default Emitter;
