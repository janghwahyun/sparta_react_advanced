import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Text, Button } from '../elements/Index';
import { actionCreators as userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { apiKey } from '../shared/firebase';

//useSelect도 훅이죠~ 스토어에 있는값가져와서 쓸 수 있게 만드는 친구.
const Header = props => {
  const dispatch = useDispatch();

  const is_login = useSelector(state => state.user.is_login);
  const _session_Key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  
  const is_session = sessionStorage.getItem(_session_Key); ? true : false;
  
  // console.log(_session_Key);
  // console.log(sessionStorage.getItem(_session_Key));

  // const [is_login, setIsLogin] = useState(false); //처음은 로그인 안했다 -> false
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

  if (is_login && is_session ) {
    return (
      <React.Fragment>
        <Grid is_flex padding="30px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              헬로
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="MY PROFILE"></Button>
            <Button text="알람"></Button>
            <Button
              text="LOGOUT"
              _onClick={() => {
                dispatch(userActions.logOut({}));
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
              안녕 하이 반가워
            </Text>
          </Grid>

          <Grid is_flex>
            <Button
              text="로그인"
              _onClick={() => {
                history.push('/login');
              }}
            ></Button>
            <Button
              text="회원가입"
              _onClick={() => {
                history.push('/signup');
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
};

Header.defaultProps = {};

export default Header;
