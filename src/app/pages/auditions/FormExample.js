import React from 'react';
import { TextField, InputAdornment, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 50,
    paddingRight: 16,
    '& fieldset': {
      borderColor: '#aaa',
    },
    '&:hover fieldset': {
      borderColor: '#666',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#666',
    },
  },
  '& .MuiInputBase-input': {
    padding: '10px 16px',
  },
}));

export default function FormExample() {
  return (
    <div>
      <StyledTextField
        label="Name"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <span style={{
                width: 13,
                height: 13,
                borderRadius: '50%',
                backgroundColor: 'purple',
                display: 'inline-block',
              }} />
            </InputAdornment>
          ),
        }}
      />

      

      <StyledTextField
        label="Geburtsdatum"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <span style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: 'red',
                display: 'inline-block',
              }} />
            </InputAdornment>
          ),
        }}
      />
      <div style={{ color: 'red', fontSize: 12,  marginLeft: 12 }}>
        Not completed
      </div>
    </div>
  );
}
