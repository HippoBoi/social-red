import { Button, Menu, MenuButton, MenuItem, MenuList, Stack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from "react-icons/bs"
import useUsers, { User } from '../hooks/useUsers';

interface Props {
    selectedName: string;
    onSortCliked: (clickedUser: string) => void;
}

const OrderList = ({ selectedName, onSortCliked }: Props) => {
    const { data: users, error } = useUsers();

    if (error) return null;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}>
                    {selectedName}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSortCliked("Users")}>None</MenuItem>
                {users.map((user) => (
                    <MenuItem 
                        key={user.id}
                        onClick={() => onSortCliked(user.username)}>
                        {user.username}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default OrderList
