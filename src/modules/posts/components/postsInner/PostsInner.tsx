import {FC} from 'react';

import type { PostsInnerProps } from './type';

import style from "./style.module.scss"

const {postsList} = style

const PostsInner:FC<PostsInnerProps> = ({children}) => {
    return (
        <ul className={postsList}>
            {children}
        </ul>
    );
}

export default PostsInner;
