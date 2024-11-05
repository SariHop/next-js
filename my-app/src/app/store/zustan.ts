import { create } from "zustand";
import counter from "@/app/types/zustandCounter"
import User from "@/app/types/user"

const useCounter = create<counter>((set, get) => ({

    users: [{
        id: 1,
        username: "string",
        image: "string",
        university: "string"
    }] as User[],

    getUsers: () => {
        // set((state) => ({ ...state }));
        set((state) => (get()));
    },

    deleteUser: (id: number) => {
        set((state) => ({
            users: state.users.filter((user) => user.id !== id),
        }));
    },

    updateUser: (id: number, updatedUser: User) => {
        set((state) => ({
            users: state.users.map((user) =>
                user.id === id ? { ...user, ...updatedUser } : user
            ),
        }));
    },

    createUser: (user: User) => {
        set((state) => ({
            users: [...state.users, user],
        }));
    },
}));

export default useCounter
