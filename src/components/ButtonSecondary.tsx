/** @format */

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Secondary = styled(Button)<ButtonProps>(({ theme }) => ({
	minWidth: '100px',
	backgroundColor: '#ffffff',
	height: '50px',
	borderRadius: '100px;',
	textTransform: 'none',
	padding: '0px 50px',
	fontFamily: 'Gilroy-Bold',
	fontSize: '14px;',
	lineHeight: '20px',
	border: '1px solid #3366FF',
	color: '#3366FF',
	':hover': {
		backgroundColor: '#6D7DE9',
		color: '#fff',
	},
}));

export default function SecondaryButton({ text, onClick }) {
	return (
		<Secondary
			variant='contained'
			onClick={() => {
				window.scrollTo(0, 0);
				onClick();
			}}
		>
			{text}
		</Secondary>
	);
}
