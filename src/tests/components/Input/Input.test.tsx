import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MuiInput } from '../../../components/Input/Input';

describe('Input Component', () => {

    
it('renders the input with a label', () => {
    render(<MuiInput label="Test Label" />);
    const labelElement = screen.getByLabelText('Test Label');
    expect(labelElement).toBeInTheDocument();
});

it('renders the input with no value when value is undefined', () => {
    render(<MuiInput />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('');
});

it('renders the input with a placeholder and label', () => {
    render(<MuiInput label="Label" placeholder="Placeholder" />);
    const inputElement = screen.getByPlaceholderText('Placeholder');
    expect(inputElement).toBeInTheDocument();
    expect(screen.getByLabelText('Label')).toBeInTheDocument();
});

it('does not throw error when onChange is not provided', () => {
    render(<MuiInput />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New value' } });
    expect(inputElement).toHaveValue('New value');
});

});