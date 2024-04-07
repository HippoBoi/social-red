import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const usePosts = () => {
    const [posts, postSet] = useState<Post[]>([]);
    const [error, setError] = useState("");
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        isLoading(true);
        const controller = new AbortController();

        apiClient.get<Post[]>("/posts", { signal: controller.signal })
            .then((res) => {
                postSet(res.data);
                isLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                isLoading(false);
            });
        
        return () => { controller.abort() };
    }, []);

    return({ posts, error, loading });
}

export default usePosts;