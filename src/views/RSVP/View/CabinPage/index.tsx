/** @format */
import { useEffect, useState, useContext } from 'react';
import { GuestContext } from '../../../../context/GuestContext';
import { Confirmation, Stepper, Toggle } from '../../../../components/index';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

import {
	CabinInfoSection,
	CabinCardsContainer,
	ButtonContainer,
	ToggleContainer,
	CabinListContainer,
	SelectedCabinContainer,
	SelectedCabinSection,
	Image,
	LinkContainer,
	ViewMoreLink,
	SelectedContent,
	DeselectButton,
	ArrowContainer,
	ViewMoreButton,
} from './styled-components';
import {
	Card,
	ButtonSecondary,
	Button,
	Popup,
	Loading,
} from '../../../../components/index';
import { updateGuest, getLodgings } from '../../Model';

export default function CabinPage({ regressFlow, progressFlow }) {
	const {
		guest,
		cabinList,
		partyUpdated,
		setCabinList,
		selectedCabin,
		setSelectedCabin,
	} = useContext<any>(GuestContext);
	const [loaded, setLoaded] = useState(false);
	const [activeModal, setActiveModal] = useState(false);
	const [activeCard, setActiveCard] = useState<any>(null);
	const [noLodgingNotice, setNoLodgingNotice] = useState(false);
	const [hideCabins, setHideCabins] = useState(false);

	const offsiteCabin = selectedCabin?.id === 24;

	const [acceptLodging, setAcceptLodging] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		let controller = new AbortController();
		(async () => {
			setCurrentState();
			setLoaded(true);
		})();
		return () => controller?.abort();
	}, []);

	useEffect(() => {
		var body = document.body;
		if (activeModal) {
			setOpen(true);
			body.classList.add('modal-open');
		} else {
			setOpen(false);
			body.classList.remove('modal-open');
		}
	}, [activeModal]);

	useEffect(() => {
		updateCabinList();
	}, [selectedCabin]);

	function setCurrentState() {
		let cabin = cabinList.find((cabin) => cabin?.id === guest?.lodging_id);
		if (cabin && cabin.id !== 24) {
			setHideCabins(true);
			setAcceptLodging(true);
			setSelectedCabin(cabin);
			setActiveCard(cabin);
		} else {
			setAcceptLodging(false);
			setSelectedCabin(cabin);
		}
	}

	async function updateCabinList() {
		let lodgingResult = await getLodgings();
		setCabinList(lodgingResult);
	}

	const handleCardClick = (cabin) => {
		setActiveModal(true);
		setActiveCard(cabin);
		setOpen(true);
	};

	//offsite is cabin id 24
	const handleContinue = () => {
		if (
			(selectedCabin === null && acceptLodging) ||
			(selectedCabin?.id === 24 && acceptLodging)
		) {
			setNoLodgingNotice(true);
		} else if (selectedCabin && !acceptLodging) {
			updateGuest(guest?.id, { lodging_id: null });
			progressFlow();
			window.scrollTo(0, 0);
		} else if (partyUpdated) {
			updateGuest(guest?.id, { lodging_id: selectedCabin?.id });
			progressFlow();
			window.scrollTo(0, 0);
		} else if (selectedCabin && acceptLodging && !partyUpdated) {
			progressFlow();
		} else {
			updateGuest(guest?.id, { lodging_id: 24 });
			progressFlow();
		}
	};

	return (
		<>
			{loaded ? (
				<CabinInfoSection>
					{noLodgingNotice && (
						<Confirmation
							handleExit={() => setNoLodgingNotice(false)}
							confirm={true}
							content={{
								__html: `<span>You have not selected a cabin. <br />Please select a cabin or <br/>select "No" for lodging</span>`,
							}}
						/>
					)}

					<div className='stepper-container'>
						<Stepper step={2} />
					</div>
					<ToggleContainer>
						<div className='sub-heading'>
							Will you be staying onsite in a cabin?
						</div>
						<div>
							<Toggle
								toggleActive={acceptLodging}
								onChange={() => setAcceptLodging(!acceptLodging)}
							/>
						</div>
					</ToggleContainer>
					<p className='description line-divider'>
						Staying in a cabin requires bringing your own bedding. While there
						are enough beds for everyone to stay in at the property, sleeping
						bags/pillows will need to be brought with you. In addition to the
						bedding, the cost of staying at a cabin onsite is $30 per person for
						the entire weekend.
					</p>

					{acceptLodging ? (
						<div>
							{selectedCabin && !offsiteCabin && (
								<SelectedCabinSection>
									<h3>You and your party are assigned to:</h3>
									<SelectedCabinContainer>
										<Image image={selectedCabin?.image_url ?? ''} />
										<SelectedContent>
											<h1>{selectedCabin?.name}</h1>
											<p className='selected-p'>{selectedCabin?.description}</p>
											<LinkContainer>
												<ViewMoreLink
													onClick={() => {
														setActiveModal(true);
													}}
												>
													View Details <FaArrowRight />
												</ViewMoreLink>
												<DeselectButton
													onClick={() => {
														setSelectedCabin(null);
														updateGuest(guest?.id, { lodging_id: null });
														setHideCabins(false);
													}}
												>
													Deselect Button
												</DeselectButton>
											</LinkContainer>
										</SelectedContent>
									</SelectedCabinContainer>
								</SelectedCabinSection>
							)}
							<h3 style={{ paddingBottom: '0px', marginBottom: '5px' }}>
								{selectedCabin
									? 'Browse other options below'
									: 'Please select a cabin from the list below'}
							</h3>
							<p>
								If you have any issues selecting a cabin, or cannot find a cabin
								that will fit your entire party, please reach out to us and we
								can assist.
							</p>
							<h3 style={{ margin: '1rem 0rem 0rem 0rem' }}>Cabin List</h3>
							<CabinListContainer className={`${!hideCabins && 'open'}`}>
								{cabinList && (
									<CabinCardsContainer>
										{cabinList.map((cabin, index) => {
											if (
												cabin.lodging_type !== 'apartment' &&
												cabin.lodging_type !== 'offsite'
											) {
												return (
													<Card
														disable={hideCabins}
														image={cabin?.image_url}
														name={cabin?.name}
														type={cabin?.lodging_type}
														remaining={cabin?.spots_remaining}
														occupants={cabin.occupants}
														onClick={() => handleCardClick(cabin)}
														key={`card-${index}`}
													/>
												);
											}
										})}
									</CabinCardsContainer>
								)}
								<ViewMoreButton
									onClick={() => setHideCabins(!hideCabins)}
									visible={hideCabins}
								>
									{hideCabins ? 'View All' : 'Collapse List'}
									<ArrowContainer className={`${!hideCabins && 'arrow-up'}`}>
										<IoIosArrowDown />
									</ArrowContainer>
								</ViewMoreButton>
							</CabinListContainer>

							{activeModal && (
								<Popup
									activeCard={activeCard}
									setHideCabins={setHideCabins}
									setActiveModal={setActiveModal}
									open={open}
								/>
							)}
						</div>
					) : (
						<>
							<div className='sub-heading'>By selecting "No"</div>

							<p className='description'>
								By selecting no, you have opted out of lodging onsite and will
								need to find another option. The lodging page on this site
								offers some suggestions.
							</p>
						</>
					)}
					<ButtonContainer>
						<ButtonSecondary onClick={() => regressFlow()} text='Back' />
						<Button onClick={() => handleContinue()} text='Continue' />
					</ButtonContainer>
				</CabinInfoSection>
			) : (
				<Loading />
			)}
		</>
	);
}
