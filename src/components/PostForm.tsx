import { Button, Card, FormLabel, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Post } from '../hooks/usePosts';
import { useState } from 'react';

const schema = z.object({
    msg: z.string(),
    username: z.string()
});

type PostFormData = z.infer<typeof schema>;

interface Props {
    onSubmitted: (data: Post) => void;
}

const PostForm = ({ onSubmitted }: Props) => {
    const { register, reset, handleSubmit } = useForm<PostFormData>();
    const [creatingPost, isCreatingPos] = useState(false);

    const Submitted = (data: PostFormData) => {
        const newPost: Post = {userId: 11, id: 0, title: data.msg, body: data.username};
        onSubmitted(newPost);
        isCreatingPos(false);
        reset();
    }

    if (creatingPost === false) {
        return(
            <Button 
                onClick={() => isCreatingPos(!creatingPost)} 
                margin={"30px"} 
                paddingX={"60px"} 
                paddingY={"10px"} 
                size={"md"}>
                Create Post
            </Button>
        );
    }

    return (
        <Card marginX={"30px"} marginY={"20px"}>
            <form onSubmit={handleSubmit((data) => Submitted(data))}>
                <Stack marginX={"30px"} marginY={5}>
                    <Text as={"b"} fontSize={"2xl"}>
                        Create a Post
                    </Text>
                    <FormLabel
                        htmlFor="msg" 
                        className="form-label">
                        Message
                    </FormLabel>
                    <input
                        {...register("msg")}
                        id='msg'
                        type="text" 
                        className="form-control" />
                    
                    <FormLabel 
                        htmlFor="username" 
                        className="form-label">
                        Username
                    </FormLabel>
                    <input 
                        {...register("username")}
                        id='username'
                        type="text" 
                        className="form-control" />

                    <HStack justifyContent={"space-between"}>
                        <Button paddingX={"120px"} type='submit'>Post</Button>
                        <Button onClick={() => isCreatingPos(false)}>Cancel</Button>
                    </HStack>
                </Stack>
            </form>
        </Card>
    );
}

export default PostForm;
