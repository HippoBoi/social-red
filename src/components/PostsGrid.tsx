import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';
import useUsers from '../hooks/useUsers';
import PostSkeleton from './PostSkeleton';
import PostContainer from './PostContainer';

const PostsGrid = () => {
    const {posts, error, loading} = usePosts();
    const { users } = useUsers();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
                {loading && skeletons.map((skeleton) => (
                    <PostContainer>
                        <PostSkeleton key={skeleton}></PostSkeleton>
                    </PostContainer>
                ))}

                {posts.map((post) => (
                    <PostCard key={post.id} post={post} user={getRandomUser()}></PostCard>
                ))}
            </SimpleGrid>
        </>
    );
}

export default PostsGrid
