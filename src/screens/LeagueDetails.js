import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Banner from '../components/Banner/Banner';
import Details from '../components/Details/Details';
import DetailsImage from '../components/DetailsImage/DetailsImage';
import DetailsText from '../components/DetailsText/DetailsText';

const LeagueDetails = () => {
  const [leagueDetails, setLeagueDetails] = useState([]);
  const { leagueId } = useParams();
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueDetails(data.leagues[0]));
  }, [leagueId]);
  //   const detailsId = leagueDetails.find((x) => x.idLeague === leagueId);

  return (
    <>
      <Banner leagueDetails={leagueDetails} />
      <Container>
        <div
          className='details__wrapper'
          style={{
            backgroundColor: 'rgb(220 78 78)',
            padding: '20px 20px',
            borderRadius: '15px',
            marginBottom: '20px',
          }}
        >
          <Row>
            <Col md={6}>
              <Details leagueDetails={leagueDetails} />
            </Col>
            <Col md={6}>
              <DetailsImage leagueDetails={leagueDetails} />
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={12} style={{ padding: '0px !important' }}>
            <DetailsText />
          </Col>
        </Row>
        <Row>
          <Col md={12} className='text-center '>
            <a
              href={
                leagueDetails.strTwitter
                  ? `http://${leagueDetails.strTwitter}`
                  : '/'
              }
              className='icons'
            >
              <FontAwesomeIcon icon={faTwitterSquare}> </FontAwesomeIcon>
            </a>
            <a
              href={
                leagueDetails.strFacebook
                  ? `http://${leagueDetails.strFacebook}`
                  : '/'
              }
              className='icons'
            >
              <FontAwesomeIcon icon={faFacebookSquare}> </FontAwesomeIcon>
            </a>
            <a
              href={
                leagueDetails.strYoutube
                  ? `http://${leagueDetails.strYoutube} `
                  : '/'
              }
              className='icons'
            >
              <FontAwesomeIcon icon={faYoutubeSquare}> </FontAwesomeIcon>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LeagueDetails;
