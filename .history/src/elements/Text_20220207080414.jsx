import React from 'react';
import styled from 'styled-components';



const Text = (props) => {
	
	const {children, bold, color, size} =props;

	<></>	
	return (
		
	)
};

Text.defaultProps = {
	children : null,
	bold:false,
	color:' #ff00c8',
	size: '14px',
};

const P = styled.p`
	color: ${props => props.color};
	font-size: ${props => props.size};
	color: ${props => props.color};
`;


export default Text;