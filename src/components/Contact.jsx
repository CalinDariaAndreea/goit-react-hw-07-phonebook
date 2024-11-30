import { Delete } from '@mui/icons-material';
import { IconButton, Paper, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../services/fetchAPI';

const Contact = ({ name, number, id }) => {
	const dispatch = useDispatch();
	const handleDelete = (event) => {
		const contact = event.currentTarget.closest('[role="presentation"]');
		const contactId = contact ? contact.id : null;
		dispatch(deleteContact(contactId));
	};
	return (
		<Paper elevation={2} id={id} role='presentation' sx={{ mt: 2 }}>
			<Stack
				direction={'row'}
				alignItems={'center'}
				sx={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between',
				}}
				p={1}
			>
				<Stack spacing={2}>
					<Typography>Name: {name}</Typography>
					<Typography>Number: {number}</Typography>
				</Stack>
				<Stack>
					<IconButton onClick={handleDelete}>
						<Delete />
					</IconButton>
				</Stack>
			</Stack>
		</Paper>
	);
};

Contact.propTypes = {
	id: PropTypes.any,
	name: PropTypes.string,
	number: PropTypes.string,
};
export default Contact;
