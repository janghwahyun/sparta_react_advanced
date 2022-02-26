import React from 'react';
import Post from '../components/Post';
import { useSelector } from 'react-redux';

const PostList = props => {
  const post_list = useSelector(state => {
    state.post.list;
  });

  console.log(list);

  return <Post />;
};

export default PostList;
