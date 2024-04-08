import { Card, Skeleton } from '@chakra-ui/react'

const PostSkeleton = () => {
    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Skeleton height={'290px'}></Skeleton>
        </Card>
    )
}

export default PostSkeleton
