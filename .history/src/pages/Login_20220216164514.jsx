import React, { useState } from 'react';

import { Button, Grid, Input, Text } from '../elements/Index';
import { deleteCookie, getCookie, setCookie } from '../shared/Cookie';
//리덕스 액션 훅을 dispatch로 실행
import { useDispatch } from 'react-redux';
//액션 함수 가져와야지
import { actionCreators as userActions } from '../redux/modules/user';

const Login = props => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const login = (id, pwd) => {
    //인간적으로 빈칸은 알려주자
    if (id === '' || pwd === '') {
      window.alert('응? 아이디나 비번 공백인디?');
      return;
    }
    dispatch(userActions.loginFB({}));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={e => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={() => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            login();

            // deleteCookie('user_id');
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
