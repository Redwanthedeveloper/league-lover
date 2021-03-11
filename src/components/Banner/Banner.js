import React from 'react';
import './Banner.css';
const Banner = () => {
  return (
    <>
      <div
        className='banner mb-5'
        style={{ backgroundImage: `url('/images/banner.png')` }}
      >
        <div className='banner__text'>
          <h1 className='text-center'>League Lover</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
