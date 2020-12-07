import React from 'react';

const Slider = ({ children }) => {
  return (
    <div className="slide-container">
      {
        children.map((child,i) => {
          return (
            <div key={i} id={`slide-${i}`} className="slide">{child}</div>
          );
        })
      }
    </div>
  )
}

export default Slider;