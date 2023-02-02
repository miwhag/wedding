/** @format */
import { Carousel, Breadcrumbs } from '../../components/index';
import airbnbIcon from '../../assets/airbnb-icon.svg';
import { airBnbLinks, imageArray } from './utils';
import map from '../../assets/deer-creek.jpg';

import {
	Section,
	LodgingContainer,
	ImageContainer,
	LodgingPage,
	ContentCenter,
	AdditionalButton,
	AdditionalContainer,
	Accent,
	ButtonContainer,
	AdditionalLodging,
	LodgeContainer,
	SubTitle,
} from './styled-components';

export default function Lodging() {
	return (
		<LodgingPage>
			<Breadcrumbs page='lodging' id='lodging' />
			<LodgingContainer>
				<SubTitle>Onsite Cabins</SubTitle>
				<Section>
					<div className='section'>
						<p>
							We're so excited that this venue has lodging on site. It was
							another reason we loved the venue so much, and our preference is
							that guests who are staying for the weekend stay in a cabin. It
							will cost $30/person which will cover the entire weekend (friday,
							saturday evening), and while they are pretty nice beds they do not
							come with bedding, so make sure you bring a sleeping bag/pillow
							with you.
							<br /> <br />
							If you are wanting to stay on site, you can reserve your spot in a
							cabin when you RSVP to the event. There are also 6 RV spots
							available if you happen to have an RV. Payment for a spot can be
							made on the registry site or through venmo. <br />
							<br />
						</p>
						<Carousel images={imageArray} />
					</div>
				</Section>
				<Accent />
				<ImageContainer id='map'>
					<img src={map} alt='' />
				</ImageContainer>
				<Section>
					<div className='section airbnb-block'>
						<SubTitle>Nearby Airbnbs</SubTitle>
						<p>
							We understand that cabins may not be everyone’s cup of tea and
							some might rather have their own accommodations. If that is the
							case, there are plenty of Airbnb options in Bailey and the
							surrounding towns. All of the towns below are less than 1.25 hours
							away with the closest being Bailey of course (5-10 minutes from
							venue) and Conifer (20-25 minutes from venue).
						</p>
						<ContentCenter>
							<AdditionalContainer>
								{airBnbLinks.map((bnb, index) => {
									return (
										<>
											<ButtonContainer
												key={` links ${index}`}
												onClick={() => window.open(bnb.href)}
											>
												<AdditionalButton>
													<div id='airbnb-button-content'>
														<img src={airbnbIcon} alt='' />
													</div>
													<span>{bnb.name}</span>
												</AdditionalButton>
											</ButtonContainer>
										</>
									);
								})}
							</AdditionalContainer>
						</ContentCenter>

						<AdditionalLodging>
							<SubTitle>Additional Lodging</SubTitle>
							<p>
								In addition to Airbnb, there are also are also two lodges in
								town recommended by the owners of the venue. Both are great
								places and have wonderful hosts. Also people with mobility
								issues will appreciate the ground level rooms of Bailey Lodge.
								<LodgeContainer>
									<div className='lodge'>
										<span className='bold'>Bailey Lodge</span>
										57920 US Hwy 285, Bailey, CO 80421
									</div>
									<div className='lodge'>
										<span className='bold'>Glenn Isle resort</span>
										573 Old Stagecoach Rd, Bailey, CO 80421
									</div>
								</LodgeContainer>
							</p>
						</AdditionalLodging>
					</div>
				</Section>
			</LodgingContainer>
		</LodgingPage>
	);
}
