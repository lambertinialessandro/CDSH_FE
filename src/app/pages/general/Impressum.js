import { Box, Typography } from '@mui/material';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectImpressumData, setImpressumData } from 'app/store/app/pageSlice';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';

function Impressum() {
  const dispatch = useDispatch();
  const userLanguage = useSelector(selectUserLanguage);

  const impressumData = useSelector((state) => selectImpressumData(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (impressumData) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/impressum?lang=${userLanguage}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setImpressumData({ userLanguage, data }));
      })
      .catch((error) => {
        if (userLanguage === 'en') {
          const mockData = {
            title: 'Imprint',
            text_blocks: [
              '**Imprint**\n\nInformation according to \u00a7 5 TMG (German Telemedia Act):\n\nCDSH Contemporary Dance School Hamburg GmbH\n\nStresemannstra\u00dfe 374 (Entrance B)\n\n22761 Hamburg\n\n**Represented by:**\n\nJavier B\u00e1ez-V\u00e9lez\n\n**Contact:**\n\nPhone: +49 40 41924560\n\nFax: +49 40 2805 3310\n\nEmail: info@cdsh.de\n\nRegister Court: Amtsgericht Hamburg (District Court Hamburg)\n\nRegistration Number: HRB 109435\n\nVAT ID: Value Added Tax Identification Number according to \u00a727 a\n\nValue Added Tax Act: DE264810657\n\n**Concept & Design:**\n\nGreat At Studio, Lea Schmihing\n\n**Technical Implementation:**\n\nDenise Landini, Alessandro Lambertini\n\n**Image Credits:**\n\nOlaf Rocksien, Sabine Hanse, Carsten Thun, Shuk Orani, Ute Diercks, Marcus Renner, Stefan Mohr, Thomas B\u00fcnning, Karin Brodowsky, Javier B\u00e1ez\n\n**Disclaimer**\n\n**Liability for Content**\n\nAs a service provider, we are responsible for our own content on these pages in accordance with general law pursuant to Section 7 (1) TMG. However, pursuant to Sections 8 to 10 TMG, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general laws remain unaffected by this. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. If we become aware of corresponding legal violations, we will remove this content immediately.\n\n**Liability for Links**\n\nOur offer contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a legal violation. If we become aware of legal violations, we will remove such links immediately.\n\n**Copyright**\n\nThe content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of legal violations, we will remove such content immediately.',
            ],
          };
          dispatch(setImpressumData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            title: 'Impressum',
            text_blocks: [
              '**Impressum:**\n\nAngaben gem\u00e4\u00df \u00a7 5 TMG:\n\nCDSH Contemporary Dance School Hamburg GmbH\n\nStresemannstra\u00dfe 374 (Eingang B)\n\n22761 Hamburg\n\n**Vertreten durch:**\n\nJavier B\u00e1ez-V\u00e9lez\n\n**Kontakt:**\n\nTelefon: +49 40 41924560\n\nTelefax: +49 40 2805 3310\n\nE-Mail: info@cdsh.de\n\nRegistergericht: Amtsgericht Hamburg\n\nRegisternummer: HRB 109435\n\nUmsatzsteuer-ID: Umsatzsteuer-Identifikationsnummer gem\u00e4\u00df \u00a727 a\n\nUmsatzsteuergesetz:DE264810657\n\n**Konzeption & Design:**\n\nGreat At Studio, Lea Schmihing\n\n**Technische Umsetzung:**\n\nDenise Landini, Alessandro Lambertini\n\n**Bildnachweis:**\n\nOlaf Rocksien, Sabine Hanse, Carsten Thun, Shuk Orani, Ute Diercks, Marcus Renner, Stefan Mohr, Thomas B\u00fcnning, Karin Brodowsky, Javier B\u00e1ez\n\nHaftungsausschluss (Disclaimer)\n\nHaftung f\u00fcr Inhalte\n\nAls Diensteanbieter sind wir gem\u00e4\u00df \u00a7 7 Abs.1 TMG f\u00fcr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00a7\u00a7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00fcbermittelte oder gespeicherte fremde Informationen zu \u00fcberwachen oder nach Umst\u00e4nden zu forschen, die auf eine rechtswidrige T\u00e4tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\u00fchrt. Eine diesbez\u00fcgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\u00f6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.\n\nHaftung f\u00fcr Links\n\nUnser Angebot enth\u00e4lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00f6nnen wir f\u00fcr diese fremden Inhalte auch keine Gew\u00e4hr \u00fcbernehmen. F\u00fcr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\u00f6gliche Rechtsverst\u00f6\u00dfe \u00fcberpr\u00fcft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.\n\nUrheberrecht\n\nDie durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\u00e4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00dferhalb der Grenzen des Urheberrechtes bed\u00fcrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\u00fcr den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
            ],
          };
          dispatch(setImpressumData({ userLanguage, data: mockData }));
        }

        // TODO: commented for temp deploy
        // console.error('Fetching error:', error);
        // setError(error);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [userLanguage]);

  if (loading) return <LoadingPage />;
  if (error || !impressumData) return <ErrorPage />;

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
            {impressumData.title}
          </Typography>
        </Box>
        <Box
          className="max-w-[1280px] w-full flex flex-col"
          sx={{
            gap: { xs: '16px', md: '32px' },
          }}
        >
          {impressumData.text_blocks.map((markdownString, idx) => (
            <Box key={idx} className="text-left">
              <ReactMarkdown children={markdownString} components={renderers} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Impressum;
