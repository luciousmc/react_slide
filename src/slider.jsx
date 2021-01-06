import React from 'react';

import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: auto;
  width: 600px;
  border: 5px solid black;
  // overflow-x: hidden;
`;

const Slide = styled.div`
  width: 600px;
`;

const Slider = ({ children }) => {
  const first = children[0];
  const last = children[children.length - 1];

  return (
    <SlideContainer>
      <Slide>{last}</Slide>
      {
        children.map((child,i) => {
          return (
            <Slide key={i} id={`slide-${i}`}>{child}</Slide>
          );
        })
      }
      <Slide>{first}</Slide>
    </SlideContainer>
  )
}

export default Slider;