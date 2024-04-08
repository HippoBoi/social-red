import useData from "./useData";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const usePosts = (selectedUser: string) => useData<Post>("/posts", {params: { selectUser: selectedUser }}, [selectedUser]);

export default usePosts;