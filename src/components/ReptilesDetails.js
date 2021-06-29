import React from 'react';
const ReptilesDetails = ({ species, location, status, date, photo }) => {
     return (
        <>
            <h5>Species: {species}</h5>
            <h5>Location: {location}</h5>
            <h5>Status: {status}</h5> 
            <h5>Date: {date}</h5> 
            <h5><img src={photo} /></h5>
        </>
    ); 
};
export default ReptilesDetails;