import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';
import useUsers from '../hooks/useUsers';
import PostSkeleton from './PostSkeleton';
import { clamp } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
    curUserName: string;
};

const PostsGrid = ({ curUserName }: Props) => {
    const { data: posts, error, loading} = usePosts();
    const { data: users } = useUsers();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const randNum = (max: number) => {
        return Math.floor(Math.random() * max);
    };

    const getRandomUser = (postId: number) => {
        let newUser = postId;
        if (newUser > 9) {
            newUser = randNum(9);
        }

        return (users[newUser]);
    };

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3}} spacing={5} padding={'70px'}>
                {loading && skeletons.map((skeleton) => (
                    <PostSkeleton key={skeleton}></PostSkeleton>
                ))}

                {posts.map((post) => (
                    <PostCard 
                        key={post.id} 
                        post={post} 
                        user={getRandomUser(post.id)}
                        curUserName={curUserName}>
                    </PostCard>
                ))}
            </SimpleGrid>
            <Text fontSize={"4xl"} color='purple.800' as={"em"} padding={"355px"}>You are up to date!</Text>
        </>
    );
}

export default PostsGrid
