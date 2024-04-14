import { Button, HStack, List, ListItem, Text } from "@chakra-ui/react";
import useUsers from "../hooks/useUsers"
import UserIconList from "./UserIconList";
import UserListSkeleton from "./UserListSkeleton";

interface Props {
    selectedUserId: number;
    onClickUser: (userId: number) => void;
}

const UsersList = ({ selectedUserId, onClickUser }: Props) => {
    const { data: users, loading, error } = useUsers();
    const tenUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    if (error) return <List></List>;

    return (
        <List>
        {loading === true && (
            tenUsers.map((skeleton) => (
                <ListItem key={skeleton} paddingY={2}>
                    <UserListSkeleton></UserListSkeleton>
                </ListItem>
            ))
        )}
        
        {users.map((user) => (
            <ListItem key={user.id} paddingY={2}>
                <HStack>
                    <UserIconList userId={user.id}></UserIconList>
                    <Button 
                        onClick={() => onClickUser(user.id)} 
                        variant={"link"}
                        fontWeight={user.id === selectedUserId ? "bold" : "normal"}>
                        {user.username}
                    </Button>
                    <Text as={"b"} color={"gray.500"}>{"#" + user.id}</Text>
                </HStack>
            </ListItem>
        ))}
        <ListItem key={11} paddingY={2}>
            <HStack>
                <UserIconList userId={11}></UserIconList>
                <Button 
                    onClick={() => onClickUser(11)} 
                    variant={"link"}
                    fontWeight={selectedUserId === 11 ? "bold" : "normal"}>
                    {"Unregistered"}
                </Button>
                <Text as={"b"} color={"gray.500"}>{"#" + 11}</Text>
            </HStack>
        </ListItem>

        </List>
    );
}

export default UsersList
