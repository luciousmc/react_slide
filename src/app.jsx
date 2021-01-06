import React from 'react';
import Slider from './slider';

import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  text-shadow: 1px 1px 5px green;
  margin: 1.5rem auto;
`;

const Img = styled.img`
  width: 600px;
`;

const App = () => {
  return(
    <>
      <Title>React slide</Title>
      <Slider>
        <Img src="../images/image1.jpg" alt="Test Pictures"/>
        <Img src="../images/image2.jpg" alt="Test Pictures"/>
        <Img src="../images/image3.jpg" alt="Test Pictures"/>
        <Img src="../images/image4.jpg" alt="Test Pictures"/>
        <Img src="../images/image5.jpg" alt="Test Pictures"/>
      </Slider>
    </>
  );
}

export default App;