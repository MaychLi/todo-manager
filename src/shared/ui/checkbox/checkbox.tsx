import Checkbox from '@mui/material/Checkbox';

interface ControlledCheckboxProps {
	checked: boolean;
	onChange: () => void; 
}
export default function ControlledCheckbox({ checked, onChange }: ControlledCheckboxProps) {

	return (
		<Checkbox
			checked={checked} 
			onChange={onChange} 
			inputProps={{ 'aria-label': 'controlled' }}
		/>
	);
}
