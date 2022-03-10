import React from 'react';
import { Button, Input, Image, Text, Grid } from '../elements/Index';
import Upload from '../shared/Upload';
import { useSelector, useDispatch } from 'react-redux';

const PostWrite = props => {
  //App.js에서 is_login이 세션의 유무를 체크했으니 여기서는 그냥 is_login만 체크함
  const is_login = useSelector(state => {
    state.user.is_login;
  });
  const { history } = props;

  return (
    <>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            미리보기
          </Text>
        </Grid>

        <Image shape="rectangle" />
      </Grid>

      <Grid padding="16px">
        <Input placeholder="게시글 작성" labal="게시글 내용" multiLine />
      </Grid>
      <Grid padding="16px">
        <Button>게시글 작성</Button>
      </Grid>
    </>
  );
};

export default PostWrite;
