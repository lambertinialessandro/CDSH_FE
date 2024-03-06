import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Home(props) {
  const theme = useTheme();
  const { t } = useTranslation('common');
  const button = t('common');
  console.log('button', button);

  return (
    <>
      <section className="header relative items-center flex h-screen max-h-860-px">
        <Box className="z-2 items-center flex w-2/4">
          <Box
            sx={{
              background: 'rgba( 0, 0, 0, 0.4 )',
              boxShadow: '0 8px 32px 0 rgba( 0, 0, 0, 0.4 )',
              backdropFilter: 'blur( 10px )',
              borderRadius: '10px',
              border: '1px solid rgba( 119, 119, 119, 0.20 )',
              padding: '25px',
            }}
          >
            <Typography
              className="font-semibold"
              style={{
                fontSize: '32px',
                color: 'rgb(186 186 186)',
                textShadow: '0 0 4px black',
                marginBottom: '10px',
              }}
            >
              Welcome to the CDSH!
            </Typography>
            <Typography
              className="mt-4 leading-relaxed"
              style={{ fontSize: '24px', color: 'rgb(186 186 186)', textShadow: '0 0 4px black' }}
            >
              The CDSH - CONTEMPORARY DANCE SCHOOL HAMBURG is an officially recognised school for
              contemporary dance. It is the only school of its kind in northern Germany. The three
              years professional dance training focus on contemporary and modern dance techniques,
              improvisation, composition and on classical ballet. An experienced team of
              international dancers and instructors will help you achieve your goals and give you
              the skills needed for your professional career as a dancer and/ or performer.
            </Typography>
          </Box>
        </Box>
        <video
          autoPlay
          loop
          muted
          className="w-2/4 aspect-video object-cover"
          src={require('../../assets/img/CDSH - Trailer Final Performance 2015 - ANDERERSEITS - 3th year.mp4')}
        ></video>
      </section>

      <section
        className="pt-12 md:pt-40 pb-40 relative"
        style={{ background: theme.palette.background.light_2 }}
      >
        <Typography variant="h6">
          #include iostream #include string using namespace std; // Definizione della struct Persona
          struct Persona string nome; int eta; double altezza; ; int main() // Creazione di una
          variabile di tipo Persona Persona persona1; // Accesso e modifica dei membri della struct
          persona1.nome = "Mario"; persona1.eta = 30; persona1.altezza = 1.75; // Accesso ai membri
          della struct cout "Nome: " persona1.nome endl; cout "Età: " persona1.eta " anni" endl;
          cout "Altezza: " persona1.altezza " metri" endl; // Inizializzazione della struct durante
          la dichiarazione Persona persona2 = "Anna", 25, 1.60; // Array di struct Persona
          persone[3] = "Giovanni", 40, 1.80, "Lucia", 35, 1.65, "Marco", 28, 1.70 ; // Iterazione
          sugli elementi dell'array di struct cout "\nElenco delle persone:" endl; for (int i = 0; i
          3; ++i) cout "Nome: " persone[i].nome ", Età: " persone[i].eta ", Altezza: "
          persone[i].altezza endl; // Passaggio di una struct a una funzione void
          stampaPersona(const Persona& persona); stampaPersona(persona1); return 0; // Funzione per
          stampare i dettagli di una persona void stampaPersona(const Persona& persona) cout
          "\nDettagli della persona:" endl; cout "Nome: " persona.nome endl; cout "Età: "
          persona.eta " anni" endl; cout "Altezza: " persona.altezza " metri" endl;
        </Typography>
        <Typography variant="h6">
          #include iostream #include string using namespace std; // Definizione della struct Persona
          struct Persona string nome; int eta; double altezza; ; int main() // Creazione di una
          variabile di tipo Persona Persona persona1; // Accesso e modifica dei membri della struct
          persona1.nome = "Mario"; persona1.eta = 30; persona1.altezza = 1.75; // Accesso ai membri
          della struct cout "Nome: " persona1.nome endl; cout "Età: " persona1.eta " anni" endl;
          cout "Altezza: " persona1.altezza " metri" endl; // Inizializzazione della struct durante
          la dichiarazione Persona persona2 = "Anna", 25, 1.60; // Array di struct Persona
          persone[3] = "Giovanni", 40, 1.80, "Lucia", 35, 1.65, "Marco", 28, 1.70 ; // Iterazione
          sugli elementi dell'array di struct cout "\nElenco delle persone:" endl; for (int i = 0; i
          3; ++i) cout "Nome: " persone[i].nome ", Età: " persone[i].eta ", Altezza: "
          persone[i].altezza endl; // Passaggio di una struct a una funzione void
          stampaPersona(const Persona& persona); stampaPersona(persona1); return 0; // Funzione per
          stampare i dettagli di una persona void stampaPersona(const Persona& persona) cout
          "\nDettagli della persona:" endl; cout "Nome: " persona.nome endl; cout "Età: "
          persona.eta " anni" endl; cout "Altezza: " persona.altezza " metri" endl;
        </Typography>
        <Typography variant="h6">
          #include iostream #include string using namespace std; // Definizione della struct Persona
          struct Persona string nome; int eta; double altezza; ; int main() // Creazione di una
          variabile di tipo Persona Persona persona1; // Accesso e modifica dei membri della struct
          persona1.nome = "Mario"; persona1.eta = 30; persona1.altezza = 1.75; // Accesso ai membri
          della struct cout "Nome: " persona1.nome endl; cout "Età: " persona1.eta " anni" endl;
          cout "Altezza: " persona1.altezza " metri" endl; // Inizializzazione della struct durante
          la dichiarazione Persona persona2 = "Anna", 25, 1.60; // Array di struct Persona
          persone[3] = "Giovanni", 40, 1.80, "Lucia", 35, 1.65, "Marco", 28, 1.70 ; // Iterazione
          sugli elementi dell'array di struct cout "\nElenco delle persone:" endl; for (int i = 0; i
          3; ++i) cout "Nome: " persone[i].nome ", Età: " persone[i].eta ", Altezza: "
          persone[i].altezza endl; // Passaggio di una struct a una funzione void
          stampaPersona(const Persona& persona); stampaPersona(persona1); return 0; // Funzione per
          stampare i dettagli di una persona void stampaPersona(const Persona& persona) cout
          "\nDettagli della persona:" endl; cout "Nome: " persona.nome endl; cout "Età: "
          persona.eta " anni" endl; cout "Altezza: " persona.altezza " metri" endl;
        </Typography>
      </section>
    </>
  );
}

export default Home;
