declare module "*.png";

declare module "services/PubSub_SR" {
  export const useSub: (
    eventName: string,
    handler: (...args: string[]) => void,
  ) => void;
  export const eventPub: (
    eventName: string,
    userData: { name: string },
  ) => void;
  export const useLocalStorageListener: (eventKeys: string[]) => {
    [key: string]: {
      name: string;
      data: string | boolean | number;
    };
  };
  export const useEventEmitter: () => (
    events: {
      key: string;
      eventName: string;
      eventData: {
        name: string;
      };
    }[],
  ) => void;
}
