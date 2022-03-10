import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore } from '../../shared/firebase';

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
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post'); //firebase 이름이 post로 설정했잖아

    postDB.get().then(docs => {
      docs.forEach(doc => {
        console.log(doc.id, doc.data()); //doc.id : yF89rAzAipeggY3CFQEi

        let _post = {
          id: doc.id,
          ...doc.data(),
        };

        let post = {
          id: doc.id,
          user_info: {
            user_name: _post.user_name,
            user_profile: _post.user_profile,
          },
          image_url: _post.image_url,
          contents: '닥스네요',
          comment_cnt: _post.comment_cnt,
          insert_dt: _post.insert_dt,
        };
      });
    });
  };
};

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
  getPostFB,
};

export { actionCreators };
