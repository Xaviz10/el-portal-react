import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setHeaderHome } from '../actions';
import '../assets/styles/components/PropertyResultsContainer.scss';

import PropertyPreview from '../components/PropertyPreview';



const PropertyResultContainer = (props) => {

    const { filter } = props.match.params
    let [keywordSearch, typeSearch, roomsSearch] = filter.split("_");

    const dispatch = useDispatch()

    const dataProperties = useSelector(state => state.properties)
    const [propertiesFiltered, setPropertiesFiltered] = useState([])
    
    useEffect(() => {
        dispatch(setHeaderHome(false));
    }, [])

    console.log(dataProperties)
    useEffect(() => {
        setPropertiesFiltered(dataProperties.filter(property => {
            console.log(property.type)
            return (
                property.type === keywordSearch ||
                property.code === keywordSearch ||
                property.title.toLowerCase().includes(keywordSearch.toLowerCase()) ||
                property.description.titleDescription.toLowerCase().includes(keywordSearch.toLowerCase()) ||
                property.description.detailedDescription.toLowerCase().includes(keywordSearch.toLowerCase()) ||
                property.details.rooms == roomsSearch ||
                property.type == typeSearch

            );
        }))

    }, [filter])

    return (
        <>
            <section className="property-list-container">
                <p className="property-list__comment">
                    <span className="property-list__results-number">{`${propertiesFiltered.length} `}</span>
                    resultados que coinciden con tu busqueda.
                </p>

                <div className="property-list__results">
                    
                    {propertiesFiltered.map(item =>
                        <Link key={item.code} to={`/property/${item.code}`} style={{ textDecoration: 'none' }}>
                            <PropertyPreview  {...item} />
                        </Link>
                    )}
                </div>

            </section>
        </>
            
    );
};


export default PropertyResultContainer;