import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const usePosts = () => {
    const [posts, postSet] = useState<Post[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<Post[]>("/posts", { signal: controller.signal })
            .then((res) => {
                postSet(res.data);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
        
        return () => { controller.abort() };
    }, []);

    return({ posts, error });
}

export default usePosts;