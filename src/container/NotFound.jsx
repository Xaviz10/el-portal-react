import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../assets/styles/components/NotFound.scss';

import { setHeaderHome } from '../actions';

import elPortalLogoCentral from '../assets/static/icons/el-portal-logo-central--white.svg';




const NotFound = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaderHome(true));
    }, []);
    return (
        <>
            <div className="not-found-container">
                <img src={elPortalLogoCentral} alt="El Portal Agencia Inmobiliaria, logo" />
                <h1> Opps! No encontrado </h1>  
            </div>
        </>
    );
}

export default NotFound;