import { Box, Typography } from '@mui/material';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Question(props) {
  const { question, answer } = props;

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
              {answer}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const userLanguage = useSelector(selectUserLanguage);
  const [faqData, setFaqData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost/plainkit-main/api/faq?lang=${userLanguage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFaqData(data);
      })
      .catch((error) => {
        console.error('Fetching error:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userLanguage]);

  console.log('faqData', faqData);
  if (loading) return <Box sx={{ p: 10, textAlign: 'center' }}>Loading content...</Box>;
  if (!faqData) return <Box sx={{ p: 10, textAlign: 'center' }}>Error loading data.</Box>;

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
