import create, { GetState, SetState } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";
import { IUser } from "../types";
import { ReactComponentElement } from "react";
import { BASE_URL } from "../utils";

const authStore = (set: any) => ({
  userProfile: null,
  allUsers: [],
  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),

  fetchAllUsers: async () => {
    const response = await axios.get(`${BASE_URL}/api/users`);
    set({ allUsers: response.data });
  },
});

const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthStore;
