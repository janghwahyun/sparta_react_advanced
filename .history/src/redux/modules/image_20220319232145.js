// upload에 있는 image업로드 url 리덕스에서 공유하자
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import { storage } from '../../shared/firebase';

// actions 필요한 액션 만들어 주고
const UPLOADING = 'UPLOADING';
const UPLOADING_IMAGE = 'UPLOADING_IMAGE';

//action creators
const uploading = createAction(UPLOADING, uploading => {
  uploading;
});
const uploading_image = createAction(UPLOADING_IMAGE, image_url => {
  image_url;
});

// 이 리듀서에 작성될 initialstate

const initialstate = {
  image_url: '',
  uploading: false,
};

// firestore에 input저장 추가 함수
function uploadingFB(image) {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true));

    console.log(`images/{$new Date().getTime()}_${image.name}`);
    const _upload = storage.ref(`image/${image.name}`).put(image);

    // 업로드!!
    _upload
      .then(snapshot => {
        console.log(snapshot);

        //업로드한 파일의 다운로드 경로를 가져오자!
        snapshot.ref.getDownloadURL().then(url => {
          console.log(url);
          dispatch(uploadImage(url));
        });
      })
      .catch(err => {
        dispatch(uploading(false));
      });
  };
}

// reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, draft => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, draft => {
        draft.image_url = action.payload.uploading;
      }),
  },
  initialstate
);

// actionCreators
const actionCreators = {
  uploadImage,
  uploadImageFB,
};

export { actionCreators };
