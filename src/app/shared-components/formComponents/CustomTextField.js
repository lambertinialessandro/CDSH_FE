import { FormControl, FormHelperText, InputAdornment, TextField } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 50,
    paddingRight: 22,
    fontSize: { xs: '15px', md: '30px' },
    '& fieldset': {
      borderColor: '#666',
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
  '& .MuiInputBase-input::placeholder': {
    fontSize: { xs: '15px', md: '30px' },
  },
}));

function CustomTextField(props) {
  const { input, field, error, readOnly } = props;
  const { label, placeholder, maxLength, required, size, hasEndDot = true, ...othProps } = input;
  //const labelId = `${field.name}-label`;

  const theme = useTheme();

  return (
    <FormControl variant="outlined" fullWidth error={!!error} disabled={readOnly} size={size}>
      <StyledTextField
        {...field}
        label={label}
        placeholder={placeholder}
        fullWidth
        InputProps={{
          maxLength: maxLength,
          autoComplete: 'new-password',
          readOnly: readOnly,
          endAdornment: hasEndDot && (
            <InputAdornment position="end">
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  backgroundColor: !!error ? "#FF2023": theme.palette.primary.main,
                  display: 'inline-block',
                }}
              />
            </InputAdornment>
          ),
        }}
        {...othProps}
      />
      {!!error && <FormHelperText sx={{color: "#FF2023 !important"}}>{error.message}</FormHelperText>}
    </FormControl>
  );
}

export default CustomTextField;
