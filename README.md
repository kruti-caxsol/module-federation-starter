## Micro Frontend Application

---

**_Introduction_**
This document outlines the architecture and components of a micro frontend application built using React, TypeScript, and Module Federation. The application comprises several modules, including a Shell application, Services, Auth app, Styleguide, and Employee Management. Each module plays a distinct role in the overall functionality and structure of the application.

## _Overview of micro apps_

- **_Shell Application_**
  The shell application initializes the MFE application, manages authentication, and provides a common layout for all micro frontend modules. It dynamically loads remote components using Module Federation and handles routing for seamless navigation.

- **_Services_**
  Services such as ApolloClient and PubSub provide shared functionality to other parts of the application. ApolloClient facilitates communication with a GraphQL server, while PubSub enables event-driven communication between micro frontend modules.

- **_Auth app_**
  It is an authentication app where All the Authentication pages will be residing.

- **_Styleguide_**
  The Styleguide defines the visual and interactive elements of the MFE application using the MUI Material theme. It ensures consistency in styling and UI components across all micro frontend modules, simplifying maintenance and enhancing user experience.

- **_Employee Management_**
  This micro app provides functionality for managing employee information, including CRUD operations on employee records. It communicates with backend services via GraphQL for data retrieval and manipulation.

## _Used tools, libraries & plugins_

- **_Webpack 5 and Module Federation_**
  The main advantage of using Webpack 5 [Module Federations](https://webpack.js.org/concepts/module-federation/) is that it enables developers to create micro-frontends, which are self-contained, independent parts of a larger application.

- **_GraphQL_**
  Is a language used to communicate with backend systems through an API, allowing you to fetch and manipulate data. In [GraphQL](https://graphql.org/), you define a schema that describes the types of data available and the operations that can be performed.

- **_Apollo Client_**
  [Apollo Client](https://www.apollographql.com/docs/react/) leverages the power of a GraphQL API to handle data fetching and management for you.

- **_PubSub pattern_**
  In this approach, components or micro frontends can publish events when they want to share data or notify others about a particular action. Subscribers, on the other hand, listen for these events and react accordingly.

- **_Zustand_**
  [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) is a state management library for React that offers a lightweight and flexible approach to managing application state. It follows a store-based pattern, where you create stores to hold your application’s state and define actions to update that state.

| Plugin/Library | version | link                                                      |
| -------------- | ------- | --------------------------------------------------------- |
| Apollo Client  | 3.9.7   | https://www.apollographql.com/docs/react/                 |
| GraphQL        | 16.8.1  | https://graphql.org/                                      |
| EvenEmitter3   | 5.0.1   | https://www.npmjs.com/package/eventemitter3               |
| Jest           | 29.7.0  | https://jestjs.io/docs/getting-started                    |
| webpack 5      | 5.90.3  | https://webpack.js.org/blog/2020-10-10-webpack-5-release/ |
| Zustand        | 4.5.2   | https://docs.pmnd.rs/zustand/getting-started/introduction |
| @mui/material  | 5.15.13 | https://mui.com/material-ui/getting-started/installation/ |

## _Installation_

- Recat **18.2.0**
- Node **20**
- jdk

## _Execution Step's_

First step:

```s
 Clone the repository.
```

Second Step: `Fire command in each mfe app`

```s
 npm install
```

Third Step: `To run each micro app`

```s
npm start
```

## _Unit Testing_

Run unit test cases

```s
npm run test
```

```s
npm run test:watch
```

Code coverage

```s
npm run test:coverage
```
