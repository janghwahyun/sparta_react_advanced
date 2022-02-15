import React, { useState } from 'react';
import Header from '../components/Header';
import { Grid, Text, Input, Button } from '../elements/Index';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Signup = props => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd_check, setPwd_Check] = useState('');
  const [user_name, setUserName] = useState('');

  const dispatch = useDispatch();

  if (pwd !== pwd_check) {
    return; //패스워드 다르면 이거 실행 안한다.
  }

  const signUp = () => {
    dispatch(userActions.signupFB(id, pwd, user_name));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요." //이메일 형식 아니면 안받야지
            _onChange={e => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요." //빈칸이면 안넘어가야지
            _onChange={e => {
              setUserName(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요." //비밀번호 다르면 안넘어가야지
            _onChange={e => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={e => {
              setPwd_Check(e.target.value);
            }}
          />
        </Grid>

        <Button text="회원가입하기" _onClick={signUp()}></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
