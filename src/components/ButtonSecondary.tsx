/** @format */
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Secondary = styled(Button)<ButtonProps>(({ theme }) => ({
	width: '100%',
	maxWidth: '220px',
	backgroundColor: '#ffffff',
	height: '50px',
	borderRadius: '100px;',
	textTransform: 'none',
	padding: '0px 50px',
	fontFamily: 'Circular-Book',
	fontSize: '14px;',
	lineHeight: '20px',
	border: '1px solid #5C6FEA',
	color: '#5C6FEA',
	':hover': {
		backgroundColor: '#5C6FEA',
		color: '#fff',
	},
}));

export default function SecondaryButton({ text, onClick }) {
	return (
		<Secondary
			variant='contained'
			onClick={() => {
				onClick();
			}}
		>
			{text}
		</Secondary>
	);
}
