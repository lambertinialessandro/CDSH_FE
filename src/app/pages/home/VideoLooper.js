import { Box, Typography } from "@mui/material";
import { selectIsBannerOpen } from "app/store/app/mainSlice";
import { useSelector } from "react-redux";


function VideoLooper(props){

    const isBannerOpen = useSelector(selectIsBannerOpen);
    console.log(isBannerOpen)

    return <Box
    component="section"
    className="header relative flex items-center max-h-860-px"
    sx={{ height: `calc(100vh - ${isBannerOpen ? "45px" : "0px"})` }}
  >
    <Box
      className="h-full flex justify-start items-end pl-[45px] pb-[24px]"
      sx={{ marginLeft: '100px', zIndex: '2' }}
    >
      <Box className="w-full" sx={{ color: '#ffffff', fontSize: '58px', fontWeight: '400' }}>
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '58px',
            fontWeight: '400',
          }}
        >
          Contemporary Dance
        </Typography>
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '58px',
            fontWeight: '400',
          }}
        >
          School Hamburg
        </Typography>
      </Box>
    </Box>
    <Box
      component="video"
      autoPlay
      loop
      muted
      src={`${process.env.PUBLIC_URL}/assets/images/CDSH - Trailer Final Performance cutted.mp4`}
      className="w-full h-full absolute top-0 b-auto left-0"
      sx={{ objectFit: 'cover', zIndex: '1' }}
    ></Box>
  </Box>
}

export default VideoLooper;