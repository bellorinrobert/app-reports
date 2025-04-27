import React from 'react';
import TextField from '@mui/material/TextField';

interface MuiInputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    variant?: 'filled' | 'outlined' | 'standard';
}

const MuiInput: React.FC<MuiInputProps> = ({ label, type = 'text', placeholder, value, onChange, className, variant = 'outlined' }) => {
    return (
        <TextField
            label={label}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
            variant={variant}
        />
    );
};

export { MuiInput };