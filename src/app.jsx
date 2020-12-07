import React from 'react';
import Slider from './slider';


const App = () => {
  return(
    <>
      <h1>React slide</h1>
      <hr/>
      <Slider>
        <img src="../images/image1.jpg" alt=""/>
        <img src="../images/image2.jpg" alt=""/>
        <img src="../images/image3.jpg" alt=""/>
        <img src="../images/image4.jpg" alt=""/>
        <img src="../images/image5.jpg" alt=""/>
      </Slider>
    </>
  );
}

export default App;