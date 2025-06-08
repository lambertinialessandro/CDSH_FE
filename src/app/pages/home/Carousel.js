import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import AncorLink from 'app/shared-components/link/AncorLink';
import { useState } from 'react';

function Carousel(props) {
  const {} = props;

  const items = [
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-01.jpg`,
      title: 'Work in Progress 2025: meeting point',
      description:
        'Jedes Jahr finden unsere Work in Progress Vorstellungen und unsere Abschlussvorstellungen unter einem anderen Motto statt.',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-02.jpg`,
      title: 'Abschlussprojekt 2024 : joy',
      description:
        'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-03.jpg`,
      title: 'What does Looking taste like?',
      description: 'Die zentrale Prüfungsleistung im zweiten Ausbildungsjahr der CDSH besteht in der Realisierung einer eigenen Kurzproduktion.',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-04.jpg`,
      title: 'Abschlussprojekt 2023: KONTINUUM',
      description: 'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-05.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-06.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-07.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-08.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-09.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-10.jpg`,
      title: 'Title',
      description: 'Description',
    },
  ];

  const maxItems = items.length;

  const [index, setIndex] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const nextItem = () => {
    const nextIndex = index + 1;

    if (index == 0) {
      setIsLeftDisabled(false);
    }
    if (index == maxItems - 1) {
      setIsRightDisabled(true);
    }

    if (nextIndex < maxItems) {
      setIndex(nextIndex);
    }
  };
  const prevItem = () => {
    const nextIndex = index - 1;

    if (nextIndex == 0) {
      setIsLeftDisabled(true);
    }
    if (index == maxItems - 1) {
      setIsRightDisabled(false);
    }

    if (nextIndex >= 0) {
      setIndex(nextIndex);
    }
  };

  return (
    <Box className="w-full flex flex-col px-[45px]">
      <Box
        className="w-max flex justify-start items-start gap-[32px] mb-[24px]"
        sx={{
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
          transform: `translate(-${(index / maxItems) * 100}%, 0)`,
        }}
      >
        {items.map((item, idx) => {
          return (
            <Box key={idx} className="w-[321px] flex flex-col justify-start items-start">
              <Box component="img" className="w-full h-[195px] object-cover" src={item.img} />
              <Typography className="text-[30px] py-[16px]" sx={{lineHeight: "normal"}}>{item.title}</Typography>
              <Typography className="text-[15px]" sx={{lineHeight: 1.25}}>{item.description}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box className="w-full flex justify-between items-center">
        <IconButton onClick={prevItem} disabled={isLeftDisabled}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={nextItem} disabled={isRightDisabled}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Carousel;
