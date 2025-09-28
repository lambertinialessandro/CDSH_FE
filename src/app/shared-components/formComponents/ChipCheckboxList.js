import { Close } from '@mui/icons-material';
import { Button, FormControl, FormLabel, Grid, Chip, Typography, Box, IconButton } from '@mui/material';

function ChipCheckboxList(props) {
  const { input, field, error, readOnly } = props;
  const { label, required, options, ...othProps } = input;

  return (
    <FormControl className="w-full my-[54px]">
      <div style={{ display: 'flex', justifyContent: "center", gap: "32px", flexWrap: 'wrap' }}>
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
                flex: "1",
                border: '1px solid black',
                boxShadow: 0,
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
      </div>
    </FormControl>
  );
}

export default ChipCheckboxList;
