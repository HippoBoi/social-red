import { Post } from '../hooks/usePosts'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/Images/KHNLogo.png';
import { User } from '../hooks/useUsers';
import UserIconList from './UserIconList';

interface Props {
    post: Post;
    user: User;
}

const PostCard = ({ post, user }: Props) => {
    return (
        <Card borderRadius={10}>
            <HStack justifyContent={'space-between'} padding={2}>
                <Image src={logo} boxSize={'40px'}></Image>
                <UserIconList user={user.username}></UserIconList>
                <Text>{"#" + post.id}</Text>
            </HStack>
            <CardBody>
                <Heading fontSize={20}>{post.title}</Heading>
            </CardBody>
        </Card>
    );
}

export default PostCard
