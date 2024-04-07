import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';
import useUsers from '../hooks/useUsers';

const CommentsGrid = () => {
    const {posts, error} = usePosts();
    const { users } = useUsers();

    const randNum = (max: number) => {
        return Math.floor(Math.random() * max);
    };

    const getRandomUser = () => {
        return (users[randNum(10)])
    };

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3}} spacing={7} padding={'70px'}>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} user={getRandomUser()}></PostCard>
                ))}
            </SimpleGrid>
        </>
    );
}

export default CommentsGrid
