import React, { useState } from 'react';
import { Grid, Text, Button } from '../elements/Index';
import { deleteCookie, getCookie } from '../shared/Cookie';

const Header = props => {
  const [is_login, setIsLogin] = useState(false); //처음은 로그인 안했다 -> false

  React.useEffect(() => {
    let cookie = getCookie('user_id');
    console.log(cookie);
    //state 업데이트
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

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
            <Button text="로그아웃"></Button>
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
