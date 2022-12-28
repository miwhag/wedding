/** @format */

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const FullWidth = styled(Button)<ButtonProps>(({ theme }) => ({
	maxWidth: '500px',
	width: '100%',
	backgroundColor: '#242424',
	height: '50px',
	borderRadius: '100px;',
	textTransform: 'none',
	padding: '0px 50px',
	fontFamily: 'Gilroy-Bold',
	fontSize: '14px;',
	lineHeight: '20px',
	color: '#fff',
	':hover': {
		backgroundColor: '#000',
		color: '#fff',
	},
}));

export default function ButtonFullWidth({ text, onClick }) {
	return (
		<FullWidth
			variant='contained'
			onClick={() => {
				window.scrollTo(0, 0);
				onClick();
			}}
		>
			{text}
		</FullWidth>
	);
}
