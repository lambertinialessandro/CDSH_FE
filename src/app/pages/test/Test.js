import { Box, Typography, useTheme } from '@mui/material';
import Ribbons from 'app/shared-components/ReactBits/Ribbons';
import LoopBanner from '../../shared-components/banner/LoopBanner';

function Test(props) {
  const theme = useTheme();

  return (
    <Box className="relative min-h-[100vh]">
      <Ribbons
        baseThickness={15}
        colors={[theme.palette.secondary.main, '#b66eff', theme.palette.primary.main]}
        speedMultiplier={0.3}
        maxAge={400}
        offsetFactorX={0.005}
        offsetFactorY={0.1}
        enableFade={false}
        enableShaderEffect={false}
      />

      <Box className="relative" sx={{ background: '#ffffff00', zIndex: 1 }}>
        <Box component="section" className="py-[110px] px-[45px] flex flex-col justify-center items-center">
          <Typography
            className="mb-[110px] flex flex-col justify-center items-center"
            sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}
          >
            Test Section – For Development Purposes Only
          </Typography>
        </Box>

        <Box component="section" className="py-[110px] px-[48px] flex justify-center items-start gap-[48px]">
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: '400',
            }}
          >
            Die Contemporary Dance School Hamburg bietet dir zeitgenössischen Tanz auf hohem Niveau und die Entwicklung
            deiner künstlerischen Persönlichkeit im Austausch mit erfahrenen Mentor*innen aus aller Welt. Das tägliche
            Training bereitet dich auf die Anforderungen deiner Karriere im Bühnentanz vor. Als staatlich anerkannte
            Berufsfachschule für zeitgenössischen Bühnentanz bietet dir die CDSH eine dreijährige praxisnahe
            Tanzausbildung, bringt dich in Kontakt mit Künstler*innen aus der Szene und
          </Typography>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: '400',
            }}
          >
            kooperiert mit vielen relevanten Bereichen der tänzerischen Bildung. Ein wirksames Unterrichtsprogramm hilft
            dir, dich technisch, künstlerisch und kreativ weiterzuentwickeln. Durch choreografische Projektarbeit
            bekommst du ein Gefühl für die professionelle Arbeit und sammelst Bühnenerfahrung durch regelmäßige
            Auftritte im Theater. Ein erfahrenes Team aus Künstler*innen und Pädagog*innen unterstützt dich bei deiner
            Entwicklung in der tänzerischen Ausbildung.
          </Typography>
        </Box>

        <Box
          component="section"
          className="py-[110px] px-[48px] flex justify-center items-start gap-[48px]"
          sx={{ background: theme.palette.secondary.main }}
        >
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: '400',
            }}
          >
            Die Contemporary Dance School Hamburg bietet dir zeitgenössischen Tanz auf hohem Niveau und die Entwicklung
            deiner künstlerischen Persönlichkeit im Austausch mit erfahrenen Mentor*innen aus aller Welt. Das tägliche
            Training bereitet dich auf die Anforderungen deiner Karriere im Bühnentanz vor. Als staatlich anerkannte
            Berufsfachschule für zeitgenössischen Bühnentanz bietet dir die CDSH eine dreijährige praxisnahe
            Tanzausbildung, bringt dich in Kontakt mit Künstler*innen aus der Szene und
          </Typography>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: '400',
            }}
          >
            kooperiert mit vielen relevanten Bereichen der tänzerischen Bildung. Ein wirksames Unterrichtsprogramm hilft
            dir, dich technisch, künstlerisch und kreativ weiterzuentwickeln. Durch choreografische Projektarbeit
            bekommst du ein Gefühl für die professionelle Arbeit und sammelst Bühnenerfahrung durch regelmäßige
            Auftritte im Theater. Ein erfahrenes Team aus Künstler*innen und Pädagog*innen unterstützt dich bei deiner
            Entwicklung in der tänzerischen Ausbildung.
          </Typography>
        </Box>

        <Box
          component="section"
          className="flex justify-start items-center w-full my-[110px] h-[127px] overflow-hidden"
        >
          <LoopBanner>
            <Typography
              className="min-w-max flex items-center"
              sx={{
                fontSize: '80px',
                fontWeight: '400',
                whiteSpace: 'nowrap',
                display: 'inline-block',
                marginRight: '45px',
              }}
            >
              OFFENHEIT, RESPEKT, TOLERANZ, KREATIVITÄT
            </Typography>
          </LoopBanner>
        </Box>

        <Box component="section" className="py-[120px] flex flex-col justify-center items-center text-center">
          <Typography
            sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: '1', marginBottom: '32px' }}
          >
            Du möchtest uns kennenlernen?
          </Typography>
          <Typography
            className="max-w-[740px] min-w-[50%] text-center"
            sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}
          >
            Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder
            telefonisch für dich da.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Test;
