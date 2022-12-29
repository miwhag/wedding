/** @format */

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Small = styled(Button)<ButtonProps>(({ theme }) => ({
	minWidth: '60px',
	backgroundColor: '#3366FF',
	height: '40px',
	borderRadius: '100px;',
	textTransform: 'none',
	padding: '0px 30px',
	fontFamily: 'Gilroy-Bold',
	fontSize: '13px;',
	lineHeight: '20px',
	marginRight: '10px',
	':hover': {
		backgroundColor: '#6D7DE9',
	},
}));

export default function SmallButton({ text, onClick }) {
	return (
		<Small
			variant='contained'
			onClick={() => {
				window.scrollTo(0, 0);
				onClick();
			}}
		>
			{text}
		</Small>
	);
}
