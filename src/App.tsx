import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import PostsGrid from './components/PostsGrid';
import UsersList from './components/UsersList';
import { useState } from 'react';

function App() {
    const [curUser, setCurUser] = useState("");

    const changeCurUser = (userName: string) => {
        if (curUser !== userName) {
            setCurUser(userName);
        }
        else {
            setCurUser("");
        }
    }

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
                    <UsersList selectedUser={curUser} onClickUser={(userName) => changeCurUser(userName)}></UsersList>
                </GridItem>
            </Show>

            <GridItem area={"main"}>
                <PostsGrid selectedUser={curUser}></PostsGrid>
            </GridItem>
        </Grid>
    );
}

export default App
