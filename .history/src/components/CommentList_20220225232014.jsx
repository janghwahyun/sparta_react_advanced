import React from 'react';

import { Grid, Image, Text } from '../elements/Index';

const CommentList = () => {
  return (
    <>
      <Grid padding="10px">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </>
  );
};

export default CommentList;

//한파일에 컴포넌트 여러개? 가능함

const CommentItem = () => {
  return (
    <>
      <Grid></Grid>
    </>
  );
};

CommentItem.defalutPropos = {};
