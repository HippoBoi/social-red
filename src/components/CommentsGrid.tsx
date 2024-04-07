import { Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';

const CommentsGrid = () => {
    const {posts, error} = usePosts();

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
