/** @format */

import React from 'react';
import styled from 'styled-components';
import ConstructionOverlay from '../components/ConstructionOverlay';

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	height: 50vh;
	h1 {
		font-family: 'Urbanist', sans-serif;
		font-size: 45px;
		color: black;
		font-weight: 300;
		text-transform: uppercase;
	}
`;

export default function Details() {
	const underConstruction = false;
	return (
		<>
			{underConstruction ? (
				<ConstructionOverlay page={'details'} />
			) : (
				<Title>
					<h1>Details</h1>
				</Title>
			)}
		</>
	);
}
