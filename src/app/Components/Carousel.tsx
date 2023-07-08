import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
  img: string[];
  page: string;
}

const Carousel: React.FC<Props> = ({ img, page }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = img[currentIndex];

  const goToPrevious = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = (): void => {
    if (currentIndex < img.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Flex alignItems="center" w={"530px"} h={"300px"}>
      <Button m={"20px"} p={"12px"} className='bg-teal-950 hover:bg-slate-600' color={"blackAlpha.900"} onClick={goToPrevious} disabled={currentIndex === 0}>
        <ChevronLeftIcon   />
      </Button>

      {currentImage ? (
        <Image src={currentImage} alt={page} />
      ) : (
        <span>No image available</span>
      )}

      <Button m={"20px"} p={"12px"} className='bg-teal-950 hover:bg-slate-600' color={"blackAlpha.900"} onClick={goToNext} disabled={currentIndex === img.length - 1}>
        <ChevronRightIcon />
      </Button>
    </Flex>
  );
};

export default Carousel;
