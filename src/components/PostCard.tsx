import { Post } from '../hooks/usePosts'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/Images/KHNLogo.png';
import { User } from '../hooks/useUsers';
import UserIconList from './UserIconList';
import LikeRatio from './LikeRatio';

interface Props {
    post: Post;
    user: User;
}

const PostCard = ({ post, user }: Props) => {
    return (
        <Card width={"350px"} borderRadius={10}>
            <HStack justifyContent={'space-between'} padding={2}>
                <Image src={logo} boxSize={'40px'}></Image>
                <UserIconList user={user.username}></UserIconList>
                <Text>{"#" + post.id}</Text>
            </HStack>
            <CardBody>
                <Heading fontSize={20}>{post.title}</Heading>
            </CardBody>
            <CardBody>
                <LikeRatio likes={user.id}></LikeRatio>
            </CardBody>
        </Card>
    );
}

export default PostCard
