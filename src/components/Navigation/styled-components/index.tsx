/** @format */
import styled from 'styled-components';

//Navbar

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #ffffff;
	border-bottom: 0.5px solid #000000;
`;

export const Title = styled.h3`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	font-family: 'Baloo 2';
	text-align: center;
	font-weight: 300;
	font-size: 25px;
	color: #000000;
	padding: 0px 20px;
`;

export const NavAccent = styled.div`
	background: rgb(177, 226, 101);
	background: linear-gradient(
		90deg,
		rgba(177, 226, 101, 0.9780287114845938) 0%,
		rgba(51, 102, 255, 1) 50%,
		rgba(242, 142, 172, 1) 100%
	);
	height: 10px;
	width: 100%;
`;

export const MainNav = styled.div<{
	scrollVisible: boolean;
	flyoutVisible: boolean;
}>`
	width: 100%;
	height: 80px;
	position: fixed;
	z-index: 10000;
	background-color: #ffffff;
	top: ${(p) => (p.scrollVisible || p.flyoutVisible ? '0' : '-95px;')};
	transition: top 0.6s;
`;
export const MenuLink = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		a {
			font-weight: 700;
		}
	}
	a {
		text-decoration: none;
		color: #000000;
		font-family: 'Baloo 2';
	}

	&.rsvp {
		font-size: 16px;
		border: 1px solid #000000;
		height: 25px;
		margin-right: 10px;
		position: relative;
		border-radius: 2px;
		top: 0;
		transition: top ease 0.5s;
		&:hover {
			cursor: pointer;
			top: -5px;
		}
	}

	&.desktop {
		@media only screen and (max-width: 900px) {
			display: none;
		}
	}
`;

export const GroupedLinks = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 80px;
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;
export const MobileMenu = styled.div`
	display: none;
	@media only screen and (max-width: 900px) {
		display: block;
		margin: 5px 0px;
		.flex {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
		}
	}
`;

export const HamburgerContainer = styled.div`
	@media only screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		margin: 15px;
		.bar {
			height: 2px;
			border-radius: 10px;
			background-color: #000000;
			width: 35px;
			margin: 3px 0px;
		}
	}
`;

export const FlyoutMobileMenu = styled.div<{ visible: boolean }>`
	transform: ${(p) => (p.visible ? 'translate(0)' : 'translate(-300px)')};
	opacity: ${(p) => (p.visible ? '1' : '0')};
	position: fixed;
	height: 100%;
	width: 100%;
	background-color: #ffffff;
	left: 0;
	top: 80px;
	z-index: 100000;
	padding-top: 2rem;
	transition: ease-in-out 0.2s;
	@media only screen and (min-width: 900px) {
		display: none;
	}
`;

export const FlyoutLinkContainer = styled.div`
	width: 50%;
	@media only screen and (min-width: 900px) {
		display: none;
	}
`;

export const FlyoutMenuLink = styled.div<{ active: boolean }>`
	padding: 7px 0px;
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: ${(p) => (p.active ? '#ffffff' : '#000000')};
		background-color: ${(p) => (p.active ? '#000000' : '#ffffff')};
		font-size: 20px;
		padding-left: 40px;
		height: 40px;
		border-radius: 0px 3px 3px 0px;
		font-family: 'Gilroy';
		p {
			margin: 0;
			margin: ${(p) => (p.active ? '0px 0px 0px -3px' : '0px')};
		}
	}
	@media only screen and (min-width: 900px) {
		display: none;
	}
`;

export const FlyoutExitButton = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 35px;
	font-family: 'Gilroy';
	margin-right: 35px;
	@media only screen and (min-width: 900px) {
		display: none;
	}
`;
