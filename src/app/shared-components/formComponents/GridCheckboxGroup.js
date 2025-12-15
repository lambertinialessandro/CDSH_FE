import { FormControl, Grid, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function CustomCheckbox({ checked }) {
  return (
    <div
      className={`flex-shrink-0 w-7 h-7 min-w-7 min-h-7 rounded-full border border-black flex items-center justify-center cursor-pointer`}
    >
      <div
        className={`w-5 h-5 rounded-full transition-colors duration-300 ${checked ? 'bg-[#C8FF75]' : 'bg-transparent'}`}
      />
    </div>
  );
}

function GridCheckboxGroup(props) {
  const { input, field, error, readOnly } = props;
  const { options } = input;

  const value = Array.isArray(field.value) ? field.value : [];

  const handleChange = (optValue) => {
    if (readOnly) return;

    let newValue;
    if (value.includes(optValue)) {
      newValue = value.filter((v) => v !== optValue);
    } else {
      newValue = [...value, optValue];
    }
    field.onChange(newValue);
  };

  return (
    <FormControl className="w-full">
      <Grid container spacing={2}>
        {options.map((opt, idx) => (
          <Grid item xs={opt.colSpan || 6} key={idx}>
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleChange(opt.value)}>
              <CustomCheckbox checked={value.includes(opt.value)} />
              <span className="text-[12px] md:text-[15px]">{opt.label}</span>
            </div>
          </Grid>
        ))}
      </Grid>
      {!!error && <FormHelperText error sx={{color: "#FF2023 !important"}}>{error.message}</FormHelperText>}
    </FormControl>
  );
}

export default GridCheckboxGroup;
