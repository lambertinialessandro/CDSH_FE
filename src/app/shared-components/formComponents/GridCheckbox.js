import { FormControl, FormHelperText, Grid } from '@mui/material';

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

function GridCheckbox(props) {
  const { input, field, error, readOnly } = props;
  const { label } = input;

  const value = field.value;

  const handleChange = (optValue) => {
    if (readOnly) return;

    field.onChange(optValue);
  };

  return (
    <FormControl className="w-full">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleChange(!value)}>
            <CustomCheckbox checked={value} />
            <span className="text-[12px] md:text-[15px]">{label}</span>
          </div>
        </Grid>
      </Grid>
      {!!error && <FormHelperText error sx={{color: "#FF2023 !important"}}>{error.message}</FormHelperText>}
    </FormControl>
  );
}

export default GridCheckbox;
