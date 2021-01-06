import React from 'react';

import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
`;

const Slider = ({ children }) => {
  return (
    <SlideContainer>
      {
        children.map((child,i) => {
          return (
            <div key={i} id={`slide-${i}`} className="slide">{child}</div>
          );
        })
      }
    </SlideContainer>
  )
}

export default Slider;