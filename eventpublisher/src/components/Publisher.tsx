import { useEventEmitter } from "services/PubSub_SR";

function Publisher() {
  const events = [
    {
      key: "event_12",
      eventName: "kk-Songs",
      eventData: { name: "Krishnakumar Kunnath" },
    },
    {
      key: "event_13",
      eventName: "rd-Songs",
      eventData: { name: "Rahul Deshpande" },
    },
    {
      key: "event_17",
      eventName: "Holiday",
      eventData: { name: "Diwali" },
    },
    {
      key: "event_23",
      eventName: "Holiday",
      eventData: { name: "Gudi Padwa" },
    },
  ];

  const emitEvents = useEventEmitter();

  return (
    <div>
      <h2>Event Emitter</h2>
      <div>
        <button onClick={() => emitEvents(events)}>Emit Events</button>
      </div>
    </div>
  );
}

export default Publisher;
