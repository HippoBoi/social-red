import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
    return (
        <Grid 
            templateAreas={{
                base: `"nav" "main"`,
                md: `"nav nav" "aside main"` // > 768px
            }}>
            <GridItem bg={"blueviolet"} area={"nav"}>Nav</GridItem>
            <Show above='md'>
                <GridItem bg={"gold"} area={"aside"}>Aside</GridItem>
            </Show>
            <GridItem bg={"red"} area={"main"}>Main</GridItem>
        </Grid>
    );
}

export default App
