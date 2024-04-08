import React from 'react'
import { User } from '../hooks/useUsers'
import { FaPlaystation, FaXbox, FaAppStore, FaLinux, FaAndroid, FaApple } from 'react-icons/fa'
import { BsGlobe, BsGlobeAmericas, Bs2Circle, BsSquareFill } from 'react-icons/bs'
import { Icon, HStack, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    user: string;
}

const UserIconList = ({ user }: Props) => {
    const userMap: { [key: string]: IconType } = {
        Bret: FaXbox,
        Antonette: Bs2Circle,
        Samantha: BsSquareFill,
        Karianne: FaAndroid,
        Kamren: FaLinux,
        Leopoldo_Corkery: FaAppStore,
        "Elwyn.Skiles": BsGlobe,
        Maxime_Nienow: BsGlobeAmericas,
        Delphine: FaPlaystation,
        "Moriah.Stanton": FaApple
    };

    return (
        <>
        <HStack>
            <Icon as={userMap[user]} color={'purple.300'}></Icon>
        </HStack>
        </>
    );
}

export default UserIconList
