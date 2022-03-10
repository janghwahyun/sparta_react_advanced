import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore } from '../../shared/firebase';
import PostList from '../../pages/PostList';

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
      let post_list = [];

      docs.forEach(doc => {
        // console.log(doc.id, doc.data()); //doc.id : yF89rAzAipeggY3CFQEi

        //밑에 postlist보다 좀 더 JS스럽게~~~
        let _post = doc.data();

        // ['comment_cnt, 'contents', ...] , 배열이 되었으면 내장함수를 사용할 수 있지
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf('user_') !== -1) {
              return { ...acc, user_info: { ...acc.user_info, [cur]: _post[cur] } };
            }

            return { ...acc, [cur]: _post[cur] }; // [cur]: 변수안에 키값 , _post[cur] : 밸류값
          },

          { id: doc.id, user_infp: {} }
        ); // user_info로 묶어줘야하는 정보는???

        // let _post = {
        //   id: doc.id,
        //   ...doc.data(),
        // };

        // // 이렇게 만든 친구를 setpost로 넘길거임 ->
        // let post = {
        //   id: doc.id,
        //   user_info: {
        //     user_name: _post.user_name,
        //     user_profile: _post.user_profile,
        //   },
        //   image_url: _post.image_url,
        //   contents: _post.contents,
        //   comment_cnt: _post.comment_cnt,
        //   insert_dt: _post.insert_dt,
        // };

        // post_list.push(post);
      });

      console.log(post_list);

      dispatch(setPost(post_list)); // setpost액션이 실행시켜줘야지
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, draft => {
        // daft에 리스트를 갈아끼울거야???? 이걸하면 nextstate상태값이 바뀌네>?? 왜??
        draft.list = action.payload.post_list;
      }),

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
