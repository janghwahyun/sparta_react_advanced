import React, { useState } from 'react';
import { Button, Input, Image, Text, Grid } from '../elements/Index';
import Upload from '../shared/Upload';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
// import { useNavigate } from 'react-router-dom';

const PostWrite = props => {
  const dispatch = useDispatch();
  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };
  //App.js에서 is_login이 세션의 유무를 체크했으니 여기서는 그냥 is_login만 체크함
  const is_login = useSelector(state => state.user.is_login);
  // const navigate = useNavigate();
  const { history } = props;

  const [contents, setContents] = useState('');

  const changeContents = e => {
    setContents(e.target.value);
  };

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="20px" center>
        <Text size="30px" bold>
          로그인 후 사용 가능함
        </Text>
        <Button
          _onClick={() => {
            history.replace('/'); //history.push()는 뒤로 가기 하면 다시 글쓰기 페이지로 가지만 replace는 페이지를 갈아끼워서 뒤로 가기눌러도 글쓰기로 돌아가지 않는다
          }}
        >
          로그인 페이지로 이동해여
        </Button>
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
        <Input _onChange={changeContents} placeholder="게시글 작성" labal="게시글 내용" multiLine />
      </Grid>
      <Grid padding="16px">
        <Button
          _onClick= {
            addPost;
          }
        >
          게시글 작성
        </Button>
      </Grid>
    </>
  );
};

export default PostWrite;
