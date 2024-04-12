import useUsers from '../hooks/useUsers';
import { Text } from '@chakra-ui/react';

interface Props {
    userId: number;
}

const NameMapped = ({userId}: Props) => {
    const { data: users } = useUsers();
    const namesMap: { [key: number]: string } = {
        0: "None",
        1: "Bret",
        2: "Antonette",
        3: "Samantha",
        4: "Karienne",
        5: "Kamren",
        6: "Leopoldo_Corkery",
        7: "Elwyn.Skiles",
        8: "Maxime_Nienow",
        9: "Delphine",
        10: "Moriah.Stanton",
        11: "Unregistered"
    };
    
    return (
        <Text>{namesMap[userId]}</Text>
    );
}

export default NameMapped
