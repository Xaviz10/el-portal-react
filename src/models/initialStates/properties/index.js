const usePropertiesInitialStates = () => {
    const newPropertyInitialState = {
        "featured_property": false,
        "title": "",
        "price": 0,
        "code": "",
        "type": "",
        "details": {
            "area": 0,
            "rooms": 0,
            "bathrooms": 0,
            "parking": 0,
            "adminValue": 0,
            "year": 2021,
            "statusLevel": 3,
            "flat": 0,
            "subsidy": false
        },
        "complements": {
            "privateTerrace": false,
            "livingRoomTv": false,
            "study": false,
            "greenAreas": false,
            "gym": false,
            "jacuzzi": false,
            "childishArea": false,
            "clothesZone": false,
            "elevator": false,
            "serviceRoom": false,
            "integralKitchen": false,
            "deposit": false,
            "communalLiving": false,
            "privateSecurity": false
        },
        "description": {
            "titleDescription": "",
            "detailedDescription": ""
        },
        "location": "",
        "images": [],
    };

    const searchPropertiesInitialState = [];
    const featuredPropertiesInitialState = [];

    const propertyToShowInitialState = {
        "featured_property": false,
        "title": "",
        "price": 0,
        "code": "",
        "type": "",
        "details": {
            "area": 0,
            "rooms": 0,
            "bathrooms": 0,
            "parking": 0,
            "adminValue": 0,
            "year": 2021,
            "statusLevel": 3,
            "flat": 0,
            "subsidy": false
        },
        "complements": {
            "privateTerrace": false,
            "livingRoomTv": false,
            "study": false,
            "greenAreas": false,
            "gym": false,
            "jacuzzi": false,
            "childishArea": false,
            "clothesZone": false,
            "elevator": false,
            "serviceRoom": false,
            "integralKitchen": false,
            "deposit": false,
            "communalLiving": false,
            "privateSecurity": false
        },
        "description": {
            "titleDescription": "",
            "detailedDescription": ""
        },
        "location": "",
        "images": [],
    };

    return {
        newPropertyInitialState,
        searchPropertiesInitialState,
        featuredPropertiesInitialState,
        propertyToShowInitialState,
    }

};

export default usePropertiesInitialStates;