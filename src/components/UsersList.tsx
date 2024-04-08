import useUsers from "../hooks/useUsers"

const UsersList = () => {
    const { data } = useUsers();

    return (
        <ul>
        {data.map((user) => (
            <li key={user.id}>{user.username}</li>
        ))}
        </ul>
    )
}

export default UsersList
