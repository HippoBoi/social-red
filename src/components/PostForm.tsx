import { Button, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const PostForm = () => {
    return (
        <form>
            <Stack>
                <Text as={"b"}>Create a Post</Text>
                <label 
                    htmlFor="msg" 
                    className="form-label">
                    Message
                </label>
                <input 
                    id='msg'
                    type="text" 
                    className="form-control" />

                <Button type='submit'>Post</Button>
            </Stack>
        </form>
    )
}

export default PostForm
