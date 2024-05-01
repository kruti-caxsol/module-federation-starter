module.exports = { 
    preset: "ts-jest", 
   rootDir: "src", 
   testEnvironment: "jsdom", 

   transform: { 
     "^.+\\.tsx?$": "ts-jest", // only tsx 
   }, 
 
   moduleNameMapper: { 
 
     "\\.(css)$": "identity-obj-proxy", 
 
     // Maps Module Federation dependencies to the appropriate node_modules path 
 
     "^@module-federation/(.+)": "<rootDir>/node_modules/@module-federation/$1", 
 
     // Maps imports of "services/PubSub_SR" to a mock file for testing purposes (example) 
 
     "^services/PubSub_SR$": "<rootDir>/test/mock/PubSub_SR.ts", 
 
   }, 
 
   // Specifies setup files to run before each test file 
 
   setupFilesAfterEnv: ["@testing-library/jest-dom"], 
   
 }; 