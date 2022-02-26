import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

//필요한 액션이 뭐가 있는 지 먼저 만들어 주고
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

const setPost = createAction(SET_POST, post_list => ({ post_list }));
const addPost = createAction(ADD_POST, post => ({ post }));

const initialState = { list: [],
}
// ! :) const initialPost = {
user_info: { id: 0,
user_name: "mean0",
user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg", },
image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg", contents: " !",
comment_cnt: 10,