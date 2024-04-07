import { Badge, HStack } from '@chakra-ui/react';
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import React from 'react'

interface Props {
    likes: number
}

const LikeRatio = ({ likes }: Props) => {
    const convertLikeRatio = () => {
        return (likes/10) * 100;
    }

    return (
        <HStack>
            <FaRegThumbsUp></FaRegThumbsUp>
            <FaRegThumbsDown></FaRegThumbsDown>
            <Badge colorScheme={convertLikeRatio() > 69 ? 'green' : convertLikeRatio() > 39 ? 'yellow' : 'red'}>
                {convertLikeRatio() + "%"}
            </Badge>
        </HStack>
    );
}

export default LikeRatio
