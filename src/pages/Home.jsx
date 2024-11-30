import { useState } from 'react';
import { Container } from '@mui/material';
import ContactList from '../components/ContactList';
import Input from '../components/Input';
import AddBtn from '../components/AddBtn';
import AlertBox from '../components/AlertBox';

const Home = () => {
	const [open, setOpen] = useState(false);

	return (
		<Container sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
			<ContactList />
			<Input open={open} toggleSlide={setOpen} />
			<AddBtn toggleSlide={setOpen} />
			<AlertBox />
		</Container>
	);
};
export default Home;
