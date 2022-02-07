import React from 'react';
// import Grid from '../elements/Grid';
// import Image from '../elements/Image';
// import Text from '../elements/Text';
import { Grid, Image, Text } from '../elements/Index';

const Post = props => {

  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text bold>{props.insert_dt}</Text>
        </Grid>
        <Grid>{props.contents}</Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>

        <Grid>
          <Text bold>댓글 {props.comment_cnt} 개</Text>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};

// props가 없어져 깨짐을 방지(기본 정보를 저장해줌)
Post.defaultProps = {
  user_info: {
    user_name: '기본',
    user_profile:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfMTc4/MDAxNTE2NTIzNTA3MTM4.GUtpNrCumhvtJ7PR_FvSnY2DpYq9zjfoRTW0h1RCnZ0g.kJN5VKZmakd8MwSvFXcP3bCLN9Tvo4rIAJkfc_oDgmUg.JPEG.dodami1/20180114_164631.jpg?type=w800',
  },
  image_url:
    'https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfMTc4/MDAxNTE2NTIzNTA3MTM4.GUtpNrCumhvtJ7PR_FvSnY2DpYq9zjfoRTW0h1RCnZ0g.kJN5VKZmakd8MwSvFXcP3bCLN9Tvo4rIAJkfc_oDgmUg.JPEG.dodami1/20180114_164631.jpg?type=w800',
  contents: '닥스네요',
  comment_cnt: 10,
  insert_dt: '2022-02-06 14:00:00',
};

export default Post;
