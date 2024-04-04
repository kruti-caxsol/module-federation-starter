declare module "*.png";

declare module "services/apollo_SR" {
  import {
    ApolloClient,
    DocumentNode,
    NormalizedCacheObject,
  } from "@apollo/client";
  export const client: ApolloClient<NormalizedCacheObject>;
  export const GET_CONTINENTS: DocumentNode;
}

declare module "services/PubSub_SR" {
  export const useSub: (
    eventName: string,
    handler: (...args: any[]) => void,
  ) => void;
  export const pubEmitter: (
    eventName: string,
    userData: { name: string },
  ) => void;
  export const useLocalStorageListener: (eventKeys: string[]) => {
    [key: string]: {
      name: string;
      data: any;
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
