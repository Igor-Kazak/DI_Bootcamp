import React, { useContext } from 'react';
import { AppContext } from '../App'

function Content() {
    const { data, result } = useContext(AppContext);

    switch (result) {
        case true:
            return (
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">City</th>
                                <th scope="col">{data.name}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Temperature</th>
                                <td>{parseInt(data.main.temp - 273)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Pressure</th>
                                <td>{data.main.pressure}</td>
                            </tr>
                            <tr>
                                <th scope="row">Humidity</th>
                                <td>{data.main.humidity}</td>
                            </tr>
                            <tr>
                                <th scope="row">Description</th>
                                <td>{data.weather[0].main} ({data.weather[0].description})</td>
                            </tr>
                            <tr>
                                <th scope="row">Wind</th>
                                <td>Speed: {data.wind.speed}, direction: {data.wind.deg}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        case false:
            return (
                <>
                </>
            );
        case 'notfound':
            return (
                <div>
                    <p>City not found...</p>
                </div>
            );
        default:
            break;
    }
}

export default Content;