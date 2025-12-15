import React, { useCallback, useMemo } from 'react';
import {
  FormControl,
  Grid,
  RadioGroup,
  FormHelperText,
  Chip,
  Radio,
  FormControlLabel,
  Typography,
  Box,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// --- STYLES AND UTILITIES ---

// 1. STYLED RADIO COMPONENT (Handles the visual representation)
const StyledRadioIcon = styled('div')(({ theme, selected }) => ({
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  border: `1px solid ${theme.palette.text.primary}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  [theme.breakpoints.up('md')]: {
    width: '73px',
    height: '73px',
  },
  '&::after': {
    content: '""',
    display: 'block',
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.short,
    }),
    // Use the hardcoded green color
    backgroundColor: selected ? '#C8FF75' : 'transparent',
    [theme.breakpoints.up('md')]: {
      width: '53px',
      height: '53px',
    },
  },
}));

// The actual invisible Radio component that uses the styled icon
const CustomStyledRadio = (props) => (
  <Radio
    disableRipple
    checkedIcon={<StyledRadioIcon selected={true} />}
    icon={<StyledRadioIcon selected={false} />}
    {...props}
  />
);

// 2. CHIP STYLES (Static styles for performance)
const chipSx = {
  width: '100%',
  borderColor: 'text.primary',
  boxShadow: 0,
  fontSize: { xs: '12px', md: '15px' },
  '.MuiChip-label': {
    minWidth: 'min-content',
  },
};

// --- EXTRACTED COMPONENT ---

/**
 * Renders a single main radio option and its associated sub-selection chips.
 * This is now a separate component to correctly use the useMemo hook.
 */
function GridRadioOption({ opt, field, isParentSelected, readOnly, handleSubOptionClick }) {
  // ✅ FIX: useMemo is now called correctly at the top level of this component.
  const MainLabelContent = useMemo(
    () => (
      <Box>
        <Typography
          component="span"
          //className="text-[40px] border border-black rounded-full py-[6px] w-full text-center"
          sx={{
            width: '100%',
            fontSize: { xs: '20px', md: '40px' },
            border: '1px solid',
            borderColor: 'text.primary',
            borderRadius: '9999px',
            py: { xs: '6px', md: '10px' },
            display: 'block',
            textAlign: 'center',
            cursor: readOnly ? 'default' : 'pointer',
          }}
        >
          {opt.label}
        </Typography>
      </Box>
    ),
    [opt.label, readOnly]
  );

  return (
    <Grid
      item
      xs={12}
      md={opt.subSelection ? 12 : 6}
      key={opt.value}
      sx={{
        opacity: readOnly && !isParentSelected ? 0.6 : 1,
        width: '100%',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Main option control */}
        <Grid item xs={12} md={opt.subSelection ? 6 : 12}>
          <FormControlLabel
            value={opt.value}
            className="w-full"
            control={<CustomStyledRadio />}
            label={MainLabelContent}
            disabled={readOnly}
            sx={{
              m: 0,
              alignItems: 'center',
              '.MuiRadio-root': { mr: 1 },
              '.MuiTypography-root': { width: '100%' },
            }}
          />
        </Grid>

        {/* Sub-selection row (Chips) */}
        {opt.subSelection && (
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {opt.subSelection.map((subOpt) => {
                const selected = isParentSelected && field.value?.[1] === subOpt.value;

                return (
                  <Grid item xs={12} md={subOpt.colSpan || 6} key={subOpt.value}>
                    <Chip
                      label={subOpt.label}
                      clickable
                      disableRipple
                      color={selected ? 'primary' : 'default'}
                      variant={selected ? 'filled' : 'outlined'}
                      disabled={readOnly || !isParentSelected}
                      sx={chipSx}
                      onClick={() => handleSubOptionClick(subOpt.value)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

// --- MAIN COMPONENT ---

function SpecialGridRadioGroup(props) {
  const { input, field, error, readOnly } = props;
  const { options } = input;

  const isMobile = useMediaQuery('(max-width:900px)');

  // Handler for all sub-option clicks (memoized and passed down)
  const handleSubOptionClick = useCallback(
    (subOptValue) => {
      // field.value is expected to be [mainValue, subValue]
      const mainValue = field.value?.[0];
      if (mainValue) {
        field.onChange([mainValue, subOptValue]);
      }
    },
    [field]
  );

  return (
    <FormControl error={!!error} fullWidth>
      <RadioGroup
        name={field.name}
        // RadioGroup only controls the main value (the first element of the array)
        value={field.value?.[0] ?? ''}
        // onChange sets only the main value
        onChange={(e) => field.onChange([e.target.value])}
      >
        <Grid container spacing={isMobile ? 2 : 4}>
          {options.map((opt, idx) => {
            const isParentSelected = field.value?.[0] === opt.value;

            return (
              <GridRadioOption
                key={opt.value ?? idx}
                opt={opt}
                field={field}
                isParentSelected={isParentSelected}
                readOnly={readOnly}
                handleSubOptionClick={handleSubOptionClick}
              />
            );
          })}
        </Grid>
      </RadioGroup>
      {!!error && <FormHelperText sx={{color: "#FF2023 !important"}}>{error.message}</FormHelperText>}
    </FormControl>
  );
}

export default SpecialGridRadioGroup;
