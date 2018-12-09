import React from 'react';
import Weather from './Weather';
const weather_api_key = '7971dad983f82e335ddcba06a00a9b52';
class Form extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        try {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&id=524901&APPID=${weather_api_key}`);
            const data = await api_call.json();
            if (country && city) {
                this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: ""
                });
            } else {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    description: undefined,
                    error: 'Please Enter values'
                })
            }
    
        } catch (error) {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Invalid City or country'
            })
        }
       
       
    }
    render() {
        return (
            <div>
            <form onSubmit={(e) => {this.getWeather(e);}}>
                <h1>Form Component</h1>
                <input type="text" name="city" placeholder="City"></input>
                <input type="text" name="country" placeholder="Country"></input>
                <button type="submit">Get Weather</button>
                <br/>
                {this.state.error}
            </form>
            <Weather values={this.state} />
            </div>
        )
    }
}

export default Form;