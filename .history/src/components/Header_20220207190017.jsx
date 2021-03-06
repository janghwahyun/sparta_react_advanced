import React from 'react';
import { Grid, Text, Button } from '../elements/Index';

const Header = props => {
  return (
    <React.Fragment>
      <Grid is_flex>
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
};

Header.defaultProps = {};

export default Header;
