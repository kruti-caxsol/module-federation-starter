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
