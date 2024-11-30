import {
	Button,
	FormGroup,
	IconButton,
	Paper,
	Slide,
	Stack,
	TextField,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { setAlert } from '../redux/slices/alertSlice';
import { addContact } from '../services/fetchAPI';
import { selectContacts } from '../redux/selectors';

const Input = ({ open, toggleSlide }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const contacts = useSelector(selectContacts);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleNumber = (e) => {
		setNumber(e.target.value);
	};
	const found = contacts
		.map((contact) => contact.name.toLocaleLowerCase())
		.includes(name.toLocaleLowerCase());
	const handleSubmit = (e) => {
		e.preventDefault();
		const item = {
			name,
			number,
		};
		found ? dispatch(setAlert(true)) : dispatch(addContact(item));
		e.target.reset()
	};
	return (
		<Slide direction='up' in={open} mountOnEnter unmountOnExit>
			<Paper
				elevation={8}
				sx={{
					width: '25rem',
					position: 'fixed',
					right: '20px',
					bottom: '120px',
					p: '35px',
				}}
			>
				<IconButton
					sx={{ position:'absolute', right: '2px', top: '2px' }}
					onClick={() => toggleSlide((state) => (state = !state))}
				>
					<ClearIcon />
				</IconButton>
				<form onSubmit={handleSubmit}>
					<FormGroup>
						<Stack spacing={2}>
							<TextField
								variant='outlined'
								label='Name'
								id='name-input'
								type='text'
								name='name'
								inputbasecomponentprops={{
									pattern:
										"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
								}}
								title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
								required
								onChange={handleName}
							/>
							<TextField
								variant='outlined'
								label='Phone'
								type='number'
								name='number'
								inputbasecomponentprops={{
									pattern:
										' +?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
								}}
								title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
								required
								onChange={handleNumber}
							/>
							<Button type='submit' variant='contained'>
								Add Contact
							</Button>
						</Stack>
					</FormGroup>
				</form>
			</Paper>
		</Slide>
	);
};

Input.propTypes = {
	open: PropTypes.bool,
	toggleSlide: PropTypes.func,
};
export default Input;
