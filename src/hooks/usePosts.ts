import useData from "./useData";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const usePosts = (selectedUserId: number) => useData<Post>("/posts", {params: { selectedId: selectedUserId }}, [selectedUserId]);

export default usePosts;