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
  src:
    'https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfMTc4/MDAxNTE2NTIzNTA3MTM4.GUtpNrCumhvtJ7PR_FvSnY2DpYq9zjfoRTW0h1RCnZ0g.kJN5VKZmakd8MwSvFXcP3bCLN9Tvo4rIAJkfc_oDgmUg.JPEG.dodami1/20180114_164631.jpg?type=w800',
  size: 40,
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
  margin: 10px;
`;

export default Image;
