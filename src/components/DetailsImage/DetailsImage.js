import React from 'react';
import { Image } from 'react-bootstrap';
import './DetailsImage.css';
const DetailsImage = ({ leagueDetails }) => {
  return (
    <>
      <Image
        src={
          leagueDetails.strGender === `Male`
            ? `/images/male.png`
            : `/images/female.png`
        }
        className='details__image'
      />
    </>
  );
};

export default DetailsImage;
