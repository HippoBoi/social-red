import useData from "./useData";

export interface User {
    id: number;
    name: string;
    username: string;
};

const useUsers = () => useData<User>("/users");

export default useUsers;