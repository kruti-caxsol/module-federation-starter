declare module "*.png";
declare module "authapp/Auth" {
  import { ComponentType } from "react";
  const Counter: ComponentType;
  export default Counter;
}
declare module "authapp/Login" {
  import { ComponentType } from "react";
  const Login: ComponentType;
  export default Login;
}

declare module "authapp/Register" {
  import { ComponentType } from "react";
  const Register: ComponentType;
  export default Register;
}
declare module "authapp/DemoPubSub" {
  import { ComponentType } from "react";
  const DemoPubSub: ComponentType;
  export default DemoPubSub;
}
declare module "services/apollo_SR" {
  import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
  export const client: ApolloClient<NormalizedCacheObject>;
}

declare module "services/ProtectedRoute" {
  const ProtectedRoute: React.FC<{
    element: React.ReactElement;
  }>;
  export default ProtectedRoute;
}

declare module "authapp/UserList" {
  import { ComponentType } from "react";
  const Userlist: ComponentType;
  export default Userlist;
}

declare module "services/PubSub_SR" {
  export const useSub: (
    eventName: string,
    handler: (...args: string[]) => void,
  ) => void;

  export const eventPub: (
    eventName: string,
    userData: { name: string } | string,
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
