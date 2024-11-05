import User from "@/app/types/user"

export default interface counter {
    users: User[];
    getUsers: () => void;
    deleteUser: (id: number) => void;
    updateUser: (id: number, user: User) => void;
    createUser: (user: User) => void;
}
