import react, { useRef } from 'react';

const Upload = props => {
  const fileInput = useRef();
  const selectFile = e => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files);
  };

  return (
    <>
      <input type="file" onChange={selectFile} />
    </>
  );
};

export default Upload;
