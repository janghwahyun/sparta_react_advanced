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

  if (!is_login) {
    return (
      <Grid margin="100px 0px">
        <Text size="30px" bold>
          로그인 후 사용 가능함
        </Text>
        <Button
          onclick={() => {
            history.replace('/'); //history.push()는 뒤로 가기 하면 다시 글쓰기 페이지로 가지만 replace는 페이지를 갈아끼워서 뒤로 가기눌러도 글쓰기로 돌아가지 않는다
          }}
        ></Button>
      </Grid>
    );
  }

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
