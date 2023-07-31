import React from 'react';
import WelcomeImg from '../IconsAndImages/Frame 1.png';
const Welcome = () => {
  return (
    <div>
      <img
        src={WelcomeImg}
        alt='MagsWayImage'
        className='w-[522px]  h-[700px]'
      />
    </div>
  );
};

export default Welcome;
