import { render, screen, fireEvent } from '@testing-library/react';
import TextFieldHiddenLabel from './TaskInput';

describe('TextFieldHiddenLabel', () => {
	it('adding Task with correct value on Enter press', () => {
		const mockAddTask = jest.fn();
		render(<TextFieldHiddenLabel addTask={mockAddTask} />);

		const inputElement = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;

		fireEvent.change(inputElement, { target: { value: 'New Task' } });
		fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

		expect(mockAddTask).toHaveBeenCalledWith('New Task');
		expect(inputElement.value).toBe(''); 
	});

	it('does not call addTask if the input is empty', () => {
		const mockAddTask = jest.fn();
		render(<TextFieldHiddenLabel addTask={mockAddTask} />);

		const inputElement = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;
		fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

		expect(mockAddTask).not.toHaveBeenCalled();
	});
});