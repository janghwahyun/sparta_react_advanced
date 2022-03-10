import React from 'react';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';

const PostList = props => {
  const post_list = useSelector(state => state.post.list);

  console.log(post_list);

  React.useEffect(() => {}, []);

  return (
    <>
      {/* <Post  /> */}
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p} />;
      })}
    </>
  );
};

export default PostList;
