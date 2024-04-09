import { Badge, HStack } from '@chakra-ui/react';
import { clamp } from 'framer-motion';
import { useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

enum likeType {
    LIKE,
    DISLIKE,
    NONE
}

interface Props {
    likes: number
}

const LikeRatio = ({ likes }: Props) => {
    const [like, setLike] = useState<likeType>(likeType.NONE);

    const convertLikeRatio = () => {
        const likeAdd = like === likeType.LIKE ? 1 : like === likeType.DISLIKE ? -1 : 0;
        return clamp(0, 100, ((likes + likeAdd)/10) * 100);
    }

    return (
        <HStack>
            {like === likeType.LIKE 
            ? <FaThumbsUp color='#4182fa' onClick={() => setLike(likeType.NONE)} /> 
            : <FaRegThumbsUp onClick={() => setLike(likeType.LIKE)} />}

            {like === likeType.DISLIKE 
            ? <FaThumbsDown color='#e30c4b' onClick={() => setLike(likeType.NONE)} /> 
            : <FaRegThumbsDown onClick={() => setLike(likeType.DISLIKE)} />}
            <Badge colorScheme={convertLikeRatio() > 69 ? 'green' : convertLikeRatio() > 39 ? 'yellow' : 'red'}>
                {convertLikeRatio() + "%"}
            </Badge>
        </HStack>
    );
}

export default LikeRatio
