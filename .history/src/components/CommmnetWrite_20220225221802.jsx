import React from 'react';
import Grid from '../elements/Grid';
import { Button, Image, Input, Text } from '../elements/Index';

const CommentWrite = () => {
  return (
    <>
      <Grid is_flex>
        <Input placeholder="댓글 내용을 입력해 주세요 :)"> </Input>
        <Button>작성</Button>
      </Grid>
    </>
  );
};

export default CommentWrite;
