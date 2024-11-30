import { Add } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import PropTypes from 'prop-types';

const AddBtn = ({ toggleSlide }) => {
	return (
		<Box
			sx={{
				position: 'fixed',
				right: '50px',
				bottom: '80px',
				transform: 'translateY(50%)',
				bgcolor: 'inherit',
			}}
		>
			<IconButton
				sx={{
					bgcolor: 'white',
					border: '1px solid #4d4d4d',
					'&:hover': { bgcolor: 'white' },
				}}
				onClick={() => toggleSlide((state) => (state = !state))}
			>
				<Add
					sx={{
						height: '50px',
						width: '50px',
						m: 0,
					}}
				/>
			</IconButton>
		</Box>
	);
};

AddBtn.propTypes = {
	toggleSlide: PropTypes.func,
};
export default AddBtn;
