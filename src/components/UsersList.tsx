import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import useUsers from "../hooks/useUsers"
import UserIconList from "./UserIconList";

const UsersList = () => {
    const { data: users } = useUsers();

    return (
        <List marginY={"50px"}>
        {users.map((user) => (
            <ListItem key={user.id} paddingY={2}>
                <HStack>
                    <UserIconList user={user.username}></UserIconList>
                    <Text>{user.username}</Text>
                    <Text as={"b"} color={"gray.500"}>{"#" + user.id}</Text>
                </HStack>
            </ListItem>
        ))}
        </List>
    );
}

export default UsersList
