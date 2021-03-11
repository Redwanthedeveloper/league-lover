import React from 'react';
import { Image, Row } from 'react-bootstrap';
import './Banner.css';
const Banner = ({ leagueDetails }) => {
  const banner = leagueDetails.strBanner;
  return (
    <>
      {/* <div
        className='banner mb-5'
        style={{
          backgroundImage: `url('${banner ? banner : '/images/banner.png'}')`,
        }}
        fluid
      ></div> */}
      <Row>
        <Image
          src={`${banner ? banner : '/images/banner.png'}`}
          fluid
          className='banner mb-3'
        />
      </Row>
    </>
  );
};

export default Banner;
