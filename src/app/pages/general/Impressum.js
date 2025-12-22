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
              '**Information provided according to Sec. 5 German Telemedia Act (TMG):**\n\nContemporary Dance School Hamburg GmbH\n\nStresemannstra\u00dfe 374 (Eingang B)\n\n22761 Hamburg',
              '**Represented by:**\n\nJavier B\u00e1ez-V\u00e9lez',
              '**Contact:**\n\nPhone: +49 40 41924560\n\nFax: +49 40 2805 3310\n\nE-mail: info@cdsh.de',
              '**Registering court:**  Amtsgericht Hamburg\n\n**Registration number:** HRB 109435',
              '**VAT:** VAT Id number according to Sec. 27 a German Value Added\n\n** Tax Act: ** DE264810657',
              '**Concept & Design:**\nGreat At Studio, Lea Schmihing',
              '**Technical Implementation:**\n\nDenise Landini, Alessandro Lambertini',
              '**Image Credits:**\n\nOlaf Rocksien, Sabine Hanse, Carsten Thun, Shuk Orani, Ute Diercks, Marcus Renner, Stefan Mohr, Thomas B\u00fcnning, Karin Brodowsky, Javier B\u00e1ez',
              '**Haftungsausschluss (Disclaimer)**',
              '**Liability for Contents**\n\nAs service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities. Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.',
              '**Liability for Links**\n\nOur offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents. The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.',
              '**Copyright**\n\nContents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only. The commercial use of our contents without permission of the originator is prohibited. Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.',
            ],
          };
          dispatch(setImpressumData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            title: 'Impressum',
            text_blocks: [
              '**Angaben gem\u00e4\u00df \u00a7 5 TMG:**\n\nCDSH Contemporary Dance School Hamburg GmbH\n\nStresemannstra\u00dfe 374 (Eingang B)\n\n22761 Hamburg',
              '**Vertreten durch:**\n\nJavier B\u00e1ez-V\u00e9lez',
              '**Kontakt:**\n\nTelefon: +49 40 41924560\n\nTelefax: +49 40 2805 3310\n\nE-Mail: info@cdsh.de',
              '**Registergericht:** Amtsgericht Hamburg\n\n**Registernummer:** HRB 109435',
              '**Umsatzsteuer-ID:** Umsatzsteuer-Identifikationsnummer gem\u00e4\u00df \u00a727 a\n\n**Umsatzsteuergesetz:** DE264810657',
              '**Konzeption & Design:**\n\nGreat At Studio, Lea Schmihing',
              '**Technische Umsetzung:**\n\nDenise Landini, Alessandro Lambertini',
              '**Bildnachweis:**\n\nOlaf Rocksien, Sabine Hanse, Carsten Thun, Shuk Orani, Ute Diercks, Marcus Renner, Stefan Mohr, Thomas B\u00fcnning, Karin Brodowsky, Javier B\u00e1ez',
              '**Haftungsausschluss (Disclaimer)**',
              '**Haftung f\u00fcr Inhalte**\n\nAls Diensteanbieter sind wir gem\u00e4\u00df \u00a7 7 Abs.1 TMG f\u00fcr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00a7\u00a7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00fcbermittelte oder gespeicherte fremde Informationen zu \u00fcberwachen oder nach Umst\u00e4nden zu forschen, die auf eine rechtswidrige T\u00e4tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\u00fchrt. Eine diesbez\u00fcgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\u00f6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
              '**Haftung f\u00fcr Links**\n\nUnser Angebot enth\u00e4lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00f6nnen wir f\u00fcr diese fremden Inhalte auch keine Gew\u00e4hr \u00fcbernehmen. F\u00fcr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\u00f6gliche Rechtsverst\u00f6\u00dfe \u00fcberpr\u00fcft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
              '**Urheberrecht**\n\nDie durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\u00e4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00dferhalb der Grenzen des Urheberrechtes bed\u00fcrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\u00fcr den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
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
