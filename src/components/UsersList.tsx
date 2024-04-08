import { Button, HStack, List, ListItem, Text } from "@chakra-ui/react";
import useUsers from "../hooks/useUsers"
import UserIconList from "./UserIconList";
import UserListSkeleton from "./UserListSkeleton";

interface Props {
    onClickUser: (userId: string) => void;
}

const UsersList = ({ onClickUser }: Props) => {
    const { data: users, loading, error } = useUsers();
    const tenUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    if (error) return;

    return (
        <List marginY={"50px"}>
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
                    <UserIconList user={user.username}></UserIconList>
                    <Button onClick={() => onClickUser(user.username)} variant={"link"}>{user.username}</Button>
                    <Text as={"b"} color={"gray.500"}>{"#" + user.id}</Text>
                </HStack>
            </ListItem>
        ))}
        </List>
    );
}

export default UsersList
