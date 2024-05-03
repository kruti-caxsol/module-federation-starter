import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8090/graphql",
  documents: "./graphql/**/*.graphql",
  generates: {
    "./src/gql/operations.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        {
          "typescript-react-apollo": {
            withHooks: true,
          },
        },
      ],
    },
  },
};

export default config;
