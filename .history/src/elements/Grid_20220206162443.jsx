import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

const Grid = props => {
	//props로 설정한 값 가져와야 겠지
	const {is_flex, width, padding, margin, bg}= props;
  return <React.Fragment></React.Fragment>;
}

Grid.defaultProps = {
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

`;
export default Grid;
