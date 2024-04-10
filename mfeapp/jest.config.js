/* eslint-disable prettier/prettier */
module.exports = {
  preset: "ts-jest",
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    // "^.+\\.(j|t)sx?$": "babel-jest", // jsx and .tsx files

    "^.+\\.tsx?$": "ts-jest", // only tsx
  },
  moduleNameMapper: {
    // Maps CSS imports to an identity object proxy (useful for testing CSS modules)
    "\\.(css)$": "identity-obj-proxy",

    // Maps Module Federation dependencies to the appropriate node_modules path
    "^@module-federation/(.+)": "<rootDir>/node_modules/@module-federation/$1",

    // Maps imports of "services/PubSub_SR" to a mock file for testing purposes
    "^services/PubSub_SR$": "<rootDir>/test/mock/PubSub_SR.ts",
    "^styleguide/ExampleTwo$": "<rootDir>/test/mock/PubSub_SR.ts",
  },

  // Specifies setup files to run before each test file
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
