import React, { useRef } from 'react';
import { Button } from '../elements/Index';
import { storage } from './firebase';

import { actionCreators as imageActions } from '../redux/modules/image';
import { useDispatch, useSelector } from 'react-redux';

const Upload = props => {
  const dispatch = useDispatch();
  // const uploading = useSelector(state => {
  //   state.image.uploading;
  // });

  const fileInput = useRef();

  const selectFile = e => {
    // e.target은 input이죵?
    // input이 가진 files 객체를 살펴봅시당
    console.log(e);
    console.log(e.target);
    // input이 실제로 작동하는지 확인, 선택한 파일이 어떻게 저장되는지 봅시당
    console.log(e.target.files);

    // ref로 확인해 봅시다
    console.log(fileInput.current.files[0]);
  };

  // 이미지를 가지고 storage에 저장해주는 친구임.
  const uploadFB = () => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert('파일을 선택해 주세요');
      return;
    }
    dispatch(imageActions.uploadImageFB(fileInput.current.files[0]));

    // let image = fileInput.current?.files[0]; // 옵셔널 체이닝
    // let storageRef = storage.ref();
    // let uploadLocation = storageRef.child(`images/ + '${image.name}'`);
    // let uploadWork = uploadLocation.put(image);

    // const _upload = storage.ref(`images/${image.name}`).put(image);
    // const _upload = storage.ref().child(`images/${image.name}`).put(image);

    // 업로드!!
    // uploadWork.then(snapshot => {
    //   console.log(snapshot);

    // 업로드한 파일의 다운로드 경로를 가져오자!
    //   snapshot.ref.getDownloadURL().then(url => {
    //     console.log(url);
    //   });
    // });
  };

  return (
    <>
      <input type="file" ref={fileInput} onChange={selectFile} />
      <Button _onClick={uploadFB}>업로드 하기</Button>
    </>
  );
};

export default Upload;
