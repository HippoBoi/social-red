import logo from '../assets/Logo/logo2.png';
import { HStack, Image, Text } from '@chakra-ui/react';
import SwitchTheme from './SwitchTheme';
import SearchBar from './SearchBar';

interface Props {
    onSearched: (searchMsg: string) => void;
}

const NavBar = ({ onSearched }: Props) => {
    return (
        <HStack justifyContent={"space-between"}>
            <Image margin={"10px"} src={logo} boxSize='60px'></Image>
            <SearchBar onSearchSubmit={onSearched}></SearchBar>
            <SwitchTheme></SwitchTheme>
        </HStack>
    );
}

export default NavBar
