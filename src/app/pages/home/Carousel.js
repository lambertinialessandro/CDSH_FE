import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import AncorLink from 'app/shared-components/link/AncorLink';
import { useState } from 'react';

function Carousel(props) {
  const {} = props;

  const items = [
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-1-1.jpg`,
      title: 'Work in Progress 2025: meeting point',
      description:
        'Jedes Jahr finden unsere Work in Progress Vorstellungen und unsere Abschlussvorstellungen unter einem anderen Motto statt.',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-2-1.jpg`,
      title: 'Abschlussprojekt 2024: joy',
      description:
        'Jedes Jahr findet ddas Abshlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-3-1.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-4-1.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-5-1.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-6-1.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-7-1.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-8-1.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-9-1.jpg`,
      title: 'Title',
      description: 'Description',
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-1-1.jpg`,
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
              <Box component="img" className="w-full h-[195px]" src={item.img} />
              <Typography className="text-[30px]">{item.title}</Typography>
              <Typography className="text-[15px]">{item.description}</Typography>
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
