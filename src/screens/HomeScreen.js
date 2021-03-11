import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import League from '../components/League/League';

const HomeScreen = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagues(data.leagues.slice(0, 80)));
  });

  return (
    <>
      <div
        className='home__banner'
        style={{ backgroundImage: `url('/images/banner.png')` }}
      >
        <div className='banner__text'>
          <h1 className='text center'>League Lover</h1>
        </div>
      </div>
      <Container>
        <Row>
          {leagues.map((league) => {
            return (
              <Col key={league.idLeague} md={4} sm={12}>
                <League league={league} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
