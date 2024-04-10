import React from 'react'
import { User } from '../hooks/useUsers'
import { FaPlaystation, FaXbox, FaAppStore, FaLinux, FaAndroid, FaApple } from 'react-icons/fa'
import { BsGlobe, BsGlobeAmericas, Bs2Circle, BsSquareFill } from 'react-icons/bs'
import { Icon, HStack, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    userId: number;
}

const UserIconList = ({ userId }: Props) => {
    const userMap: { [key: number]: IconType } = {
        1: FaXbox,
        2: Bs2Circle,
        3: BsSquareFill,
        4: FaAndroid,
        5: FaLinux,
        6: FaAppStore,
        7: BsGlobe,
        8: BsGlobeAmericas,
        9: FaPlaystation,
        10: FaApple
    };

    return (
        <>
        <HStack>
            <Icon as={userMap[userId]} color={'purple.300'}></Icon>
        </HStack>
        </>
    );
}

export default UserIconList
