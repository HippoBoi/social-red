import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const PostContainer = ({ children }: Props) => {
    return (
        <Box borderRadius={10} width={'300px'} overflow={"hidden"}>{children}</Box>
    );
}

export default PostContainer
