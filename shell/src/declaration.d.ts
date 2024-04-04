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
