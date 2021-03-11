import React from 'react';
import { Image } from 'react-bootstrap';
import './Details.css';
const Details = ({ leagueDetails }) => {
  let foundedDate = new Date(leagueDetails.dateFirstEvent).toLocaleString(
    'default',
    {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }
  );

  return (
    <>
      <h2 className='list__heading mb-2 '>{leagueDetails.strLeague}</h2>
      <li className='list__item'>
        <Image src='/icons/found.png' /> Founded: {foundedDate}
      </li>
      <li className='list__item'>
        <Image src='/icons/flag.png' /> Country: {leagueDetails.strCountry}
      </li>
      <li className='list__item'>
        <Image src='/icons/football.png' /> Sport type: {leagueDetails.strSport}
      </li>
      <li className='list__item'>
        <Image src='/icons/gender.png' /> Gender: {leagueDetails.strGender}
      </li>
    </>
  );
};

export default Details;
