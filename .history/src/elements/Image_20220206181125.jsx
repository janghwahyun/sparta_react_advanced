import React from 'react';
import styled from 'styled-components';

const Image = props => {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles} />;
  }

  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://mean0images.s3.ap-northeast-2amazonaws.com/4,jpeg',
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
