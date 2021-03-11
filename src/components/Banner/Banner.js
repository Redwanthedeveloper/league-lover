import React from 'react';
import { Image } from 'react-bootstrap';
import './Banner.css';
const Banner = ({ leagueDetails }) => {
  const banner = leagueDetails.strBanner;
  return (
    <>
      <div
        className='banner mb-5'
        style={{
          backgroundImage: `url('${banner ? banner : '/images/banner.png'}')`,
        }}
        fluid
      ></div>
    </>
  );
};

export default Banner;
