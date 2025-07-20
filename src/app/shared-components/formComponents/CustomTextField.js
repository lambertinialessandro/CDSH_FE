import React from 'react';
import { TextField, InputAdornment, Typography, FormControl } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

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
    /* padding: '10px 16px', */
  },
}));

function CustomTextField(props) {
  const { input, field, error, readOnly } = props;
  const { label, maxLength, required, size, ...othProps } = input;
  //const labelId = `${field.name}-label`;

  const theme = useTheme()

  return (
    <FormControl variant="outlined" fullWidth error={!!error} disabled={readOnly} size={size}>
      <StyledTextField
        label={label}
        fullWidth
        InputProps={{
          maxLength: maxLength,
          autoComplete: 'new-password',
          readOnly: readOnly,
          endAdornment: (
            <InputAdornment position="end">
              <span
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.main,
                  display: 'inline-block',
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}

export default CustomTextField;
