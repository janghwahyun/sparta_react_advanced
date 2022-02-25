// 게시글 작성하는 page // 1.포스트 사진 2.댓글 인풋창 3.댓글 저장

import React from 'react';
import CommentList from '../components/CommentList';
import CommentWrite from '../components/CommmnetWrite';
import Post from '../components/Post';

const PostDetail = props => {
  return (
    <>
      <Post />
      <CommentWrite />
      <CommentList />
    </>
  );
};

export default PostDetail;
