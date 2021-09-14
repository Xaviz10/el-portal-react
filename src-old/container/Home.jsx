import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/App.scss';
import { setHeaderHome } from '../actions';

import Header from '../components/Header';
import SearchContainer from '../components/SearchContainer';
import FeaturedContainer from '../components/FeaturedContainer';
import CallToActionContainer from '../components/CallToActionContainer';
import FindOutContainer from '../components/FindOutContainer';

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setHeaderHome(true));
    }, [])
    return(
        <>
            <SearchContainer />
            <FeaturedContainer/>
            <CallToActionContainer />
            <FindOutContainer />
        </>
        
            // {/* results page */}
            // {/* <HeaderSearchBar />
            // <div>
            //     <PropertyResultsContainer dataProperties={current.properties}/>
            // </div>
            // <Footer /> */}

            // {/* <Header />
            // <div>
            //     <NewPropertyContainer />
            // </div>
            // <Footer /> */}

            // {/* <Header />
            // <div>
            //     <PropertyDescriptionContainer propertyData={current.properties[0]}/>
            // </div>
            // <Footer /> */}
    );
};


// export default connect(props, actions)(Home)
export default Home