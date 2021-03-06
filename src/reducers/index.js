
const initialState = {
    loading: false,
    error: null,
    home: false,
    showing: {},
    preview_images_form : [],
    new_property: {
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
            "images": []
    },
    properties: [
        {
            "featured_property": true,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 280000000,
            "code": "C21001",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 3,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "featured_property": true,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 280000000,
            "code": "C21002",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 3,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "featured_property": true,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 280000000,
            "code": "C21003",
            "type": "Arriendo",
            "details": {
                "area": 120,
                "rooms": 3,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]
        },
        {
            "featured_property": true,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 180000000,
            "code": "C21004",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 1,
                "bathrooms": 1,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "featured_property": true,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 80000000,
            "code": "C21005",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 3,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "featured_property": true,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 280000000,
            "code": "C21006",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 4,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]
        },
        {
            "featured_property": false,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 180000000,
            "code": "C21007",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 1,
                "bathrooms": 1,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "featured_property": false,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 80000000,
            "code": "C21008",
            "type": "Arriendo",
            "details": {
                "area": 120,
                "rooms": 3,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "featured_property": false,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 280000000,
            "code": "C21009",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 4,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]
        },
        {
            "featured_property": false,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 280000000,
            "code": "C21010",
            "type": "Arriendo",
            "details": {
                "area": 120,
                "rooms": 3,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "title": "Casa en El Recreo, Sogamoso",
            "price": 160000000,
            "code": "C21002",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 3,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "featured_property": false,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 280000000,
            "code": "C21011",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 3,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]
        },
        {
            "featured_property": true,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 180000000,
            "code": "C21012",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 1,
                "bathrooms": 1,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "featured_property": false,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 80000000,
            "code": "C21013",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 3,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80"]
        },
        {
            "featured_property": false,
            "title": "Casa en El Recreo, Sogamoso",
            "price": 280000000,
            "code": "C21014",
            "type": "Venta",
            "details": {
                "area": 120,
                "rooms": 4,
                "bathrooms": 2,
                "parking": 1,
                "adminValue": 100000,
                "year": 2011,
                "statusLevel": 3,
                "flat": 0,
                "subsidy": true
            },
            "complements": {
                "privateTerrace": true,
                "livingRoomTv": true,
                "study": true,
                "greenAreas": true,
                "gym": false,
                "jacuzzi": false,
                "childishArea": false,
                "clothesZone": true,
                "elevator": false, 
                "serviceRoom": true,
                "integralKitchen": true,
                "deposit": true,
                "communalLiving": false,
                "privateSecurity": false
            },
            "description": {
                "titleDescription": "Casa de 2 habitaciones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium minima vero porro odio aliquam!",
                "detailedDescription": "La casa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore, explicabo temporibus excepturi provident obcaecati. Optio dignissimos cumque eius minus consequatur velit explicabo nulla voluptates excepturi. Consequatur a earum, cumque error natus non impedit nobis qui dolorum id sapiente laborum est autem odio obcaecati iusto maiores delectus consequuntur corrupti soluta necessitatibus maxime commodi nihil. Dolor, dolorum aut ipsa, praesentium harum vitae quos voluptate sunt blanditiis ab nisi assumenda delectus doloribus ad, fuga sequi! Dolorem quos iusto pariatur ea veritatis. Eligendi corrupti rerum culpa deleniti dolorem eos officiis magnam, optio non!"
            },
            "location": "maybe a link",
            "images": ["https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROPERTY_DETAILS':
            return {
                ...state,
                showing: state.properties.find(item => item.code === action.payload)
                    || []
            }
        
        case 'SET_HEADER_HOME':
            return {
                ...state,
                home: action.payload
            }
        case 'SET_IMAGE_PREVIEW_UPLOAD':
            return {
                ...state,
                preview_images_form: [...state.preview_images_form, action.payload]
            }
    }
    return state;
}

export default reducer;