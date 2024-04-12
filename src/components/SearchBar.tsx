import { Button, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { FormEvent, useRef } from 'react'
import { BsSearch } from 'react-icons/bs';

interface Props {
    onSearchSubmit: (searchMsg: string) => void;
};

const SearchBar = ({ onSearchSubmit }: Props) => {
    const searchRef = useRef<HTMLInputElement>(null);

    const onSearch = (event: FormEvent) => {
        event.preventDefault();

        if (searchRef.current) {
            onSearchSubmit(searchRef.current.value);
        }
    }

    return (
        <form onSubmit={(event) => onSearch(event)}>
            <HStack>
            <InputGroup>
                <InputLeftElement>
                    <BsSearch></BsSearch>
                </InputLeftElement>
                <Input ref={searchRef} variant={"filled"} placeholder='Search posts...'></Input>
            </InputGroup>

            <Button type='submit'>
                <BsSearch></BsSearch>
                </Button>
            </HStack>
        </form>
    );
}

export default SearchBar
