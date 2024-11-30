import { Collapse } from '@mui/material';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import { selectFilteredContacts, selectLoader } from '../redux/selectors.js';
import Loader from './Loader.jsx';

const ContactList = () => {
	const isLoading = useSelector(selectLoader);
	const contacts = useSelector(selectFilteredContacts);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<TransitionGroup>
					{contacts.map((contact) => {
						const { id, name, number } = contact;
						return (
							<Collapse key={id}>
								<Contact name={name} number={number} id={id} />
							</Collapse>
						);
					})}
				</TransitionGroup>
			)}
		</>
	);
};
export default ContactList;
