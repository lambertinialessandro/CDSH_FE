import { Close } from '@mui/icons-material';
import { Button, FormControl, FormLabel, Grid, Chip, Typography, Box, IconButton } from '@mui/material';

function ChipRadioList(props) {
  const { input, field, error, readOnly } = props;
  const { required, options, ...othProps } = input;

  return (
    <FormControl className="w-full">
      <Grid container spacing={2}>
        {options.map((opt, idx) => (
          <Grid item xs={opt.colSpan || 6} key={idx}>
            <Chip
              label={opt.label}
              clickable
              color={field.value === opt.value ? 'primary' : 'default'}
              variant={field.value === opt.value ? 'filled' : 'outlined'}
              onClick={() => field.onChange(opt.value)}
              style={{ width: '100%', justifyContent: 'center' }}
            />
          </Grid>
        ))}
      </Grid>
    </FormControl>
  );
}

export default GridRadioGroup;
