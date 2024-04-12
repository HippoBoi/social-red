import { Post } from "../hooks/usePosts";
import apiClient from "./api-client";

class PostsService {
    getAllPosts() {
        const controller = new AbortController();
        const request = apiClient.get<Post[]>("/posts", {signal: controller.signal});

        return ({ request, cancel: () => controller.abort });
    };

    newPost(newPost: Post) {
        return apiClient.post("/posts", newPost);
    };
};

export default new PostsService;