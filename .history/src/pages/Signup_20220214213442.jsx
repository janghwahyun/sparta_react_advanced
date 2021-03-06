import React from 'react';
import Header from '../components/Header';
import { Grid, Text, Input, Button } from '../elements/Index';

import { dispatch } from 'react-redux';

const Signup = props => {
  return (
    <React.Fragment>
      <Header />
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            s
            placeholder="아이디를 입력해주세요."
            _onChange={() => {
              console.log('!!');
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={() => {
              console.log('!!');
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={() => {
              console.log('!!');
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={() => {
              console.log('!!');
            }}
          />
        </Grid>

        <Button text="회원가입하기" _onClick={}></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
