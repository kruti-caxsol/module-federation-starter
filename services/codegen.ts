// import { CodegenConfig } from "@graphql-codegen/cli";
// // const authToken = localStorage.getItem("authToken");
// const config: CodegenConfig = {
//   schema: [
//     {
//       "http://localhost:8090/graphql": {
//         // headers: {
//         //   authorization: authToken ? `Bearer ${authToken}` : "",
//         // },
//       },
//     },
//   ],
//   ignoreNoDocuments: true,
//   generates: {
//     "./src/generated/graphql.tsx": {
//       documents: ["src/**/*.tsx", "src/**/*.ts"],
//       // preset: "client",
//       plugins: [
//         "typescript",
//         "typescript-operations",
//         "typescript-react-apollo",
//       ],
//       config: {
//         withHooks: true,
//       },
//     },
//   },
// };

// export default config;

import { CodegenConfig } from "@graphql-codegen/cli";
// const authToken = localStorage.getItem("authToken");
const config: CodegenConfig = {
  schema: [
    {
      "http://localhost:8090/graphql": {
        // headers: {
        //   authorization: authToken ? `Bearer ${authToken}` : "",
        // },
      },
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      documents: ["src/**/*.tsx", "src/**/*.ts"],
      preset: "client",
      plugins: [],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
