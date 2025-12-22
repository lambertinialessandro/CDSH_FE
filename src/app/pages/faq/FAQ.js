import { Box, Typography } from '@mui/material';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectFaqData, setFaqData } from 'app/store/app/pageSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';

function Question(props) {
  const { question, answer } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <Box
        className="group w-full border-b border-black pb-4 flex gap-4 justify-start items-start cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className={`mt-[3px] min-w-4 size-4 ${isOpen ? 'bg-[#C8FF75]' : 'bg-black'} rounded-full group-hover:bg-[#C8FF75]`}></div>
        <Typography
          className="text-left"
          sx={{
            color: '#000000 ',
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
            lineHeight: '22px',
          }}
        >
          {question}
        </Typography>
      </Box>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="label"
            className="w-full h-full overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Typography
              className="w-full text-left border-b border-black pb-4 pt-4"
              sx={{
                color: '#000000 ',
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              {answer}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const dispatch = useDispatch();
  const userLanguage = useSelector(selectUserLanguage);

  const faqData = useSelector((state) => selectFaqData(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (faqData) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/faq?lang=${userLanguage}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setFaqData({ userLanguage, data: data }));
      })
      .catch((error) => {
        if (userLanguage === 'en') {
          const mockData = {
            title: 'faq',
            header: {
              headline: 'FAQ',
              text: 'Do you have a question? Perhaps someone else has already asked it. Why not take a look?',
            },
            questions: [
              {
                question: 'Do I have to be of legal age to start the training?',
                answer:
                  'The lessons are mainly conducted in English to make it easier for international students to get started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Present tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'How long does the training last and how is it structured?',
                answer:
                  'The lessons are mainly conducted in English to make it easier for international students to get started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Present tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'How does the application process work?',
                answer:
                  'The lessons are mainly conducted in English to make it easier for international students to get started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Present tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'Is there an open day?',
                answer:
                  'The lessons are mainly conducted in English to make it easier for international students to get started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Present tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'In which language is the instruction given?',
                answer:
                  'The lessons are mainly conducted in English to make it easier for international students to get started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Present tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'Are there any funding opportunities or scholarships available?',
                answer:
                  'The lessons are mainly conducted in English to make it easier for international students to get started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Present tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
            ],
            footerCta: {
              show: true,
              title: 'Want to get to know us?',
              text: "We'd like to get to know you too. Besides the regular auditions, we're available by email or phone to answer any questions you may have about the training program.",
            },
          };
          dispatch(setFaqData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            title: 'faq',
            header: {
              headline: 'FAQ',
              text: "Du hast eine Frage? Vielleicht hat jemand anderes sie bereits gestellt. Schau'doch mal nach!",
            },
            questions: [
              {
                question: 'Muss ich vollj\u00e4hrig sein, um die Ausbildung zu beginnen?',
                answer:
                  'Der Unterricht wird \u00fcberwiegend auf Englisch durchgef\u00fchrt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'Wie lange dauert die Ausbildung und wie st sie aufgebaut?',
                answer:
                  'Der Unterricht wird \u00fcberwiegend auf Englisch durchgef\u00fchrt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'Wie l\u00e4uft das Aufnahmeverfahren ab?',
                answer:
                  'Der Unterricht wird \u00fcberwiegend auf Englisch durchgef\u00fchrt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'Gibt es einen Tag der offenen T\u00fcr?',
                answer:
                  'Der Unterricht wird \u00fcberwiegend auf Englisch durchgef\u00fchrt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'In welcher Sprache findet der Unterricht statt?',
                answer:
                  'Der Unterricht wird \u00fcberwiegend auf Englisch durchgef\u00fchrt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
              {
                question: 'Gibt es Finanzierungsm\u00f6glichkeiten oder Stipendien?',
                answer:
                  'Der Unterricht wird \u00fcberwiegend auf Englisch durchgef\u00fchrt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
              },
            ],
            footerCta: {
              show: true,
              title: 'Du m\u00f6chtest uns kennenlernen?',
              text: 'Wir dich ebenfalls. Neben den regul\u00e4ren Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder telefonisch f\u00fcr dich da.',
            },
          };
          dispatch(setFaqData({ userLanguage, data: mockData }));
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

  console.log('faqData', faqData);
  if (loading) return <LoadingPage />;
  if (error || !faqData) return <ErrorPage />;

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ py: { xs: '110px', md: '220px' } }}
      >
        <Box
          className="w-full h-full flex flex-col justify-center items-start"
          sx={{
            zIndex: '2',
            padding: { xs: '46px 56px 46px 56px', md: '46px 56px 46px 56px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '50px', md: '80px' },
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            {faqData.header.headline}
          </Typography>
          <Typography
            className="rounded-full"
            sx={{
              color: '#000000',
              fontSize: { xs: '15px', md: '30px' },
              fontWeight: '400',
              lineHeight: 'normal',
              mt: { xs: '44px', md: '78px' },
              maxWidth: { xs: '250px', md: '500px' },
            }}
          >
            {faqData.header.text}
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[48px]"
        sx={{
          gap: { xs: '24px', md: '48px' },
          py: { xs: '55px', md: '110px' },
        }}
      >
        <Box className="max-w-[1280px] flex flex-col justify-start items-start gap-8">
          {faqData.questions.map(({ question, answer }, idx) => {
            return <Question key={idx} question={question} answer={answer} />;
          })}
        </Box>
      </Box>

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
          {faqData.footerCta.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {faqData.footerCta.text}
        </Typography>
      </Box>
    </>
  );
}

export default FAQ;
