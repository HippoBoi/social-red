import logo from '../assets/Logo/logo.webp';
import { HStack, Image, Text } from '@chakra-ui/react';
import SwitchTheme from './SwitchTheme';

const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'}>
            <Image src={logo} boxSize='60px'></Image>
            <SwitchTheme></SwitchTheme>
        </HStack>
    )
}

export default NavBar
