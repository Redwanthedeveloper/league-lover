import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Details from '../components/Details/Details';
import DetailsImage from '../components/DetailsImage/DetailsImage';
import DetailsText from '../components/DetailsText/DetailsText';

const LeagueDetails = ({ match }) => {
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
      <Container>
        <Row
          style={{
            backgroundColor: 'rgb(220 78 78)',
            padding: '40px 20px',
            borderRadius: '15px',
            marginBottom: '20px',
          }}
        >
          <Col md={6}>
            <Details leagueDetails={leagueDetails} />
          </Col>
          <Col md={6}>
            <DetailsImage leagueDetails={leagueDetails} />
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ padding: '0px !important' }}>
            <DetailsText />
          </Col>
        </Row>
        <Row>
          <Col md={12} className='text-center '>
            {' '}
            <Image src='/icons/twitter.png' fluid className='icons' />
            <Image src='/icons/facebook.png' fluid className='icons' />
            <Image src='/icons/youtube.png' fluid className='icons' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LeagueDetails;
