import { Box } from '@mui/material';
import Ribbons from 'app/shared-components/ReactBits/Ribbons';
import { selectIsBannerOpen } from 'app/store/app/mainSlice';
import { useSelector } from 'react-redux';

function Test(props) {
    const isBannerOpen = useSelector(selectIsBannerOpen);

  return (
    <Box
      component="section"
      className="header relative flex items-center max-h-860-px"
      sx={{ height: `calc(100vh - ${isBannerOpen ? '45px' : '0px'})` }}
    >
      <Ribbons
        baseThickness={15}
        colors={['#eae7f8', '#b66eff', '#8f20ff']}
        speedMultiplier={0.3}
        maxAge={400}
        offsetFactorX={0.02}
        offsetFactorY={0.2}
        enableFade={false}
        enableShaderEffect={false}
        
      />
    </Box>
  );
}

export default Test;
