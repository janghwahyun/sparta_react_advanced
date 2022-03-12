import react, { useRef } from 'react';

const Upload = props => {
  const fileInput = useRef();

  const selectFile = e => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files);

    // input이 실제로 작동하는지 확인
    console.log(fileInput.current.files);
  };

  return (
    <>
      <input type="file" onChange={selectFile} ref={fileInput} />
    </>
  );
};

export default Upload;
