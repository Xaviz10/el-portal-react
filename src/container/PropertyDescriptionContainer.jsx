import React, { useEffect, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderHome } from '../actions'
import { redirect } from 'react-router-dom';

import NotFound from '../container/NotFound';
import Header from '../components/Header';
// import '../assets/styles/components/PropertyDescriptionContainer.scss';

import PropertyDescription from '../components/PropertyDescription';
import { Redirect } from 'react-router-dom';

const PropertyDescriptionContainer = (props) => {

    const { code } = props.match.params //get the params of the link
    
    const dataProperties = useSelector(state => state.properties)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setHeaderHome(false));
    }, [])

    const memoDataProperty = useMemo(() =>{
        return (
            dataProperties.find(property => property.code === code)
        );
    }, [code]);

    return memoDataProperty ? (
        <>
            <PropertyDescription {...memoDataProperty} />
        </>
    ) : <NotFound/>;
};


export default PropertyDescriptionContainer;