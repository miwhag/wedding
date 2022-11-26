/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import UnderConstruction from '../components/UnderConstruction';
import mike from '../assets/mike.jpg';
import miwha from '../assets/miwha.jpg';

const OurStoryPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 8rem;
`;

const ImageContainer = styled.div`
	max-width: 500px;
	display: block;
	max-height: 545px;
	&.miwha {
		margin-left: -2rem;
		img {
			width: 100%;
			margin-top: -450px;
			margin-left: 50px;
			@media only screen and (max-width: 1000px) {
				margin-top: -306px;
				margin-left: 21px;
			}
		}
		&::before {
			content: '';
			height: 500px;
			width: 500px;
			background-color: #a9beff;
			display: block;
			position: relative;
			z-index: -1;
			@media only screen and (max-width: 1000px) {
				height: 325px;
				width: 325px;
			}
		}
	}
	&.mike {
		margin-right: -2rem;
		img {
			width: 100%;
			margin-top: -450px;
			margin-left: -50px;
			@media only screen and (max-width: 1000px) {
				margin-top: -306px;
				margin-left: -21px;
			}
		}
		&::before {
			content: '';
			height: 500px;
			width: 500px;
			background-color: #a9beff;
			display: block;
			position: relative;
			z-index: -1;
			@media only screen and (max-width: 1000px) {
				height: 325px;
				width: 325px;
			}
		}
	}
	@media only screen and (max-width: 1000px) {
		max-width: 325px;
		padding-bottom: 2rem;
	}
`;

const ContentSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 1rem;
`;

const AboutSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 1rem;
	max-width: 1200px;
	min-height: 700px;

	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		&.accent {
			flex-direction: column-reverse;
		}
	}
`;

const Accent = styled.div`
	height: 0.5rem;
	width: 100px;
	margin: 0;
	&.miwha {
		background-color: #c9e265;
	}
	&.mike {
		background-color: #ff99ff;
	}
`;
const Story = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		margin: 0;
		height: 55px;
	}
	p {
		max-width: 450px;
		padding: 1rem;
	}
	&.content-left {
		margin-right: 6rem;
		@media only screen and (max-width: 1000px) {
			margin-right: 0;
		}
	}
	&.content-right {
		margin-left: 6rem;
		@media only screen and (max-width: 1000px) {
			margin-left: 0;
		}
	}
`;

const Background = styled.div`
	background-color: rgba(169, 190, 255, 0.17);
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4rem 0rem;
`;

export default function OurStory() {
	const [underConstruction, setUnderConstruction] = useState(false);
	return (
		<>
			{underConstruction ? (
				<UnderConstruction />
			) : (
				<OurStoryPage>
					<ContentSection>
						<AboutSection>
							<ImageContainer className='miwha'>
								<img src={miwha} alt='' />
							</ImageContainer>
							<Story className='content-right'>
								<h1>miwhas side</h1>
								<Accent className='miwha' />
								<p>
									Mike and I met in the summer of 2013, when he did a road trip
									with friends and stayed at my place along the way. We had many
									opportunities to meet prior to this since we had similar
									friends from a gap year program we did after high school on
									the east coast. Yet somehow our paths never crossed. The first
									time I saw him, he was wearing an oversized Hawaiian shirt
									with mismatched gym shorts, and very much looked like somebody
									who had spent the last week road tripping in the back of a
									Honda Civic. <br />
									<br />
									The long week road trip smell was no match to the connection
									we had, which was immediate. I was so excited to see Mike, and
									the next few days while he was in CO we were inseparable. He
									made me laugh and didn’t mind my crude sailor talk. He was
									sarcastic and hilarious and I couldn’t stop smiling after our
									interactions. From there we stayed in touch, just as friends.
									It wasn’t until I saw him again later in the summer that I
									realized just how important Mike was to me.
									<br />
									<br />A few months passed and I finally told him how I felt.
									Luckily at this point he felt the same way. He was undoubtedly
									my best friend and from there the rest was history.
								</p>
							</Story>
						</AboutSection>
						<Background>
							<AboutSection className='accent'>
								<Story className='content-left'>
									<h1>michaels side</h1>
									<Accent className='mike' />
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nulla porta a velit at porttitor. Phasellus ultrices enim id
										justo eleifend, ac pellentesque sapien interdum. Proin
										accumsan, dolor porta auctor eleifend, leo ipsum hendrerit
										arcu, et facilisis mauris arcu id sem. Phasellus tempor nisi
										vitae lectus malesuada, eu viverra neque congue. Nam sapien
										massa, dapibus nec varius sed, tempor quis diam. Fusce eget
										hendrerit nunc.
										<br /> <br />
										In at ante eget arcu hendrerit finibus. Morbi quis blandit
										augue. Duis faucibus condimentum sapien at fringilla.
										Pellentesque mollis, velit eu accumsan consequat, metus urna
										vestibulum justo, sodales eleifend orci turpis in nibh.
										Mauris gravida eget lectus vitae posuere.
										<br /> <br />
										Curabitur rutrum fringilla velit, et pretium odio faucibus
										et. Nulla viverra velit vel lorem rutrum, ut pulvinar est
										hendrerit. Curabitur eget iaculis purus. Praesent vitae
										tempus est.
									</p>
								</Story>
								<ImageContainer className='mike'>
									<img src={mike} alt='' />
								</ImageContainer>
							</AboutSection>
						</Background>
					</ContentSection>
				</OurStoryPage>
			)}
		</>
	);
}