import react, { useRef } from 'react';
import { Button } from '../elements';
const Upload = props => {
  const fileInput = useRef();

  const selectFile = e => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files);

    // input이 실제로 작동하는지 확인
    console.log(fileInput.current.files[0]);
  };

  // 이미지를 가지고 storage에 저장해주는 친구임.
  const uploadFB = () => {};

  return (
    <>
      <input type="file" onChange={selectFile} ref={fileInput} />

      <Button _onClick={uploadFB}>업로드 하기</Button>
    </>
  );
};

export default Upload;
