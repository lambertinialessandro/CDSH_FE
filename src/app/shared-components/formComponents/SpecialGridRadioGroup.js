import { FormControl, Grid, RadioGroup, FormHelperText, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function CustomRadio({ selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex-shrink-0 w-[73px] h-[73px] rounded-full border border-black flex items-center justify-center cursor-pointer`}
    >
      <div
        className={`w-[53px] h-[53px] rounded-full transition-colors duration-300 ${
          selected ? 'bg-[#C8FF75]' : 'bg-transparent'
        }`}
      />
    </div>
  );
}

function SpecialGridRadioGroup(props) {
  const { input, field, error, readOnly } = props;
  const { options } = input;
  const theme = useTheme();

  return (
    <FormControl className="w-full">
      <RadioGroup name={field.name} value={field.value ?? ''} onChange={(e) => field.onChange([e.target.value])}>
        <Grid container spacing={4}>
          {options.map((opt, idx) => (
            <Grid
              item
              xs={opt.subSelection ? 12 : 6} // <--- dynamic columns
              key={idx}
            >
              <Grid
              container spacing={4}
            >
              {/* Main option */}
              <Grid
                item
                xs={opt.subSelection ? 6 : 12}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => !readOnly && field.onChange([opt.value])}
              >
                <CustomRadio selected={field.value?.includes(opt.value)} />
                <span className="text-[40px] border border-black rounded-full py-[6px] w-full text-center">
                  {opt.label}
                </span>
              </Grid>

              {/* Sub-selection row */}
              {opt.subSelection && (
                <Grid item xs={5} className="mt-2 ml-[86px]">
                  <RadioGroup
                    name={`${field.name}_${opt.value}_sub`}
                    value={opt.subValue ?? ''}
                    onChange={(e) => opt.onSubChange && opt.onSubChange(e.target.value)}
                  >
                    <Grid container spacing={2}>
                      {opt.subSelection.map((subOpt, subIdx) => {
                        const selected = field.value?.includes(subOpt.value);
                        return (
                          <Grid item xs={subOpt.colSpan || 6} key={subIdx}>
                            <Chip
                              label={subOpt.label}
                              clickable
                              disableRipple
                              color={selected ? 'primary' : 'default'}
                              variant={selected ? 'filled' : 'outlined'}
                              sx={{
                                flex: '1',
                                border: '1px solid black',
                                boxShadow: 0,
                              }}
                              onClick={() => {
                                if (field.value?.includes(opt.value)) {
                                  let newValue = [field.value[0], subOpt.value];
                                  field.onChange(newValue);
                                }
                              }}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </RadioGroup>
                </Grid>
              )}
            </Grid>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
      {!!error && <FormHelperText error>{error.message}</FormHelperText>}
    </FormControl>
  );
}

export default SpecialGridRadioGroup;
