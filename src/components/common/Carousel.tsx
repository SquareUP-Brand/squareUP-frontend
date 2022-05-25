import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CarouselSliderImage = styled.img`
  display: ${props => (props.index === props.currentIndex ? 'initial' : 'none')};
  max-width: 100%;
  max-height: 40em;
`;

const PreviewImages = styled.div`
  margin-block-start: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    height: 5rem;
    margin: 0 1em;
    :hover  {
      cursor: pointer;
    }
  }
`;

const PreviewImage = styled.img`
  border: ${props => (props.index === props.currentIndex ? '.5em solid #555' : '')};
`;

const Right = styled(FaChevronRight)``;

const Left = styled(FaChevronLeft)``;

const Carousel = ({ imageArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () =>
    setCurrentIndex(Math.min(imageArray.length - 1, currentIndex + 1));
  const previousImage = () =>
    setCurrentIndex(Math.max(0, currentIndex - 1));

  return (
    <CarouselContainer>
      {imageArray.map((image, index) => (
        <CarouselSliderImage
          index={index}
          currentIndex={currentIndex}
          src={image}
          key={image}
          alt={`Product Image ${index + 1}`}
        />
      ))}
      <PreviewImages>
        <Left onClick={previousImage} />
        {imageArray.map((image, index) => (
          <PreviewImage
            onClick={() => setCurrentIndex(index)}
            index={index}
            currentIndex={currentIndex}
            src={image}
            key={image}
          />
        ))}
        <Right onClick={nextImage} />
      </PreviewImages>
    </CarouselContainer>
  );
};

export default Carousel;


/*
  const nextImage = () =>
    setCurrentIndex(currentIndex === imageArray.length - 1 ? 0 : currentIndex + 1);
  const previousImage = () =>
    setCurrentIndex(currentIndex === 0 ? imageArray.length - 1 : currentIndex - 1);

*/