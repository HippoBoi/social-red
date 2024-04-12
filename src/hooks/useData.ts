import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(endpoint: string, params?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        isLoading(true);
        const controller = new AbortController();

        apiClient.get<T[]>(endpoint, { signal: controller.signal, ...params })
            .then((res) => {
                setData(res.data);
                isLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                isLoading(false);
            });
        
        return () => { controller.abort() };
    }, deps ? [...deps] : []);

    return({ data, setData, error, setError, loading });
};

export default useData;