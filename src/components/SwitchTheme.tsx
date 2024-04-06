import React from 'react';
import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const SwitchTheme = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack padding={"20px"}>
            <Switch
                colorScheme='yellow' 
                isChecked={colorMode === 'dark'} 
                onChange={toggleColorMode}>
            </Switch>

            <Text>Dark Mode</Text>
        </HStack>
    )
};

export default SwitchTheme;
