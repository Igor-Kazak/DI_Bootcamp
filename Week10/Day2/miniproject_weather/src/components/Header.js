import React, { useContext } from 'react';
import { AppContext } from '../App'

function Header() {
    const { city, setCity, setData, setResult } = useContext(AppContext);

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6fe831713223d9ff62b40fca4e66cda5`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("Not 2xx response")
                }
            })
            .then(data => {
                setData(data);
                setResult(true);
            })
            .catch(e => {
                setResult('notfound');
                console.log(e.message);
            });
    }

    return (
        <>  <h5>Get current weather in:</h5>
            <form>
                <input type="text" placeholder="enter city" onChange={handleChange} className="center" />
                <button onClick={handleClick} className="btn">Show</button>
            </form>
        </>
    )
}

export default Header;
