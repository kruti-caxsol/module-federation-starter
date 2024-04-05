import EventEmitter from "eventemitter3";
import { useEffect, useState } from "react";

export const eventEmitter = new EventEmitter();

// Custom hook for subscribing to an event
export const useSub = (
  eventName: string,
  handler: (...args: string[]) => void,
) => {
  useEffect(() => {
    eventEmitter.on(eventName, handler);

    return () => {
      eventEmitter.off(eventName, handler);
    };
  }, [eventName, handler]);
};

// Function to publish an event
export const eventPub = (eventName: string, userData: { name: string }) => {
  eventEmitter.emit(eventName, userData);
};

// Custom hook for read LocalStorage
export const useLocalStorageListener = (eventKeys: string[]) => {
  // State to store events retrieved from localStorage
  const [events, setEvents] = useState<{
    [key: string]: { name: string; data: string };
  }>({});

  useEffect(() => {
    // Function to retrieve events from localStorage
    const getEventsFromLocalStorage = () => {
      const eventsData: { [key: string]: { name: string; data: string } } = {};
      eventKeys.forEach((key) => {
        const eventDataString = localStorage.getItem(key);
        if (eventDataString) {
          const eventData = JSON.parse(eventDataString);
          eventsData[key] = { name: eventData.name, data: eventData.data };
        }
      });
      // Update state with retrieved events
      setEvents(eventsData);
    };

    // Event listener callback for storage events
    const storageEventListener = (event: StorageEvent) => {
      // Check if the event key is one of the monitored keys and if there's new data
      if (eventKeys.includes(event.key || "") && event.newValue) {
        const eventData = JSON.parse(event.newValue);
        // Update state with the new event data
        setEvents((prevEvents) => ({
          ...prevEvents,
          [event.key || ""]: { name: eventData.name, data: eventData.data },
        }));
      }
    };

    // Initial fetch of events from localStorage
    getEventsFromLocalStorage();
    // Add event listener to listen for changes in localStorage
    window.addEventListener("storage", storageEventListener);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("storage", storageEventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return events;
};

// emit event and store in LocalStorage
export const useEventEmitter = () => {
  const emitEvents = (
    events: {
      key: string;
      eventName: string;
      eventData: {
        name: string;
      };
    }[],
  ) => {
    events.forEach((event) => {
      const { key, eventName, eventData } = event;
      // Store event name, data, and ID in local storage
      localStorage.setItem(
        key,
        JSON.stringify({
          name: eventName,
          data: eventData,
        }),
      );
    });
  };

  return emitEvents;
};
