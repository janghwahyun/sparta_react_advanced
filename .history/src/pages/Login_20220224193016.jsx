import React, { useState } from 'react';

import { Button, Grid, Input, Text } from '../elements/Index';
import { deleteCookie, getCookie, setCookie } from '../shared/Cookie';
//리덕스 액션 훅을 dispatch로 실행
import { useDispatch } from 'react-redux';
//액션 함수 가져와야지
import { actionCreators as userActions } from '../redux/modules/user';
import { emailCheck } from '../shared/Common';

const Login = props => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const login = () => {
    //solbel.tistory.com/375 [개발자의 끄적끄적]

    //인간적으로 빈칸은 알려주자
    if (id === '' || pwd === '') {
      window.alert('응? 아이디나 비번 공백인디?');
      return;
    }
    if (!emailCheck(id)) {
      window.alert('이메일 형식이 맞지 않습니다');
      return;
    }

    dispatch(userActions.loginFB(id, pwd)); //{id, pwd}-> x
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
            type="password"
            _onChange={e => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log('로그인 했네');
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
