import { Close } from '@mui/icons-material';
import { Button, FormControl, FormLabel, Grid, Chip, Typography, Box, IconButton } from '@mui/material';

function UploadButton(props) {
  const { input, field, error, readOnly } = props;
  const { label, required, size, ...othProps } = input;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button
        variant=""
        component="label"
        className="rounded-full min-h-fit h-[28px] py-[2px] px-[12px]"
        sx={{
          color: '#000000',
          fontSize: '15px',
          lineHeight: 'normal',
          textTransform: 'capitalize',
          zIndex: 10,
          transition: 'color 0.2s',
          border: '1px solid black',
          boxShadow: 0,
        }}
        disableRipple
      >
        {label}
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.bmp"
          hidden
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const isValidFormat = ['image/jpeg', 'image/png', 'image/bmp'].includes(file.type);
              const isValidSize = file.size <= 3 * 1024 * 1024; // 3MB
              if (!isValidFormat) {
                alert('Only JPG, PNG, BMP formats allowed');
                return;
              }
              if (!isValidSize) {
                alert('Max file size is 3MB');
                return;
              }
              field.onChange(file);
            }
          }}
        />
      </Button>
      {field.value && (
        <div className="flex gap-2 items-center">
          <Typography sx={{ color: '#000000' }}>{field.value.name}</Typography>
          <IconButton
            color="primary"
            sx={{
              padding: '0',
              color: '#000000',
              fontSize: '11px',
              border: '1px solid #000000',
              boxShadow: 0,
            }}
            onClick={() => field.onChange(null)}
          >
            <Close />
          </IconButton>
        </div>
      )}
      {!!error && (
        <Typography color="error" variant="caption">
          {error.message}
        </Typography>
      )}
    </div>
  );
}

export default UploadButton;
