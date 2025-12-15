import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const questions = [
  {
    question: 'Muss ich volljährig sein, um die Ausbildung zu beginnen?',
    answare:
      'Der Unterricht wird überwiegend auf Englisch durchgeführt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
  },
  {
    question: 'Wie lange dauert die Ausbildung und wie ist sie aufgebaut?',
    answare:
      'Der Unterricht wird überwiegend auf Englisch durchgeführt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
  },
  {
    question: 'Wie läuft das Aufnahmeverfahren ab?',
    answare:
      'Der Unterricht wird überwiegend auf Englisch durchgeführt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
  },
  {
    question: 'Gibt es einen Tag der offenen Tür?',
    answare:
      'Der Unterricht wird überwiegend auf Englisch durchgeführt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
  },
  {
    question: 'In welcher Sprache findet der Unterricht statt?',
    answare:
      'Der Unterricht wird überwiegend auf Englisch durchgeführt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
  },
  {
    question: 'Gibt es Finanzierungsmöglichkeiten oder Stipendien?',
    answare:
      'Der Unterricht wird überwiegend auf Englisch durchgeführt, um internationalen Studierenden den Einstieg zu erleichtern. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus lorem et sapien tincidunt, vitae porttitor magna hendrerit.',
  },
];

function Question(props) {
  const { question, answare } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <Box
        className="group w-full border-b border-black pb-4 flex gap-4 justify-start items-end cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className={`size-4 ${isOpen ? 'bg-[#C8FF75]' : 'bg-black'} rounded-full group-hover:bg-[#C8FF75]`}></div>
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
              {answare}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
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
            FAQ
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
            Du hast eine Frage? Vielleicht hat jemand anderes sie bereits gestellt. Schau'doch mal nach!
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
          {questions.map(({ question, answare }, idx) => {
            return <Question key={idx} question={question} answare={answare} />;
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
          Du möchtest uns kennenlernen?
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder
          telefonisch für dich da.
        </Typography>
      </Box>
    </>
  );
}

export default FAQ;
