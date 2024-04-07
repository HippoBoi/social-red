import { Card, HStack, Image, Text, Heading, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'
import UserIconList from './UserIconList'

const PostSkeleton = () => {
    return (
        <Card>
            <Skeleton height={'290px'}></Skeleton>
        </Card>
    )
}

export default PostSkeleton
