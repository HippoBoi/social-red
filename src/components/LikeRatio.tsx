import { Badge, HStack } from '@chakra-ui/react';
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

interface Props {
    likes: number
}

const LikeRatio = ({ likes }: Props) => {
    const convertLikeRatio = () => {
        return (likes/10) * 100;
    }

    return (
        <HStack>
            <FaRegThumbsUp />
            <Badge colorScheme={convertLikeRatio() > 69 ? 'green' : convertLikeRatio() > 39 ? 'yellow' : 'red'}>
                {convertLikeRatio() + "%"}
            </Badge>
        </HStack>
    );
}

export default LikeRatio
