import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface User {
    id: number;
    name: string;
    username: string;
};

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        isLoading(true);
        const controller = new AbortController();

        apiClient.get<User[]>("/users", { signal: controller.signal })
            .then((res) => {
                setUsers(res.data);
                isLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                isLoading(false);
            });
        
        return () => { controller.abort() };
    }, []);

    return({ users, error, loading });
}

export default useUsers;