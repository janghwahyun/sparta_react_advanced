import React from 'react';
import styled from 'styled-components';
import React from 'react';


const Image = (props) => {
	return (
		<React.Fragment>

		</React.Fragment>
	)
};
	

Image.defaultProps ={
	shape: "circle",
	src: "data:image/jpeg;base64,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";
	size: 36,
}

export default Image;