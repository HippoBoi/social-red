import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const CommentsGrid = () => {
    const [posts, postSet] = useState<Post[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient.get<Post[]>("/posts")
            .then((res) => {
                postSet(res.data)
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <p>{"title: " + post.title}</p>
                        <p>{"post ID: " + post.id}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CommentsGrid
