import { Post } from '../hooks/usePosts'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/Images/KHNLogo.png';

interface Props {
    post: Post;
}

const PostCard = ({ post }: Props) => {
    return (
        <Card borderRadius={10}>
            <HStack justifyContent={'space-between'} padding={2}>
                <Image src={logo} boxSize={'40px'}></Image>
                <Text>{post.userId}</Text>
                <Text>{"#" + post.id}</Text>
            </HStack>
            <CardBody>
                <Heading fontSize={20}>{post.title}</Heading>
            </CardBody>
        </Card>
    );
}

export default PostCard
