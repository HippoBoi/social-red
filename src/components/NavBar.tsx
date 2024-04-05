import logo from '../GameHub Resources/Logo/logo.webp';
import { HStack, Image, Text } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize='60px'></Image>
            <Text>hola soy la nav barra</Text>
        </HStack>
    )
}

export default NavBar
