import React from 'react';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const PostList = props => {
  const post_list = useSelector(state => state.post.list);

  console.log(post_list);

  React.useEffect(() => {
    dispatchEvent(postActions.getPostFB());
  }, []); // 빈배열이 들어가야 한번만 불러오지

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
