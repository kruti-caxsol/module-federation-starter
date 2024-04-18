// import {create} from 'zustand';

// interface AuthStore {
//   authToken: string | null;
//   setAuthToken: (token: string) => void;
// }

// const useAuthStore = create<AuthStore>((set) => ({
//   authToken: localStorage.getItem('authToken') || null,
//   setAuthToken: (token) => {
//     localStorage.setItem('authToken', token);
//     set({ authToken: token });
//   },
// }));

// export default useAuthStore;

import { create } from "zustand";

interface AuthStore {
  authToken: string | null;
  setAuthToken: (token: string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  authToken: localStorage.getItem("authToken") || null,
  setAuthToken: (token) => {
    localStorage.setItem("dummy_token", token);
    set({ authToken: token });
  },
}));

// // Check Initial State
// console.log("Initial Auth Token:", useAuthStore.getState().authToken);

// // Test Setter Function
// useAuthStore.getState().setAuthToken("dummy_token");
// console.log("Updated Auth Token:", useAuthStore.getState().authToken);

// // Verify LocalStorage
// console.log("LocalStorage Auth Token:", localStorage.getItem("authToken"));

export default useAuthStore;
