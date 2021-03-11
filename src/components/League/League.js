import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './League.css';

const League = ({ league }) => {
  return (
    <>
      <Link className='btn__link' to={`/league/${league.idLeague}`}>
        {/* <Card.Img variant='top' src={`${league.strBadge}`} /> */}
        <Card className='my-3 text-center league__card'>
          <Card.Body>
            <Card.Title className='text-center '>
              <h3 className='card__title'> {league.strLeague}</h3>
            </Card.Title>
            <Card.Text className='text-center'>
              <h6 className='card__body'>Sports type: {league.strSport}</h6>
            </Card.Text>
            <Button variant='primary' className='text-center card__btn'>
              <Link className='btn__link' to={`/league/${league.idLeague}`}>
                Explore <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default League;
