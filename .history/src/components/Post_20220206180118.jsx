import React from 'react';
import Grid from '../elements/Grid';
import Image from '../elements/Image';

const Post = props => {
  console.log(props);
  return (
    <>
      <Grid margin="40px">
        <Grid is-flex>
          <Image shape="circle" src={this.props.src} />
        </Grid>
        <div>쥴리</div>
        <div>가루</div>
        <div>대두</div>
      </Grid>
    </>
  );
};

// props가 없어져 깨짐을 방지
Post.defaultProps = {
  user_info: {
    user_name: '기본',
    user_profile: 'https://t1.daumcdn.net/cfile/blog/223BD84755926EC207',
  },
  image_url: 'https://t1.daumcdn.net/cfile/blog/223BD84755926EC207',
  contents: '닥스네요',
  comment_cnt: 10,
  insert_dt: '2022-02-06 14:00:00',
};

export default Post;
