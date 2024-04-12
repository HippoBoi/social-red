import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts, { Post } from '../hooks/usePosts';
import PostCard from './PostCard';
import useUsers, { User } from '../hooks/useUsers';
import PostSkeleton from './PostSkeleton';
import postsService from '../services/posts-service';
import PostForm from './PostForm';
import { useEffect, useState } from 'react';

interface Props {
    selectedId: number;
};

const PostsGrid = ({ selectedId }: Props) => {
    const { data: posts, setData, error, setError, loading} = usePosts(selectedId);
    const { data: users } = useUsers();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const onSubmitted = (data: Post) => {
        postsService.newPost(data)
            .then(res => {
                setData([...posts, res.data]);
            })
            .catch(err => {
                setError(err);
            });
    }

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
            <PostForm onSubmitted={(data) => onSubmitted(data)}></PostForm>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3}} spacing={5} padding={'30px'}>
                {loading 
                ? 
                    skeletons.map((skeleton) => (
                    <PostSkeleton key={skeleton}></PostSkeleton>)) 
                :
                    posts.map((post) => (
                        <PostCard 
                            key={post.id} 
                            post={post} 
                            userId={post.userId}
                            curUserId={selectedId}>
                        </PostCard>
                    ))
                }
            </SimpleGrid>
            <Text fontSize={"4xl"} color='purple.800' as={"em"} padding={"325px"}>You are up to date!</Text>
        </>
    );
}

export default PostsGrid
