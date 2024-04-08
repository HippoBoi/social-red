import useUsers from "../hooks/useUsers"

const UsersList = () => {
    const { users } = useUsers();
    return (
        <ul>
        {users.map((user) => (
            <li key={user.id}>{user.username}</li>
        ))}
        </ul>
    )
}

export default UsersList
