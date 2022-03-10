import React from 'react';
import { Button, Input, Image, Text, Grid } from '../elements/Index';
import Upload from '../shared/Upload';

const PostWrite = props => {
  return (
    <>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            미리보기
          </Text>
        </Grid>

        <Image shape="rectangle" />
      </Grid>

      <Grid padding="16px">
        <Input placeholder="게시글 작성" labal="게시글 내용" multiLine />
      </Grid>
      <Grid padding="16px">
        <Button>게시글 작성</Button>
      </Grid>
    </>
  );
};

export default PostWrite;