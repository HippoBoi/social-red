import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts, { Post } from '../hooks/usePosts';
import PostCard from './PostCard';
import useUsers, { User } from '../hooks/useUsers';
import PostSkeleton from './PostSkeleton';
import postsService from '../services/posts-service';
import PostForm from './PostForm';

interface Props {
    selectedId: number;
    searchMsg: string;
};

const PostsGrid = ({ selectedId, searchMsg }: Props) => {
    const { data: posts, setData, error, setError, loading} = usePosts(selectedId, searchMsg);
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
    };

    const filteredPosts = searchMsg !== ""
    ? posts.filter((post) => post.title.includes(searchMsg)) 
    : [...posts];

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
                    filteredPosts.map((post) => (
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
