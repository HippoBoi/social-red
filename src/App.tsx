import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CommentsGrid from './components/PostsGrid';
import UsersList from './components/UsersList';

function App() {
    return (
        <Grid 
            templateAreas={{
                base: `"nav" "main"`,
                md: `"nav nav" "aside main"` // > 768px
            }}
            templateColumns={{
                base: "1fr",
                md: "200px 1fr"
            }}>
            <GridItem area={"nav"}>
                <NavBar></NavBar>
            </GridItem>

            <Show above='md'>
                <GridItem area={"aside"} padding={5}>
                    <UsersList></UsersList>
                </GridItem>
            </Show>

            <GridItem area={"main"}>
                <CommentsGrid></CommentsGrid>
            </GridItem>
        </Grid>
    );
}

export default App
