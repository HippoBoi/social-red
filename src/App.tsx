import './App.css'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import PostsGrid from './components/PostsGrid';
import UsersList from './components/UsersList';
import { useState } from 'react';
import OrderList from './components/OrderList';
import SortOrder from './components/SortOrder';

function App() {
    const [selectedName, setSelectedName] = useState("Users");
    const [ selectedOrder, setSelectedOrder ] = useState("Most Recent");

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
                    <UsersList selectedUser={selectedName} onClickUser={(userName) => setSelectedName(userName)}></UsersList>
                </GridItem>
            </Show>

            <GridItem area={"main"}>
                <HStack marginX={"30px"} spacing={5}>
                    <OrderList selectedName={selectedName} onSortCliked={(clickedUser) => setSelectedName(clickedUser)} />
                    <SortOrder orderSelected={selectedOrder} onClicked={(order) => setSelectedOrder(order)}></SortOrder>
                </HStack>
                <PostsGrid selectedName={selectedName}></PostsGrid>
            </GridItem>
        </Grid>
    );
}

export default App
