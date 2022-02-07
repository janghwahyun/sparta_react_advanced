import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

const Grid = props => {
  return <React.Fragment></React.Fragment>;
}

Grid.defaultProps = {
	is_flex: false,
	width: 100%,
	padding: false,
	margin: false,
	bg: false,
};
export default Grid;
