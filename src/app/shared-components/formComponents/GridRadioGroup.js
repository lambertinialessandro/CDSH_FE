import { FormControl, Grid, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function CustomRadio({ selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-7 h-7 rounded-full border border-black flex items-center justify-center cursor-pointer`}
    >
      <div
        className={`w-5 h-5 rounded-full transition-colors duration-300 ${
          selected ? 'bg-[#C8FF75]' : 'bg-transparent'
        }`}
      />
    </div>
  );
}

function GridRadioGroup(props) {
  const { input, field, error, readOnly } = props;
  const { required, options, ...othProps } = input;
  const theme = useTheme();

  return (
    <FormControl className="w-full">
      <RadioGroup name={field.name} value={field.value ?? ''} onChange={(e) => field.onChange(e.target.value)}>
        <Grid container spacing={2}>
          {options.map((opt, idx) => (
            <Grid item xs={opt.colSpan || 6} key={idx}>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => !readOnly && field.onChange(opt.value)}
              >
                <CustomRadio selected={field.value === opt.value} />
                <span className="text-[30px]">{opt.label}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
      {!!error && <FormHelperText error>{error.message}</FormHelperText>}
    </FormControl>
  );
}

export default GridRadioGroup;
