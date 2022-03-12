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

  return (
    <>
      <input type="file" onChange={selectFile} ref={fileInput} />
      <Button>업로드 하기</Button> // firestore 업로드하기
    </>
  );
};

export default Upload;
