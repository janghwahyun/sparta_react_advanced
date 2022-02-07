import React from 'react';
import styled from 'styled-components';

const Image = props => {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://t1.daumcdn.net/cfile/blog/223BD84755926EC207',
  size: 36,
};

const ImageCircle = styled.div`
  //css에서도 변수선언 가능
  --size: ${props => props.size}px;
  width: var(---size);
  height: var(---size);

  border-radius: var(---size);
  background-image: url('${props => props.src}');
  background-size: cover;
  margin: 4px;
`;

export default Image;
