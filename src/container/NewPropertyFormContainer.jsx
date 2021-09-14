import React from 'react';
import '../assets/styles/components/NewPropertyFormContainer.scss';

import NewPropertyForm from '../components/NewPropertyForm';

const NewPropertyFormContainer = () => {
    return (
        <div className="new-property-form-container">
            <NewPropertyForm />
        </div>
    );
}

export default NewPropertyFormContainer;