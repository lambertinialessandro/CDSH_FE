import { Box, Chip, FormControl, FormHelperText } from '@mui/material';

function ChipCheckboxList(props) {
  const { input, field, error, readOnly } = props;
  const { label, required, options, ...othProps } = input;

  return (
    <FormControl className="w-full my-[26px] md:my-[54px]">
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: '16px', md: '32px' }, flexWrap: 'wrap' }}>
        {options.map((opt, idx) => {
          const selected = field.value?.includes(opt.value);
          return (
            <Chip
              key={idx}
              label={opt.label}
              clickable
              disableRipple
              color={selected ? 'primary' : 'default'}
              variant={selected ? 'filled' : 'outlined'}
              sx={{
                border: '1px solid black',
                boxShadow: 0,
                fontSize: { xs: '12px', md: '15px' },
                maxWidth: 'fit-content',
              }}
              onClick={() => {
                let newValue = [];
                if (selected) {
                  newValue = field.value.filter((v) => v !== opt.value);
                } else {
                  newValue = [...(field.value || []), opt.value];
                }
                field.onChange(newValue);
              }}
            />
          );
        })}
      </Box>
      {!!error && <FormHelperText sx={{ color: '#FF2023 !important' }}>{error.message}</FormHelperText>}
    </FormControl>
  );
}

export default ChipCheckboxList;
