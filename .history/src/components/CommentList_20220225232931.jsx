import React from 'react';

import { Grid, Image, Text } from '../elements/Index';

const CommentList = props => {
  return (
    <>
      <Grid padding="16px">
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

const CommentItem = props => {
  const { user_profile, user_name, user_id, post_id, insert_dt } = props;
  return (
    <>
      <Grid is_flex>
        <Grid is_flex>
          <Image shape="circle"></Image>
          <Text bold color="black">
            {user_name}
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

CommentItem.defalutProps = {
  user_profile: '',
  user_name: 'df',
  user_id: '',
  post_id: 1,
  insert_dt: '2022-02-02 21:00:00',
};
