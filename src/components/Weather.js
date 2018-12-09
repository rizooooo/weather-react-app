import React from 'react';

const Weather = props => {
    return (
        <div>
            <h1>Weather Component</h1>
            {
                props.values.city && props.values.country && (
                    <React.Fragment>
                        <p>City: {props.values.city}</p>
                        <p>Country: {props.values.country}</p>
                        <p>Temperature: {props.values.temperature}</p>
                        <p>Humidity: {props.values.humidity}</p>
                        <p>Description: {props.values.description}</p>
                    </React.Fragment>
                )
            }

        </div>
    )
}

export default Weather;