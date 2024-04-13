import { Post } from '../hooks/usePosts'
import { Button, Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/Images/KHNLogo.png';
import { User } from '../hooks/useUsers';
import UserIconList from './UserIconList';
import LikeRatio from './LikeRatio';
import NameMapped from './NameMapped';
import { clamp } from 'framer-motion';

interface Props {
    post: Post;
    userId: number;
    curUserId: number;
}

const PostCard = ({ post, userId = 0, curUserId }: Props) => {
    if (curUserId !== userId && curUserId !== 0) {
        return;
    }
    
    return (
        <Card borderRadius={10}>
            <HStack justifyContent={'space-between'} padding={2}>
                <Image src={logo} boxSize={'40px'}></Image>
                <HStack>
                    <NameMapped userId={userId}></NameMapped>
                    <UserIconList userId={userId}></UserIconList>
                </HStack>
                <Text>{"#" + post.id}</Text>
            </HStack>
            <CardBody>
                <Heading fontSize={20}>{post.title}</Heading>
            </CardBody>
            <CardBody>
                <LikeRatio likes={clamp(0, 10, userId)}></LikeRatio>
            </CardBody>
        </Card>
    );
}

export default PostCard
