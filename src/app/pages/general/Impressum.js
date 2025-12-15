import { Box, Typography } from '@mui/material';

const paragraphs = [
  {
    title: 'Impressum:',
    text: [
      'Angaben gemäß § 5 TMG:',
      'CDSH Contemporary Dance School Hamburg GmbH',
      'Stresemannstraße 374 (Eingang B)',
      '22761 Hamburg',
    ],
  },
  { title: 'Vertreten durch:', text: ['Javier Báez-Vélez'] },
  {
    title: 'Kontakt:',
    text: [
      'Telefon: +49 40 41924560',
      'Telefax: +49 40 2805 3310',
      'E-Mail: info@cdsh.de',
      '',
      'Registergericht: Amtsgericht Hamburg',
      'Registernummer: HRB 109435',
      '',
      'Umsatzsteuer-ID: Umsatzsteuer-Identifikationsnummer gemäß §27 a',
      'Umsatzsteuergesetz:DE264810657',
    ],
  },
  { title: 'Konzeption & Design:', text: ['Great At Studio, Lea Schmihing'] },
  { title: 'Technische Umsetzung:', text: ['Denise Landini, Alessandro Lambertini'] },
  {
    title: 'Bildnachweis:',
    text: [
      'Olaf Rocksien, Sabine Hanse, Carsten Thun, Shuk Orani, Ute Diercks, Marcus Renner, Stefan Mohr, Thomas Bünning, Karin Brodowsky, Javier Báez',
      '',
      'Haftungsausschluss (Disclaimer)',
      '',
      'Haftung für Inhalte',
      'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
      '',
      'Haftung für Links',
      'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
      '',
      'Urheberrecht',
      'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    ],
  },
];

function Impressum() {
  return (
    <>
      <Box
        component="section"
        className="px-[48px] flex flex-col justify-start items-center"
        sx={{
          gap: { xs: '24px', md: '48px' },
          py: { xs: '55px', md: '110px' },
        }}
      >
        <Box
          className="max-w-[1280px] w-full flex justify-start items-start"
          sx={{
            padding: { xs: '64px 56px 46px 0px', md: '120px 56px 46px 0px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '50px', md: '80px' },
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            Impressum
          </Typography>
        </Box>
        <Box
          className="max-w-[1280px] flex flex-col"
          sx={{
            gap: { xs: '16px', md: '32px' },
          }}
        >
          {paragraphs.map(({ title, text }, idx) => {
            return (
              <Box key={idx} className="flex flex-col gap-1">
                <Typography
                  className="text-left underline"
                  sx={{
                    color: '#000000 ',
                    fontSize: { xs: '15px', md: '30px' },
                    fontWeight: '400',
                    lineHeight: 'normal',
                  }}
                >
                  {title}
                </Typography>
                {text.map((line, key) => {
                  return (
                    <Typography
                      key={`${idx}-${key}`}
                      className="text-left"
                      sx={{
                        color: '#000000 ',
                        fontSize: { xs: '15px', md: '30px' },
                        fontWeight: '400',
                        lineHeight: 'normal',
                        ...(line === '' ? { height: { xs: '15px', md: '30px' } } : {}),
                      }}
                    >
                      {line}
                    </Typography>
                  );
                })}
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Impressum;
