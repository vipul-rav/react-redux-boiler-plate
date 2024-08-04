import { getPostList } from './templates/postList/index.mjs';
import { getPost } from './templates/postList/index.mjs';

export const stubs = {
    '/posts': getPostList,
    '/posts/1': getPost,
};
