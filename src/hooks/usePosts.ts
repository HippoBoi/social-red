import useData from "./useData";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const usePosts = () => useData<Post>("/posts");

export default usePosts;