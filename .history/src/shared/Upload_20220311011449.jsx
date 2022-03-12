import react from 'react';

const Upload = props => {
  const selectFile = e => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files);
  };

  return (
    <>
      <input type="file" />
    </>
  );
};

export default Upload;
