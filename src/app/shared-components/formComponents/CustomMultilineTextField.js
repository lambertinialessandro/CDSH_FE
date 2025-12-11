import { FormControl, InputAdornment, TextField } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 25,
    padding: {xs: "16px", md: '32px'},
    fontSize: {xs: "15px", md: '30px'},
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
  '& .MuiInputBase-input::placeholder': {
    fontSize: {xs: "15px", md: '30px'},
  },
}));

function CustomMultilineTextField(props) {
  const { input, field, error, readOnly } = props;
  const { label, placeholder, maxLength, required, size, hasEndDot = true, ...othProps } = input;
  //const labelId = `${field.name}-label`;

  const theme = useTheme();

  return (
    <FormControl variant="outlined" fullWidth error={!!error} disabled={readOnly} size={size}>
      <StyledTextField
        label={label}
        placeholder={placeholder}
        multiline
        fullWidth
        InputProps={{
          maxLength: maxLength,
          autoComplete: 'new-password',
          readOnly: readOnly,
          endAdornment: hasEndDot && (
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
        {...othProps}
      />
    </FormControl>
  );
}

export default CustomMultilineTextField;
