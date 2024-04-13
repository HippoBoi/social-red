import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    orderSelected: string
    onClicked: (order: string) => void;
}

const SortOrder = ({ orderSelected, onClicked }: Props) => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}>
                    {"Order By: " + orderSelected}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onClicked("Most Recent")}>Most Recent</MenuItem>
                <MenuItem onClick={() => onClicked("Most Popular")}>Most Popular</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortOrder
