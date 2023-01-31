/** @format */

import Accordian from '../../components/Accordian';
import { Questions } from './utils/Questions';
import {
	Container,
	ScrollContainer,
	ButtonContainer,
	ScrollButton,
	Category,
	ScrollToTopContainer,
	SubTitle,
} from './styled-components';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function FAQ() {
	const scrollToSection = (key) => {
		if (document !== null) {
			const yOffset = -200;
			const element = document.getElementById(key) as HTMLElement;
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};

	return (
		<Container>
			<div style={{ padding: '1rem', alignSelf: 'flex-start' }}>
				<Breadcrumbs page='faq' />
			</div>

			<ScrollContainer>
				{Object.keys(Questions).map((key) => (
					<ButtonContainer key={key}>
						<ScrollButton onClick={() => scrollToSection(key)}>
							{key}
						</ScrollButton>
					</ButtonContainer>
				))}
			</ScrollContainer>

			<Category>
				<SubTitle id='lodging'>Lodging</SubTitle>
			</Category>
			<Accordian FAQ={Questions['lodging']} />

			<Category>
				<SubTitle id='rsvp'>RSVP</SubTitle>
			</Category>
			<Accordian FAQ={Questions['rsvp']} />

			<Category>
				<SubTitle id='general'>General</SubTitle>
			</Category>
			<Accordian FAQ={Questions['general']} />

			<Category>
				<SubTitle id='weekend'>Weekend</SubTitle>
			</Category>
			<Accordian FAQ={Questions['weekend']} />

			<Category>
				<SubTitle id='wedding'>Wedding</SubTitle>
			</Category>
			<Accordian FAQ={Questions['wedding']} />

			<Category>
				<SubTitle id='other'>Other</SubTitle>
			</Category>
			<Accordian FAQ={Questions['other']} />

			<ScrollToTopContainer>
				<ScrollButton
					onClick={() => scrollToSection('title')}
					id='bottom-button'
				>
					scroll to top
				</ScrollButton>
			</ScrollToTopContainer>
		</Container>
	);
}
