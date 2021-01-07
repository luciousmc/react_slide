import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

const SlideContainer = styled.div`
  position: relative;
  margin: auto;
  width: 600px;
  border: 5px solid black;
  overflow-x: hidden;
`;

const Reel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transform: translateX(-600px);
`;

const Slide = styled.div`
  width: 600px;
`;

const Arrow = styled.div`
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  position: absolute;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 1;
`;

const LeftArrow = styled(Arrow)`
  border-right: 30px solid white;
  left: 5%;
`;

const RightArrow = styled(Arrow)`
  border-left: 30px solid white;
  right: 5%;
`;

/**
 * Slider Component 
 */
function Slider({ children, width }) {
  const first = children[0];
  const last = children[children.length - 1];
  const imgArr = [last, ...children, first];

  const reelRef = useRef(null);
  let slideCount = 1;

  useEffect(() => {
    reelRef.current.addEventListener('transitionend', () => {
      if (slideCount === 0) {
        reelRef.current.style.transition = 'none';
        slideCount = imgArr.length - 2;
        reelRef.current.style.transform = `translateX(${-width * slideCount}px)`;
      }

      if (slideCount === imgArr.length - 1) {
        reelRef.current.style.transition = 'none';
        slideCount = 1;
        reelRef.current.style.transform = `translateX(${-width * slideCount}px)`;
      }
    })
  }, []);

  const nextSlide = () => {
    if (slideCount >= imgArr.length - 1) return;

    reelRef.current.style.transition = 'transform .4s ease-in-out';
    slideCount++;
    reelRef.current.style.transform = `translateX(${-width * slideCount}px)`;
    console.table({slideCount})
  };

  const prevSlide = () => {
    if (slideCount <= 0) return;

    reelRef.current.style.transition = 'transform .4s ease-in-out';
    slideCount--;
    reelRef.current.style.transform = `translateX(${-width * slideCount}px)`;
    console.table({slideCount});
  };

  return (
    <SlideContainer>
      <LeftArrow onClick={prevSlide} />
      <Reel ref={reelRef}>
        {
          imgArr.map((img,i) => {
            return (
              <Slide key={i} id={`slide-${i + 1}`}>{img}</Slide>
            );
          })
        }
      </Reel>
      <RightArrow onClick={nextSlide} />
    </SlideContainer>
  )
};

Slider.defaultProps = {
  children: [],
  width: 600
}

export default Slider;