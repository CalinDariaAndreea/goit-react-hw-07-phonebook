import { useEffect } from 'react';
import Home from '../pages/Home';
import Searchbar from './Searchbar';
import { fetchAPI } from '../services/fetchAPI';
import { useDispatch } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAPI());
	}, [dispatch]);

	return (
		<>
			<Searchbar />
			<Home />
		</>
	);
};
export default App;
