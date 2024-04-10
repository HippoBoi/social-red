import { Button, Menu, MenuButton, MenuItem, MenuList, Stack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from "react-icons/bs"
import useUsers, { User } from '../hooks/useUsers';
import NameMapped from './NameMapped';

interface Props {
    selectedId: number;
    onSortCliked: (clickedUser: number) => void;
}

const OrderList = ({ selectedId, onSortCliked }: Props) => {
    const { data: users, error } = useUsers();

    if (error) return null;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}>
                    <NameMapped userId={selectedId}></NameMapped>
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSortCliked(0)}>None</MenuItem>
                {users.map((user) => (
                    <MenuItem 
                        key={user.id}
                        onClick={() => onSortCliked(user.id)}>
                        {user.username}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default OrderList
