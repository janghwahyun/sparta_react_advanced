import React from 'react';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector(state => state.post.list);

  console.log(post_list);

  // 이미 댓글이 4개가 있고(length가 4)인 상태이니까 새로 불러오지 않음. 리스트에 길이가 있으니까 getpost를 하지 않음
  // getpost를 하지 않으니까 리덕스에서 맨앞에 추가를 해줬다~~ 이해 안감
  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []); // 빈배열이 들어가야 처음에 한번만 불러오지

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
