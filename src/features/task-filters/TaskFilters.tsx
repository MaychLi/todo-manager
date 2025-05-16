import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react";

const CustomButtonGroup = styled(ButtonGroup)(({theme}) => ({
	'& .MuiButton-root': {
		backgroundColor: 'transparent', 
		color: '#7D7D7D',
		border: 'none',
		'&:hover': {
			opacity: '0.5', 
		},
		'&:active': {
			border: '1px solid #EFDDDD',
		}
	},
}));
type FilterType = 'All Tasks' | 'Active' | 'Completed';

interface BasicButtonGroupProps {
	onFilterChange: (filter: FilterType) => void;
}
const buttons: FilterType[] = ['All Tasks', 'Active', 'Completed'];


export default function BasicButtonGroup({ onFilterChange }: BasicButtonGroupProps) {
	const [activeFilter, setActiveFilter] = useState('All Tasks');

	const handleButtonClick = (filter: FilterType) => {
		setActiveFilter(filter);
		onFilterChange(filter);
	};
	return (
		<CustomButtonGroup variant='contained' aria-label='Basic button group'>
			<ul>
				{buttons.map((value, i) => (
					<Button key={i} className={activeFilter === value ? 'active' : ''} onClick={() => handleButtonClick(value)}>
						{value}
					</Button>
				))}
			</ul>
		</CustomButtonGroup>
	);
}
