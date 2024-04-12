import './App.css'
import { Grid, GridItem, HStack, Show, Stack, Text } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import PostsGrid from './components/PostsGrid';
import UsersList from './components/UsersList';
import { useState } from 'react';
import OrderList from './components/OrderList';
import SortOrder from './components/SortOrder';
import PostForm from './components/PostForm';
import postsService from './services/posts-service';
import { Post } from './hooks/usePosts';

function App() {
    const [ selectedId, setSelectedId ] = useState(0);
    const [ selectedOrder, setSelectedOrder ] = useState("Most Recent");
    const [ searchMsg, setSearchMsg ] = useState("");

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
                <NavBar onSearched={(msg) => setSearchMsg(msg)}></NavBar>
            </GridItem>

            <Show above='md'>
                <GridItem area={"aside"} padding={5}>
                    <UsersList selectedUserId={selectedId} onClickUser={(userId) => setSelectedId(userId)}></UsersList>
                </GridItem>
            </Show>

            <GridItem area={"main"}>
                <HStack marginX={"30px"} spacing={5}>
                    <OrderList selectedId={selectedId} onSortCliked={(clickedUser) => setSelectedId(clickedUser)} />
                    <SortOrder orderSelected={selectedOrder} onClicked={(order) => setSelectedOrder(order)}></SortOrder>
                </HStack>
                <PostsGrid selectedId={selectedId} searchMsg={searchMsg}></PostsGrid>
            </GridItem>
        </Grid>
    );
}

export default App
