import { Post } from '../hooks/usePosts'
import { Button, Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/Images/KHNLogo.png';
import { User } from '../hooks/useUsers';
import UserIconList from './UserIconList';
import LikeRatio from './LikeRatio';

interface Props {
    post: Post;
    user: User;
    curUserName: string;
}

const defaultUser: User = {
    id: 0,
    name: "default",
    username: "defaultUser"
}

const PostCard = ({ post, user = defaultUser, curUserName }: Props) => {
    if (curUserName !== user.username && curUserName !== "Users") {
        return;
    }
    
    return (
        <Card borderRadius={10}>
            <HStack justifyContent={'space-between'} padding={2}>
                <Image src={logo} boxSize={'40px'}></Image>
                <HStack>
                    <Text>{user.username}</Text>
                    <UserIconList user={user.username}></UserIconList>
                </HStack>
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
