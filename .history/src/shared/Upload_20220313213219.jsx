import react, { useRef } from 'react';
import { Button } from '../elements';
import { storage } from './firebase';

const Upload = props => {
  const fileInput = useRef();

  const selectFile = e => {
    // e.target은 input이죵?
    // input이 가진 files 객체를 살펴봅시당
    console.log(e);
    console.log(e.target);
    console.log(e.target.files);

    // input이 실제로 작동하는지 확인, 선택한 파일이 어떻게 저장되는지 봅시당
    console.log(fileInput.current.files[0]);
  };

  // 이미지를 가지고 storage에 저장해주는 친구임.
  const uploadFB = () => {
    let image = fileInput.current.files[0];
    const _upload = storage.ref(`images/${image.name}`).put(image);

    // 업로드!!
    _upload.then(snapshot => {
      console.log(snapshot);
    });
  };

  return (
    <>
      <input type="file" ref={fileInput} onChange={selectFile} ref={fileInput} />

      <Button _onClick={uploadFB}>업로드 하기</Button>
    </>
  );
};

export default Upload;
