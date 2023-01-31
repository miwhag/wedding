/** @format */
import {
	ContactFeild,
	KidsContainer,
	LineBreak,
	ImageContainer,
	AddChildLink,
	InputContainer,
} from './styled-components';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

export default function ChildSection({
	childList,
	setChildList,
	childCare,
	setChildCare,
	currentGuest,
	childCareError,
}) {
	let addChildFormField = (e) => {
		if (childList.length < 4) {
			setChildList([
				...childList,
				{
					name: '',
					age: '',
					needs_bed: '',
					guest_id: currentGuest.id,
					child_care: childCare,
					team_id: 0,
				},
			]);
		}
		e.preventDefault();
	};

	let removeChildFormField = (i) => {
		let newChildList = [...childList];
		newChildList.splice(i, 1);
		setChildList(newChildList);
	};

	let handleChildInputChange = (i, e) => {
		let newChildList = [...childList];
		newChildList[i][e.target.name] = e.target.value;
		newChildList[i].child_care = childCare;
		setChildList(newChildList);
	};

	let handleChildCareChange = (e) => {
		setChildCare(e.target.value);
	};

	return (
		<ContactFeild className={`children-field`}>
			<div className='message-container'>
				<p className='title'>Important Message for Parents</p>
				<p className='description'>
					We understand that leaving the kids at home for a whole weekend might
					not be possible, and while we would love to see them during the
					weekend, we are asking that young children (under 8 years old and
					outside of immediate family) not be present during the ceremony and
					dinner. This means either one parent will need to step out during
					these times, or we can help coordinate some sort of on site sitter
					situation. This expense would need to be paid for by the parents
					however.
				</p>
			</div>
			<div className='sub-heading'>
				Who will watch the children during the ceremony and dinner?
			</div>

			<FormControl
				sx={{ m: 1, maxWidth: 320, margin: 0 }}
				error={childCareError}
				required
			>
				<InputLabel id='child-care-label'>Please select an option</InputLabel>
				<Select
					labelId='child-care-label'
					onChange={handleChildCareChange}
					label='Please select an option'
					value={childCare ?? ''}
				>
					<MenuItem value={'guardian'}>A Parent</MenuItem>
					<MenuItem value={'sitter'}>Sitters Service</MenuItem>
					<MenuItem value={'na'}>Not applicable</MenuItem>
				</Select>
				{childCareError && (
					<FormHelperText>Please select an option</FormHelperText>
				)}
			</FormControl>
			<KidsContainer>
				<div className='sub-heading'>Please enter their information below</div>
				{childList?.map((element, index) => (
					<div key={`${index}-child`}>
						<div style={{ paddingTop: 20 }}>
							<ContactFeild className='child-inputs'>
								<InputContainer className='no-gap input-gap'>
									<TextField
										sx={{ width: '320px' }}
										label='Full Name'
										required={false}
										type='text'
										name='name'
										onChange={(e) => handleChildInputChange(index, e)}
										defaultValue={element.name ?? ''}
										error={element.name === '' && childCareError}
										helperText={
											element.name === '' &&
											childCareError &&
											'Name is required'
										}
									/>
								</InputContainer>
								<InputContainer className='input-gap'>
									<FormControl
										sx={{
											m: 1,
											width: 230,
											margin: 0,
										}}
										error={element.needs_bed === '' && childCareError}
									>
										<InputLabel id='kid-bed-label'>
											Do they need their own bed?
										</InputLabel>
										<Select
											labelId='kid-bed-label'
											label='Do they need their own bed?'
											name='needs_bed'
											onChange={(e) => handleChildInputChange(index, e)}
											defaultValue={element.needs_bed ?? ''}
										>
											<MenuItem value={'yes'}>Yes</MenuItem>
											<MenuItem value={'no'}>No</MenuItem>
										</Select>
										{childCareError && element.needs_bed === '' && (
											<FormHelperText>Please select an option</FormHelperText>
										)}
									</FormControl>
								</InputContainer>
								<InputContainer className='input-gap'>
									<TextField
										sx={{
											width: '120px',
										}}
										label='Age'
										required={false}
										type='number'
										name='age'
										onChange={(e) => handleChildInputChange(index, e)}
										defaultValue={element.age ?? ''}
										error={element.age === '' && childCareError}
										helperText={
											element.age === '' && childCareError && 'Age is required'
										}
									/>
								</InputContainer>
								<ImageContainer
									className='delete-button'
									onClick={() => removeChildFormField(index)}
								>
									<FaTrashAlt />
								</ImageContainer>
							</ContactFeild>
						</div>
						<LineBreak />
					</div>
				))}
			</KidsContainer>
			{childList?.length < 4 && (
				<AddChildLink onClick={(e) => addChildFormField(e)}>
					<FaPlus />
					Add Child
				</AddChildLink>
			)}
		</ContactFeild>
	);
}
