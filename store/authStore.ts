import create, { GetState, SetState } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";
import { IUser } from "../types";
import { ReactComponentElement } from "react";

const authStore = (set: any) => ({
  userProfile: null,
  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
});

const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthStore;
