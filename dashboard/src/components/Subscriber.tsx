import { useLocalStorageListener } from "services/PubSub_SR";

function Subscriber() {
  const eventKeys = ["event_12", "event_23"]; // Define your event keys here
  const events = useLocalStorageListener(eventKeys);

  return (
    <div>
      <h2>Event Subscriber</h2>

      <div>
        {Object.keys(events).map((key) => (
          <div
            key={key}
            style={{
              width: "200px",
              height: "100px",
              borderBottom: "2px solid black",
            }}
          >
            <h3>{key}</h3>
            <div>
              <strong>{events[key].name}</strong>:
              {JSON.stringify(events[key].data.name)}
            </div>
          </div>
        ))}
        {Object.keys(events).length === 0 && <div>No events found.</div>}
      </div>
    </div>
  );
}

export default Subscriber;
