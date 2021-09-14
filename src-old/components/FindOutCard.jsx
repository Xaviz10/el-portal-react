import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/FindOutCard.scss';
import cardImg from '../assets/static/img/recommendation-houses-img.jpg';

const FindOutCard = () => {
    return (
        <article className="find-out-cards__recommendation" style={{ backgroundImage: `url(${cardImg})`}}>
            <h3 className="recommendation__description">
                Encuentra la casa de tus sueños
            </h3>
            <Link to='/search/Venta/' className="recommendation__call-to-action">
                Descúbrela
            </Link>
        </article>      
    );
};


export default FindOutCard;