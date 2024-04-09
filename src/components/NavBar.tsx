import logo from '../assets/Logo/logo2.png';
import { HStack, Image, Text } from '@chakra-ui/react';
import SwitchTheme from './SwitchTheme';

const NavBar = () => {
    return (
        <HStack justifyContent={"space-between"}>
            <Image margin={"10px"} src={logo} boxSize='60px'></Image>
            <Text color={'purple.200'} fontSize={"2xl"} as={"b"}>la red más social de todas</Text>
            <SwitchTheme></SwitchTheme>
        </HStack>
    )
}

export default NavBar
