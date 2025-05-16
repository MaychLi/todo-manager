import { render, screen, fireEvent } from '@testing-library/react';
import BasicButtonGroup from './TaskFilters';
import '@testing-library/jest-dom';

describe('BasicButtonGroup', () => {
	it('calls onFilterChange with correct filter type on button click', () => {
		const mockFilterChange = jest.fn();
		render(<BasicButtonGroup onFilterChange={mockFilterChange} />);

		const activeButton = screen.getByText('Active');
		fireEvent.click(activeButton);

		expect(mockFilterChange).toHaveBeenCalledWith('Active');
	});

	it('applies active class to the selected button', () => {
		render(<BasicButtonGroup onFilterChange={jest.fn()} />);

		const activeButton = screen.getByText('Active');
		fireEvent.click(activeButton);

		expect(activeButton.className).toContain('active');
	});
});