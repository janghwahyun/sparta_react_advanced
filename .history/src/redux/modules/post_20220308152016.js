import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// 필요한 액션이 뭐가 있는 지 먼저 만들어 주고
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

const setPost = createAction(SET_POST, post_list => ({ post_list }));
const addPost = createAction(ADD_POST, post => ({ post }));

//이 리듀서에 작성될 initialstate
const initialState = { list: [] };

//게시글 하나에 대한 initialstate
const initialPost = {
  id: 0,
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

const getPostFB = () => {
  return function(dispatch, getStatem {history}){
    const postDB = firebase.collection("post"); //firebase 이름이 post
  }
}


export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, draft => {}),

    [ADD_POST]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
};

export { actionCreators };
