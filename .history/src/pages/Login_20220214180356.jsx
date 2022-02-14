import React from 'react';

import { Button, Grid, Input, Text } from '../elements/Index';
import { deleteCookie, getCookie, setCookie } from '../shared/Cookie';
//리덕스 액션 훅을 dispatch로 실행
import { useDispatch } from 'react-redux';
//액션 함수 가져와야지
import { actionCreators as userActions } from '../redux/modules/user';

const Login = props => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(userActions.logIn({ user_name: 'janghwahyun' }));
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
            _onChange={() => {
              console.log('아이디 입력했어!');
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={() => {
              console.log('패스워드 입력했어!');
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log('로그인 했어!');
            Login();

            // deleteCookie('user_id');
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
