import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/FeaturedContainer.scss';
import PropertyPreview from './PropertyPreview'
import leftArrowIcon from '../assets/static/icons/left-arrow-icon.svg';
import rightArrowIcon from '../assets/static/icons/right-arrow-icon.svg';

const FeaturedContainer = () => {
    const featuredProperties = useSelector(state => state.properties.filter(property => property.featured_property))
    console.log(featuredProperties)
    const refScroll = useRef();
    
    const scroll = (scrollOffset) => {
        refScroll.current.scrollLeft += scrollOffset;
    }

    return (
        <section className="main-featured-container">
            <h2 className="main-featured__title">
                Inmuebles Destacados
            </h2>
            <section className="featured-cards-container">
                
                
                <div className="featured-cards-inner-container" ref={refScroll}>
                    <div className="left-scroll" onClick={() => scroll(-300)}>
                        <span style={{backgroundImage: `url(${leftArrowIcon})`}}></span>
                    </div>
                    <div className="fake-card" ></div>
                    {featuredProperties.map((item,index) =>
                        <Link key={index} to={`/property/${item.code}`} style={{ textDecoration: 'none' }}>
                            <PropertyPreview  {...item}/>
                        </Link>
                    )}
                    <div className="fake-card" ></div>
                    <div className="right-scroll" onClick={() => scroll(300)}>
                        <span style={{ backgroundImage: `url(${rightArrowIcon})` }}></span>
                    </div>
                </div>
                
            </section>
        </section>
    );
};

export default FeaturedContainer;