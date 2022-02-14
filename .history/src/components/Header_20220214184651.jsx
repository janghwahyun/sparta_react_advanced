import React, { useState } from 'react';
import { useSelector, use } from 'react-redux';
import { Grid, Text, Button } from '../elements/Index';
import { deleteCookie, getCookie } from '../shared/Cookie';

//useSelect도 훅이죠~ 스토어에 있는값가져와서 쓸 수 있게 만드는 친구.

const Header = props => {
  const [is_login, setIsLogin] = useState(false); //처음은 로그인 안했다 -> false
  const is_login = useSelector(state => {
    state.user.is_login;
  });
  // useSelector가 useEffect친구들을 대신함.
  // React.useEffect(() => {
  //   let cookie = getCookie('user_id');

  //   //state 업데이트
  //   if (cookie) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // });

  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="30px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              헬로
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button text="알림"></Button>
            <Button
              text="로그아웃"
              _onCick={() => {
                deleteCookie('user_id'); //막상 가서 누르면 쿠키가 지워졌다고 컴포넌트닥 rendering되는 것이 아님.
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid is_flex padding="30px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              헬로
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="로그인"></Button>
            <Button text="회원가입"></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
};

Header.defaultProps = {};

export default Header;
