import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

interface addTaskProps {
	addTask: (task: string) => void;
}

export default function TextFieldHiddenLabel({ addTask }: addTaskProps) {
	const [value, setValue] = useState<string>('');

	const onChangeEvent = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' && value.trim() !== '') {
			event.preventDefault();
			addTask(value.trim());
			setValue('');
		}
	};

	return (
		<Stack component='form' sx={{ width: '100%' }} spacing={2} noValidate autoComplete='off'>
			<TextField
				fullWidth
				multiline
				hiddenLabel
				id='filled-hidden-label-normal'
				variant='filled'
				placeholder='What needs to be done?'
				value={value}
				onChange={e => setValue(e.target.value)}
				onKeyDown={onChangeEvent}
				sx={{
					'& .MuiInputBase-root': {
						width: '100%',
						backgroundColor: '#FEFEFE', 
						boxSizing: 'border-box',
						alignItems: 'flex-start',
						padding: '16px 14px', 
					},

					'& .MuiInputBase-input': {
						color: '#00000099',
						textAlign: 'center',
						padding: 0, 
					},

					'& .MuiInputBase-input::placeholder': {
						color: '#E9E9E9',
					},
				}}
			/>
		</Stack>
	);
}
