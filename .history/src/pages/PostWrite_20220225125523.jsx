import React from 'react';
import { Button, Input, Image, Text, Grid } from '../elements/Index';

const PostWrite = props => {
  return (
    <>
      <Grid>
        <Text margin="0px" size="36px" bold>
          write text
        </Text>
        <input type="file"></input>
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            미리보기
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

export default PostWrite;
