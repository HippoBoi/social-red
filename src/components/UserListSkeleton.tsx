import { Card, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const UserListSkeleton = () => {
    return (
        <Skeleton height={"30px"} width={"200px"} overflow={"hidden"} borderRadius={10}>
            <Card>
                <SkeletonText />
            </Card>
        </Skeleton>
    );
}

export default UserListSkeleton;
