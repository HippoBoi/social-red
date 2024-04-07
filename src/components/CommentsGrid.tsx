import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';

const CommentsGrid = () => {
    const {posts, error} = usePosts();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3}} spacing={7} padding={'70px'}>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post}></PostCard>
                ))}
            </SimpleGrid>
        </>
    );
}

export default CommentsGrid
