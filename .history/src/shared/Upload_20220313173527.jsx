import react, { useRef } from 'react';
import { Button } from '../elements';
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
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert('파일을 선택해 주세요');
      return;
    }

    dispatchEvent(imageActions.uploadImageFB(fileInput.current.files[0]));
    // let image = fileInput.current.files[0];
    // const _upload = storage.ref(`images/${image.name}`).put();
  };

  return (
    <>
      <input type="file" onChange={selectFile} ref={fileInput} />

      <Button _onClick={uploadFB}>업로드 하기</Button>
    </>
  );
};

export default Upload;
