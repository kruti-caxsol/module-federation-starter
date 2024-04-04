import React from "react";

declare module "*.png";
declare module "authapp/Auth" {
  const Counter: React.ComponentType;
  export default Counter;
}
declare module "authapp/Login" {
  const Login: React.ComponentType;
  export default Login;
}
declare module "authapp/Register" {
  const Register: React.ComponentType;
  export default Register;
}
declare module "app1/CounterAppOne" {
  const CounterAppOne: React.ComponentType;
  export default CounterAppOne;
}
declare module "app1/Subscriber" {
  const Subscriber: React.ComponentType;
  export default Subscriber;
}
declare module "eventpublisher/DemoPubSub" {
  const DemoPubSub: React.ComponentType;
  export default DemoPubSub;
}
declare module "eventpublisher/Publisher" {
  const Publisher: React.ComponentType;
  export default Publisher;
}
