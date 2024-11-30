import { Paper } from '@mui/material';
import ContentLoader from 'react-content-loader';

const Loader = (props) => {
	return (
		<Paper elevation={2} sx={{ mt: 2, height:'72px', position:'relative', p:'10px'}}>
			<ContentLoader
				speed={2}
				width={778}
				height={116}
				backgroundColor='#f3f3f3'
				foregroundColor='#ecebeb'
				viewBox='100 50 778 116'
				{...props}
			>
				<rect x='37' y='34' rx='0' ry='0' width='0' height='0' />
				<rect x='28' y='29' rx='0' ry='0' width='258' height='32' />
				<rect x='28' y='71' rx='0' ry='0' width='465' height='32' />
				<rect x='434' y='94' rx='0' ry='0' width='0' height='0' />
				<rect x='29' y='116' rx='0' ry='0' width='749' height='32' />
			</ContentLoader>
		</Paper>
	);
};

Loader.metadata = {
	name: 'Ahsan Ullah', // My name
	github: 'IamAhsanMani', // Github username
	description: 'Upwork Job',
	filename: 'UpworkJobLoader',
};

export default Loader;
