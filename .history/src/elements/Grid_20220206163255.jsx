import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

const Grid = props => {
	//props로 설정한 값 가져와야 겠지
	const {is_flex, width, padding, margin, bg, children}= props;

	const styles ={
		is_flex: is_flex,
		width: width,
		paddiing: padding,
		margin: margin,
		bg: bg,
	};

  return <React.Fragment>
	  <GridBox {...styles}>{children}<GridBox/>
  </React.Fragment>;
}
//chidren은 스타일을 담당하는 애가 아니니까, 스타일담당을 따로 변수에 저장
Grid.defaultProps = {
	children: null,
	is_flex: false,
	width: 100%,
	padding: false,
	margin: false,
	bg: false,
};

const GridBox = styled.div`
width:${(prop)=>{this.props.width}};
height: 100%;
box-sizing: border-box;
${(props)=>{props.padding? `${props.padding}`:""}};
${(props)=>{props.margin? `${props.margin}`:""}};
${(props)=>{props.bg? `${props.bg}`:""}};
${(props)=>{props.is_flex? `display:flex; align-items: center; justify-content: space-between;`:""}};

`;
export default Grid;
