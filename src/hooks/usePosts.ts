import useData from "./useData";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const usePosts = (selectedUserId: number, searchMsg: string) => 
    useData<Post>("/posts", {
        params: { 
            selectedId: selectedUserId,
            search: searchMsg
         }
    }, 
    [selectedUserId]);

export default usePosts;