import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import BigLink from 'app/shared-components/link/BigLink';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectAusbuildungData, setAusbuildungData } from 'app/store/app/pageSlice';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import AktuellesSection from '../aktuelles/AktuellesSection';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';
import InteractiveSubjects from './InteractiveSubjects';
import SubjectSelector from './SubjectSelector';

function Ausbildung() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const userLanguage = useSelector(selectUserLanguage);

  const ausbuildungData = useSelector((state) => selectAusbuildungData(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ausbuildungData) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/education?lang=${userLanguage}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setAusbuildungData({ userLanguage, data: data }));
      })
      .catch((error) => {
        if (userLanguage === 'en') {
          const mockData = {
            header: {
              headline: 'Training: Structure, subjects, costs',
              image: `${process.env.PUBLIC_URL}/assets/images/ausbildung/cdsh-willkommen-1.png`,
            },
            intro: {
              text_left:
                'We enable dancers to engage sustainably with diverse contemporary and classical dance techniques and styles, as well as receive training in numerous forms of movement and expression to prepare them for a career. In addition to regular training, we regularly invite international guests who share their knowledge with our trainees.',
              text_right:
                "Fostering the individual wishes of both individuals and groups is part of the CDSH's mission. We respond to the needs of our students and to current demands in the professional environment \u2013 \u200b\u200bour program is constantly evolving.",
            },
            audition_banner: {
              text: 'THE AUDITION DATES FOR 2025 ARE NOW ONLINE',
              link_text: 'REGISTER NOW',
            },
            subjects_balls: [
              {
                id: 0,
                title: 'Academic subjects',
                description:
                  'A combination of sound theory and a holistic mix of practical modules forms the basis of our training model.',
              },
              {
                id: 1,
                title: 'Dance technique',
                description:
                  'Focus on perfecting body awareness, technical precision, and physical strength across various styles. This module builds a versatile physical instrument capable of meeting the rigorous demands of professional contemporary choreography.',
              },
              {
                id: 2,
                title: 'Artistic Development',
                description:
                  'A dedicated journey to discover and consolidate your unique artistic identity and creative voice. Through personal research, students are guided to push expressive boundaries and develop an authentic, conscious stage presence.',
              },
              {
                id: 3,
                title: 'Choreographic Practice',
                description:
                  'A laboratory focused on the methods of composition and the creative process. Students learn to structure movement in space and time, working with resident and guest artists to transform abstract concepts into concrete performances.',
              },
              {
                id: 4,
                title: 'Stage Practice',
                description:
                  'Direct application of skills in a real performance context. This subject prepares students for the stage by focusing on spatial management, audience interaction, and the professional discipline required during high-level productions.',
              },
              {
                id: 5,
                title: 'Theory',
                description:
                  'A solid academic foundation that integrates physical practice with dance history, applied anatomy, and movement analysis. These studies provide the critical tools necessary to understand the cultural and scientific context of dance.',
              },
            ],
            filterCategories: [
              {
                id: 'major_subjects',
                name: 'Major Subjects',
              },
              {
                id: 'minor_subjects',
                name: 'Minor Subjects',
              },
              {
                id: 'theory_subjects',
                name: 'Theory Subjects',
              },
              {
                id: 'workshops',
                name: 'Workshops',
              },
            ],
            subjects: [
              {
                id: 'guest_choreography',
                name: 'Guest Choreography',
                description:
                  'Dynamic workshops led by visiting artists to expose students to diverse creative processes, varied stylistic demands, and professional networking.',
                teacher: 'Heidi',
                tab: ['Major Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects1.png`,
              },
              {
                id: 'feldenkrais',
                name: 'Feldenkrais',
                description:
                  "A somatic method focusing on mindful movement and body awareness to improve efficiency, reduce tension, and expand a dancer's physical range.",
                teacher: 'Cl\u00e0udia Par\u00e9s',
                tab: ['Minor Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects2.png`,
              },
              {
                id: 'history_dance',
                name: 'History of Dance',
                description:
                  'An academic exploration of the cultural, social, and artistic evolution of dance, providing essential context for contemporary practice.',
                teacher: 'Cl\u00e0udia Par\u00e9s',
                tab: ['Theory Subjects', 'Minor Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects3.png`,
              },
              {
                id: 'ballet',
                name: 'Ballet',
                description:
                  'The foundational discipline focused on posture, alignment, strength, and precision, serving as the structural basis for many other dance forms.',
                teacher: 'Hellena Stemm, Susanne Schubert, Amy Docktor',
                tab: ['Major Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects4.png`,
              },
              {
                id: 'floorwork',
                name: 'Floorwork',
                description:
                  "A technique centered on the dancer's relationship with the ground, emphasizing fluid transitions, weight shifts, and gravity-defying acrobatics.",
                teacher: '',
                tab: ['Major Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects5.png`,
              },
              {
                id: 'contemporary',
                name: 'Contemporary',
                description:
                  'A versatile genre that merges various styles, emphasizing expressive freedom, breath, and the exploration of new movement possibilities.',
                teacher: 'Mihir Grover, Raul Valdez',
                tab: ['Major Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects6.png`,
              },
              {
                id: 'improvisation',
                name: 'Improvisation',
                description:
                  'The practice of spontaneous movement to develop creative intuition, personal style, and the ability to react instantly to space and music.',
                teacher: 'Ursina Tossi',
                tab: ['Major Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects7.png`,
              },
              {
                id: 'partnering',
                name: 'Partnering',
                description:
                  'Focusing on the mechanics of physical interaction, including weight sharing, lifting, trust, and communication between two or more dancers.',
                teacher: '',
                tab: ['Major Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects1.png`,
              },
              {
                id: 'choreography',
                name: 'Choreography',
                description:
                  'The study of composition and movement design, teaching students how to transform concepts and emotions into structured stage works.',
                teacher: 'Javier, Yolanda, Ursina',
                tab: ['Major Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects2.png`,
              },
              {
                id: 'drama',
                name: 'Drama',
                description:
                  'An essential tool for dancers to develop stage presence, emotional depth, and the ability to portray characters through physical expression.',
                teacher: 'Isabel',
                tab: ['Minor Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects3.png`,
              },
              {
                id: 'Yoga',
                name: 'Yoga',
                description:
                  'A practice that enhances flexibility, balance, and mental focus, helping dancers build the inner strength and breath control required for high performance.',
                teacher: 'Irina',
                tab: ['Minor Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects4.png`,
              },
              {
                id: 'pilates',
                name: 'Pilates',
                description:
                  'A conditioning method centered on core stability and functional strength, designed to prevent injury and support the physical rigors of dance.',
                teacher: '',
                tab: ['Minor Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects5.png`,
              },
              {
                id: 'urban',
                name: 'Urban',
                description:
                  'An umbrella for street-originated styles like Hip-Hop and House, focusing on rhythm, isolation, social culture, and individual "groove."',
                teacher: '',
                tab: ['Workshops'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects6.png`,
              },
              {
                id: 'horton_technique',
                name: 'Horton Technique',
                description:
                  'A modern dance style known for its anatomical approach, utilizing lateral stretches and deep lunges to create a strong, flexible, and expressive body.',
                teacher: 'Stacey Denham',
                tab: ['Major Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects7.png`,
              },
              {
                id: 'graham_technique',
                name: 'Graham Technique',
                description:
                  'The pioneering modern technique based on the principles of "contraction and release," focusing on the core and the emotional power of the pelvis and torso.',
                teacher: 'Victoria Gonz\u00e1lez',
                tab: ['Major Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects1.png`,
              },
              {
                id: 'anatomy',
                name: 'Anatomy',
                description: '',
                teacher: '',
                tab: ['Theory Subjects'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects2.png`,
              },
            ],
            program_structure: {
              title: 'Structure & Organization',
              intro:
                'This three-year program is designed for applicants with solid prior knowledge of contemporary dance and ballet. Admission is via audition.',
              details:
                'Credits from other degree programs may be transferable. Lorem Ipsum ... translate study to ECTS.',
            },
            ausbildung_years: [
              {
                year: 1,
                headline: 'First Year',
                level: 'Basics',
                description:
                  'In the first year of training, the focus is on developing the basic dance techniques in various modern techniques, contemporary dance and classical ballet.',
              },
              {
                year: 2,
                headline: 'Second Year',
                level: 'Intensification and artistic development',
                description:
                  "In the second year, the basic techniques are deepened and developed. The subject of improvisation, as well as the development and presentation of an original piece within our solo project, contribute to finding one's own artistic language and being able to individually implement one's own creative impulses based on the learned technical fundamentals.",
              },
              {
                year: 3,
                headline: 'Third Year',
                level: 'Specialization, independent artistic work and company project',
                description:
                  "In your third year, you'll work creatively with your class. Regular showings prepare you for the company project in the final semester, where you'll gain valuable insights into the professional lives of dancers under realistic dance company conditions.",
              },
            ],
            costs: {
              headline: 'Cost',
              text: 'The tuition fee for one academic year is \u20ac6,360.00 and can be paid in 12 monthly installments of \u20ac530.00. In addition, there is a mandatory contribution of \u20ac60.00 for the work-in-progress presentations in all three years of study, \u20ac120.00 for the final project in the first and second years, \u20ac240.00 for the final project at the end of the third year, and \u20ac160.00 for the solo project in the second year. The CDSH is recognized by the German Federal Training Assistance Act (BAf\u00f6G) \u2013 we are happy to help you find an affordable student loan, which can be applied for starting in the second year of study.',
            },
            fortbildung: {
              headline: 'Further training',
              overview:
                'Continuing Education in Residence (**FIR**) is the exclusive professional development program of the Contemporary Dance School Hamburg \u2013 for trained stage dancers without current engagements who wish to maintain their training or further develop their skills.',
              schedule:
                'Two six-month blocks are available: **January 1 \u2013 July 1 or September 1 \u2013 March 1**. Participants can individually select up to 12 classes per week from the curriculum. The studios are also available for individual projects, which can be presented publicly as part of the "Work in Progress" series or the final project. Optional extras include up to six mentoring sessions and the opportunity to collaborate on up to two creations by the resident choreographers.',
              requirement:
                'Requirements: completed dance training or equivalent experience. Admission is via audition (*live, via video, or during the program*). Cost: **\u20ac300/month**',
              image: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-07-03 um 13.50.30 1.png`,
            },
            aktuelles: {
              headline: 'New',
              items: [
                {
                  title: 'What dies Looking Taste like',
                  description: 'Short description solo project "What does Looking Taste like"',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
                  projectId: 'solo_project_2024',
                },
                {
                  title: 'Meeting point',
                  description: 'Meeting point short description',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/meeting_point.png`,
                  projectId: 'meeting_point',
                },
                {
                  title: 'Under Utopia',
                  description: 'Under Utopia short description',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/under_utopia.png`,
                  projectId: 'under_utopia',
                },
                {
                  title: 'APERCEPTION',
                  description: 'APERCEPTION short description',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/aperception.png`,
                  projectId: 'aperception',
                },
                {
                  title: 'RESET',
                  description: 'RESET short description',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/reset.png`,
                  projectId: 'reset',
                },
              ],
            },
            footerCta: {
              show: true,
              title: 'Want to get to know us?',
              text: "We'd like to get to know you too. Besides the regular auditions, we're available by email or phone to answer any questions you may have about the training program.",
            },
          };
          dispatch(setAusbuildungData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            header: {
              headline: 'Ausbildung: Aufbau, F\u00e4cher Kosten',
              image: `${process.env.PUBLIC_URL}/assets/images/ausbildung/cdsh-willkommen-1.png`,
            },
            intro: {
              text_left:
                'Wir erm\u00f6glichen den T\u00e4nzer*innen eine nachhaltige Besch\u00e4ftigung mit unterschiedlichen zeitgen\u00f6ssischen und klassischen Tanztechniken und -stilen sowie die Ausbildung in zahlreichen Bewegungs- und Ausdrucksformen zur Vorbereitung auf den Beruf. Neben dem regul\u00e4ren Training laden wir regelm\u00e4\u00dfig internationale G\u00e4ste ein, die ihr Wissen mit unseren Auszubildenden teilen.',
              text_right:
                'Die F\u00f6rderung individueller W\u00fcnsche des Einzelnen und der Gruppe sind Bestandteil der Zielsetzung der CDSH. Wir reagieren auf die Bed\u00fcrfnisse unserer Studierenden und auf aktuelle Anspr\u00fcche des professionellen Umfeldes \u2013 unser Programm ist in st\u00e4ndigem Wandel begriffen.',
            },
            audition_banner: {
              text: 'DIE AUDITION TERMINE 2025 SIND JETZT ONLINE.',
              link_text: 'JETZT ANMELDEN',
            },
            subjects_balls: [
              {
                id: 0,
                title: 'F\u00e4cher',
                description:
                  'Eine Kombination aus fundierter Theorie und einem ganzheitlichen Mix aus praktischen Modulen bildet die Grundlage unseres Ausbildungsmodells.',
              },
              {
                id: 1,
                title: 'Tanztechnik',
                description:
                  'Fokus auf die Perfektionierung des K\u00f6rperbewusstseins, technischer Pr\u00e4zision und physischer Kraft in verschiedenen Stilen. Dieses Modul formt ein vielseitiges k\u00f6rperliches Instrument, das den hohen Anforderungen zeitgen\u00f6ssischer Choreografien gerecht wird.',
              },
              {
                id: 2,
                title: 'K\u00fcnstlerische Entwicklung',
                description:
                  'Eine Reise zur Entdeckung und Festigung der eigenen k\u00fcnstlerischen Identit\u00e4t und kreativen Stimme. Durch pers\u00f6nliche Recherche werden die Studierenden angeleitet, expressive Grenzen zu \u00fcberschreiten und eine authentische, bewusste B\u00fchnenpr\u00e4senz zu entwickeln.',
              },
              {
                id: 3,
                title: 'Choreografische Praxis',
                description:
                  'Ein Laboratorium, das sich auf Kompositionsmethoden und den kreativen Prozess konzentriert. Die Studierenden lernen, Bewegung in Raum und Zeit zu strukturieren, und arbeiten mit Dozenten sowie Gastk\u00fcnstlern zusammen, um abstrakte Konzepte in konkrete Performances zu verwandeln.',
              },
              {
                id: 4,
                title: 'B\u00fchnenpraxis',
                description:
                  'Die direkte Anwendung der erworbenen F\u00e4higkeiten in einem realen Auff\u00fchrungskontext. Dieses Fach bereitet auf die B\u00fchne vor, indem es sich auf die Raumgestaltung, die Interaktion mit dem Publikum und die f\u00fcr professionelle Produktionen erforderliche Disziplin konzentriert.',
              },
              {
                id: 5,
                title: 'Theorie',
                description:
                  'Ein fundiertes akademisches Fundament, das die physische Praxis mit Tanzgeschichte, angewandter Anatomie und Bewegungsanalyse verbindet. Diese Studien vermitteln die kritischen Werkzeuge, um den kulturellen und wissenschaftlichen Kontext des Tanzes zu verstehen.',
              },
            ],
            filterCategories: [
              {
                id: 'hauptf\u00e4cher',
                name: 'Hauptf\u00e4cher',
              },
              {
                id: 'nebenf\u00e4cher',
                name: 'Nebenf\u00e4cher',
              },
              {
                id: 'theorief\u00e4cher',
                name: 'Theorief\u00e4cher',
              },
              {
                id: 'workshops',
                name: 'Workshops',
              },
            ],
            subjects: [
              {
                id: 'guest_choreography',
                name: 'Gastchoreografie',
                description:
                  'Dynamische Workshops mit eingeladenen Künstler*innen, die den Studierenden Einblicke in unterschiedliche kreative Prozesse, vielfältige stilistische Anforderungen sowie professionelles Networking ermöglichen.',
                teacher: 'Heidi',
                tab: ['Hauptf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects1.png`,
              },
              {
                id: 'feldenkrais',
                name: 'Feldenkrais',
                description:
                  'Eine somatische Methode, die sich auf achtsame Bewegung und Körperwahrnehmung konzentriert, um Effizienz zu steigern, Spannungen zu reduzieren und den körperlichen Bewegungsradius von Tänzer*innen zu erweitern.',
                teacher: 'Clàudia Parés',
                tab: ['Nebenf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects2.png`,
              },
              {
                id: 'history_dance',
                name: 'Tanzgeschichte',
                description:
                  'Eine theoretische Auseinandersetzung mit der kulturellen, gesellschaftlichen und künstlerischen Entwicklung des Tanzes und ein wichtiges Fundament für die zeitgenössische Tanzpraxis.',
                teacher: 'Clàudia Parés',
                tab: ['Theorief\u00e4cher', 'Nebenf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects3.png`,
              },
              {
                id: 'ballet',
                name: 'Ballett',
                description:
                  'Die grundlegende Disziplin mit Fokus auf Haltung, Ausrichtung, Kraft und Präzision, die als strukturelle Basis für viele weitere Tanzformen dient.',
                teacher: 'Hellena Stemm, Susanne Schubert, Amy Docktor',
                tab: ['Hauptf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects4.png`,
              },
              {
                id: 'floorwork',
                name: 'Floorwork',
                description:
                  'Eine Technik, die sich mit der Beziehung des Körpers zum Boden beschäftigt und fließende Übergänge, Gewichtsverlagerungen sowie akrobatische Bewegungen im Zusammenspiel mit der Schwerkraft betont.',
                teacher: '',
                tab: ['Hauptf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects5.png`,
              },
              {
                id: 'contemporary',
                name: 'Contemporary',
                description:
                  'Ein vielseitiges Genre, das unterschiedliche Stile verbindet und den Fokus auf Ausdrucksfreiheit, Atmung sowie die Erforschung neuer Bewegungsmöglichkeiten legt.',
                teacher: 'Mihir Grover, Raul Valdez',
                tab: ['Hauptf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects6.png`,
              },
              {
                id: 'improvisation',
                name: 'Improvisation',
                description:
                  'Die Praxis spontaner Bewegung zur Entwicklung kreativer Intuition, eines persönlichen Stils sowie der Fähigkeit, unmittelbar auf Raum und Musik zu reagieren.',
                teacher: 'Ursina Tossi',
                tab: ['Hauptf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects7.png`,
              },
              {
                id: 'partnering',
                name: 'Partnering',
                description:
                  'Der Fokus liegt auf den Mechanismen physischer Interaktion, einschließlich Gewichtsübernahme, Heben, Vertrauen und Kommunikation zwischen zwei oder mehr Tänzer*innen.',
                teacher: '',
                tab: ['Hauptf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects1.png`,
              },
              {
                id: 'choreography',
                name: 'Choreografie',
                description:
                  'Die Auseinandersetzung mit Komposition und Bewegungsdesign, bei der Studierende lernen, Konzepte und Emotionen in strukturierte Bühnenwerke zu übersetzen.',
                teacher: 'Javier, Yolanda, Ursina',
                tab: ['Hauptf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects2.png`,
              },
              {
                id: 'drama',
                name: 'Schauspiel',
                description:
                  'Ein wesentliches Werkzeug zur Entwicklung von Bühnenpräsenz, emotionaler Tiefe und der Fähigkeit, Charaktere durch körperlichen Ausdruck darzustellen.',
                teacher: 'Isabel',
                tab: ['Nebenf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects3.png`,
              },
              {
                id: 'Yoga',
                name: 'Yoga',
                description:
                  'Eine Praxis zur Förderung von Flexibilität, Balance und mentaler Konzentration, die Tänzer*innen dabei unterstützt, innere Stärke und Atemkontrolle für hohe körperliche Anforderungen aufzubauen.',
                teacher: 'Irina',
                tab: ['Nebenf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects4.png`,
              },
              {
                id: 'pilates',
                name: 'Pilates',
                description:
                  'Eine Trainingsmethode mit Schwerpunkt auf Rumpfstabilität und funktioneller Kraft, die der Verletzungsprävention dient und die körperlichen Anforderungen des Tanzes unterstützt.',
                teacher: '',
                tab: ['Nebenf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects5.png`,
              },
              {
                id: 'urban',
                name: 'Urban',
                description:
                  'Ein Sammelbegriff für urbane Tanzstile wie Hip-Hop und House mit Fokus auf Rhythmus, Isolation, sozialer Tanzkultur und individuellem Groove.',
                teacher: '',
                tab: ['Workshops'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects6.png`,
              },
              {
                id: 'horton_technique',
                name: 'Horton-Technik',
                description:
                  'Eine moderne Tanztechnik mit anatomischem Ansatz, die durch seitliche Dehnungen und tiefe Ausfallschritte einen starken, flexiblen und ausdrucksstarken Körper formt.',
                teacher: 'Stacey Denham',
                tab: ['Hauptf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects7.png`,
              },
              {
                id: 'graham_technique',
                name: 'Graham-Technik',
                description:
                  'Die wegweisende moderne Technik, die auf dem Prinzip von „Contraction and Release“ basiert und sich auf die Körpermitte sowie die emotionale Kraft von Becken und Oberkörper konzentriert.',
                teacher: 'Victoria González',
                tab: ['Hauptf\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects1.png`,
              },
              {
                id: 'anatomy',
                name: 'Anatomie',
                description: '',
                teacher: '',
                tab: ['Theorief\u00e4cher'],
                src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Subjects2.png`,
              },
            ],
            program_structure: {
              title: 'Structure & Organization',
              intro:
                'This three-year program is designed for applicants with solid prior knowledge of contemporary dance and ballet. Admission is via audition.',
              details:
                'Credits from other degree programs may be transferable. Lorem Ipsum ... translate study to ECTS.',
            },
            ausbildung_years: [
              {
                year: 1,
                headline: 'Erstes Jahr',
                level: 'Grundlagen',
                description:
                  'Im ersten Ausbildungsjahr liegt der Schwerpunkt auf der Erarbeitung der tanztechnischen Basis in verschiedenen Modern-Techniken, zeitgen\u00f6ssischem Tanz und im klassischen Ballett.',
              },
              {
                year: 2,
                headline: 'Zweites Jahr',
                level: 'Intensivierung und k\u00fcnstlerische Entwicklung',
                description:
                  'Im zweiten Jahr werden die Basistechniken vertieft und entwickelt. Das Fach Improvisation, sowie die Entwicklung und Pr\u00e4sentation eines eigenen St\u00fccks im Rahmen unseres Soloprojekts tragen dazu bei, eine eigene k\u00fcnstlerische Sprache zu finden und eigene kreative Impulse auf der Basis der erlernten technischen Grundlagen individuell umsetzen zu k\u00f6nnen.',
              },
              {
                year: 3,
                headline: 'Drittes Jahr',
                level: 'Spezialisierung, eigenst\u00e4ndige k\u00fcnstlerische Arbeit und Companyprojekt',
                description:
                  'Im dritten Jahr arbeitest du kreativ mit deiner Klasse. Regelm\u00e4\u00dfige Showings bereiten auf das Company-Projekt im letzten Semester vor, in dem du unter realistischen Tanzcompany Bedingungen wertvolle Einblicke ins Berufsleben professioneller T\u00e4nzer*innen erh\u00e4ltst.',
              },
            ],
            costs: {
              headline: 'Kosten',
              text: 'Die Schulgeb\u00fchr betr\u00e4gt f\u00fcr ein Schuljahr EUR 6.360,00 \u20ac und kann in 12 Raten zu monatlich EUR 530,00 \u20ac bezahlt werden. Au\u00dferdem besteht eine Kostenbeteiligungspflicht in H\u00f6he von 60,00 \u20ac f\u00fcr die Work in Progress Vorstellungen in allen drei Ausbildungsjahren, 120,00 \u20ac f\u00fcr das Abschlussprojekt im 1. und 2. Ausbildungsjahr und 240,00 \u20ac f\u00fcr das Abschlussprojekt am Ende des 3. Jahres, sowie 160,00 \u20ac f\u00fcr das Soloprojekt im 2. Ausbildungsjahr. Die CDSH ist BAf\u00f6G-anerkannt \u2013 wir helfen dir gern bei der Vermittlung eines g\u00fcnstigen Bildungskredites, dessen Beantragung ab dem zweiten Ausbildungsjahr m\u00f6glich ist.',
            },
            fortbildung: {
              headline: 'Fortbildung',
              overview:
                'Fortbildung in Residence (**FIR**) ist das exklusive Weiterbildungsprogramm der Contemporary Dance School Hamburg \u2013 f\u00fcr ausgebildete B\u00fchnent\u00e4nzer*innen ohne aktuelles Engagement, die im Training bleiben oder sich weiterentwickeln m\u00f6chten.',
              schedule:
                'Zur Auswahl stehen zwei sechmonatige Bl\u00f6cke: **1. Januar \u2013 1. Juli** oder **1. September \u2013 1. M\u00e4rz**. Bis zu 12 Einheiten pro Woche k\u00f6nnen individuell aus dem Lehrplan gew\u00e4hlt werden. Zudem stehen die Studios f\u00fcr eigene Projekte zur Verf\u00fcgung, die bei \u00bbWork in Progress\u00ab oder dem Abschlussprojekt \u00f6ffentlich gezeigt werden k\u00f6nnen. Optional: bis zu 6 Mentoring-Sessions sowie Mitwirkung an bis zu zwei Kreationen der Hauschoreograf*innen.',
              requirement:
                'Voraussetzung: abgeschlossene Tanzausbildung oder gleichwertige Erfahrung. Die Aufnahme erfolgt \u00fcber Audition (*live, per Video oder w\u00e4hrend des Programms*). Kosten: **300\u202f\u20ac/Monat**',
              image: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-07-03 um 13.50.30 1.png`,
            },
            aktuelles: {
              headline: 'Aktuelles',
              items: [
                {
                  title: 'What dies Looking Taste like',
                  description: 'Short description solo project "What does Looking Taste like"',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
                  projectId: 'solo_project_2024',
                },
                {
                  title: 'Meeting point',
                  description: 'Meeting point short description',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/meeting_point.png`,
                  projectId: 'meeting_point',
                },
                {
                  title: 'Under Utopia',
                  description: 'Under Utopia short description',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/under_utopia.png`,
                  projectId: 'under_utopia',
                },
                {
                  title: 'APERCEPTION',
                  description: 'APERCEPTION short description',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/aperception.png`,
                  projectId: 'aperception',
                },
                {
                  title: 'RESET',
                  description: 'RESET short description',
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/reset.png`,
                  projectId: 'reset',
                },
              ],
            },
            footerCta: {
              show: true,
              title: 'Du m\u00f6chtest uns kennenlernen?',
              text: 'Wir dich ebenfalls. Neben den regul\u00e4ren Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder telefonisch f\u00fcr dich da.',
            },
          };
          dispatch(setAusbuildungData({ userLanguage, data: mockData }));
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
  console.log('ausbuildungData:', ausbuildungData);

  if (loading) return <LoadingPage />;
  if (error || !ausbuildungData) return <ErrorPage />;

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: { sx: '100%', md: `100vh` }, flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Box
          className="flex-1 h-full flex-col justify-center items-start"
          sx={{
            zIndex: '2',
            display: { xs: 'none', md: 'flex' },
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
          }}
        >
          <Typography
            sx={{
              fontSize: '80px',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            {ausbuildungData.header.headline}
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={ausbuildungData.header.image}
            className="flex-1 w-full"
            sx={{ objectFit: 'cover', height: { xs: '390px', md: '100%' } }}
          ></Box>
          <Typography
            className="mix-blend-exclusion"
            sx={{
              position: 'absolute',
              left: '24px',
              bottom: '12px',
              display: { xs: 'block', md: 'none' },
              fontSize: '50px',
              lineHeight: '55px',
              fontWeight: '400',
              color: 'white',
            }}
          >
            {ausbuildungData.header.text}
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[48px] flex justify-center items-start"
        sx={{
          background: theme.palette.secondary.main,
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '24px', md: '48px' },
          py: { xs: '55px', md: '110px' },
        }}
      >
        <div className="flex-1">
          <ReactMarkdown components={renderers} children={ausbuildungData.intro.text_left} />
        </div>
        <div className="flex-1">
          <ReactMarkdown components={renderers} children={ausbuildungData.intro.text_right} />
        </div>
      </Box>

      <Box
        component="section"
        className="flex justify-start items-center w-full overflow-hidden border-y border-black"
        sx={{
          background: theme.palette.primary.main,
          my: { xs: '55px', md: '110px' },
          height: { xs: '80px', md: '127px' },
        }}
      >
        <LoopBanner stoppable>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              color: '#000000',
              fontSize: { xs: '28px', md: '80px' },
              fontWeight: '400',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: { xs: '16px', md: '45px' },
            }}
          >
            {ausbuildungData.audition_banner.text}
            <BigLink
              extraSx={{
                display: 'flex',
                height: 'min-content',
                marginLeft: { xs: '12px', md: '24px' },
                color: 'white',
                fontSize: { xs: '28px', md: '80px' },
                fontWeight: '400',
                whiteSpace: 'nowrap',
              }}
              fontSize="inherit"
              lineHeight={{ xs: '1px', md: '5px' }}
              color="#000000"
            >
              {ausbuildungData.audition_banner.link_text}
              <ArrowForward fontSize="inherit" />
            </BigLink>
          </Typography>
        </LoopBanner>
      </Box>

      {/* <InteractiveSubjects subjects_balls={ausbuildungData.subjects_balls} /> */}

      <SubjectSelector subjects={ausbuildungData.subjects} categories={ausbuildungData.filterCategories} />

      <Box
        component="section"
        className="px-[45px] flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '60px', md: '120px' }, gap: { xs: '16px', md: '32px' } }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '30px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: '32px',
          }}
        >
          {ausbuildungData.program_structure.title}
        </Typography>
        <div className="max-w-[740px] min-w-[50%] text-center">
          <ReactMarkdown components={renderers} children={ausbuildungData.program_structure.intro} />
        </div>
        <div className="max-w-[740px] min-w-[50%] text-center">
          <ReactMarkdown components={renderers} children={ausbuildungData.program_structure.details} />
        </div>
      </Box>

      <Box component="section" className="px-[45px] flex flex-col justify-center items-start">
        <Box className="w-full flex justify-center">
          <Box
            className="max-w-[1250px] border-y border-black flex"
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box
              className="w-full md:w-1/2 py-[32px] flex flex-col justify-between items-start"
              sx={{
                background: theme.palette.primary.main,
                gap: { xs: '16px', md: '0' },
                px: { xs: '16px', md: '32px' },
              }}
            >
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                {ausbuildungData.ausbildung_years[0].headline}
              </Typography>
              <Typography
                sx={{
                  color: '#000000 ',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                {ausbuildungData.ausbildung_years[0].level}
              </Typography>
            </Box>
            <Box
              className="w-full md:w-1/2 md:h-[460px] py-[32px]"
              sx={{ pr: { xs: '26px', md: '0' }, pl: { xs: '26px', md: '32px' } }}
            >
              <Typography
                sx={{
                  color: '#000000 ',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                {ausbuildungData.ausbildung_years[0].description}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] flex" sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
            <Box
              className="w-full md:w-1/2 md:h-[460px] py-[32px]"
              sx={{ pr: { xs: '26px', md: '48px' }, pl: { xs: '26px', md: '0' } }}
            >
              <Typography
                sx={{
                  color: '#000000 ',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                {ausbuildungData.ausbildung_years[1].description}
              </Typography>
            </Box>
            <Box
              className="w-full md:w-1/2 py-[32px] flex flex-col justify-between items-start"
              sx={{
                background: theme.palette.primary.main,
                gap: { xs: '16px', md: '0' },
                px: { xs: '32px', md: '32px' },
              }}
            >
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                {ausbuildungData.ausbildung_years[1].headline}
              </Typography>
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                {ausbuildungData.ausbildung_years[1].level}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box
            className="max-w-[1250px] border-y border-black flex"
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box
              className="w-full md:w-1/2 py-[32px] flex flex-col justify-between items-start"
              sx={{
                background: theme.palette.primary.main,
                gap: { xs: '16px', md: '0' },
                px: { xs: '32px', md: '32px' },
              }}
            >
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                {ausbuildungData.ausbildung_years[2].headline}
              </Typography>
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                {ausbuildungData.ausbildung_years[2].level}
              </Typography>
            </Box>
            <Box
              className="w-full md:w-1/2 md:h-[460px] py-[32px]"
              sx={{ pr: { xs: '26px', md: '0' }, pl: { xs: '26px', md: '32px' } }}
            >
              <Typography
                sx={{
                  color: '#000000 ',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                {ausbuildungData.ausbildung_years[2].description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[45px] flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '60px', md: '120px' }, gap: { xs: '32px', md: '32px' } }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '30px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: { xs: '16px', md: '32px' },
          }}
        >
          {ausbuildungData.costs.headline}
        </Typography>

        <div className="max-w-[740px] min-w-[50%] text-center">
          <ReactMarkdown components={renderers} children={ausbuildungData.costs.text} />
        </div>
      </Box>

      <Box
        component="section"
        className="flex flex-col justify-center items-center"
        sx={{ pt: { xs: '55px', md: '110px' }, pb: { xs: '55px', md: '160px' } }}
      >
        <Box component="section" className="w-full px-[75px]">
          <Typography
            className=""
            sx={{
              color: '#000000',
              fontSize: { xs: '35px', md: '80px' },
              fontWeight: '400',
              mb: { xs: '25px', md: '55px' },
            }}
          >
            {ausbuildungData.fortbildung.headline}
          </Typography>
        </Box>

        <Box
          component="section"
          className="w-full px-[75px] flex flex-col justify-center items-center"
          sx={{ background: theme.palette.primary.main, py: { xs: '55px', md: '110px' } }}
        >
          <Box
            className="max-w-[1250px] flex justify-center"
            sx={{
              flexDirection: { xs: 'column-reverse', md: 'row' },
              alignItems: { xs: 'center', md: 'start' },
              gap: { xs: '55px', md: '110px' },
            }}
          >
            <Box className="flex flex-col justify-start items-start" sx={{ width: { xs: '100%', md: '50%' } }}>
              <ReactMarkdown components={renderers} children={ausbuildungData.fortbildung.overview} /> <br></br>
              <ReactMarkdown components={renderers} children={ausbuildungData.fortbildung.schedule} />
              <br></br>
              <ReactMarkdown components={renderers} children={ausbuildungData.fortbildung.requirement} />
            </Box>
            <Box className="flex flex-col justify-start items-start sticky" sx={{ width: { xs: '100%', md: '50%' } }}>
              <Box
                component="img"
                src={ausbuildungData.fortbildung.image}
                className="flex-1 w-[500px]"
                sx={{ objectFit: 'cover', aspectRatio: 0.75, mb: { xs: '12px', md: '24px' } }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <AktuellesSection items={ausbuildungData.aktuelles.items} title={ausbuildungData.aktuelles.headline} />

      <Box
        component="section"
        className="px-[45px] flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '60px', md: '120px' } }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '35px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: '32px',
          }}
        >
          {ausbuildungData.footerCta.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {ausbuildungData.footerCta.text}
        </Typography>
      </Box>
    </>
  );
}

export default Ausbildung;
