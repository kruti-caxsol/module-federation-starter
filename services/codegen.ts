import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8090/graphql",
  documents: "src/graphql/**/*.{gql,graphql}",
  generates: {
    "./src/gql/": {
      schema: "./schema.graphql",
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
