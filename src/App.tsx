import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CommentsGrid from './components/PostsGrid';

function App() {
    return (
        <Grid 
            templateAreas={{
                base: `"nav" "main"`,
                md: `"nav nav" "aside main"` // > 768px
            }}>
            <GridItem area={"nav"}>
                <NavBar></NavBar>
            </GridItem>

            <Show above='md'>
                <GridItem area={"aside"}>
                    Aside
                </GridItem>
            </Show>

            <GridItem area={"main"}>
                <CommentsGrid></CommentsGrid>
            </GridItem>
        </Grid>
    );
}

export default App
