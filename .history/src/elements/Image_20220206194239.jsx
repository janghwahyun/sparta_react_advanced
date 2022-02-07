import React from 'react';
import styled from 'styled-components';

const Image = props => {
  console.log(props);
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles} />;
  }
  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://ae01.alicdn.com/kf/HTB1N9lROXXXXXajXFXXq6xXFXXXQ/-.jpg',
  size: 1000,
};
// div를 2개 만들어 반응형을 고려한다.
const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${props => props.src}');
  background-size: cover;
`;

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
