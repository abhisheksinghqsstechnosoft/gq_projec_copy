import React from 'react'
import { useParams } from 'react-router-dom'
import Filter from '../components/filter/Filter';
import Provider from '../components/filter/provider/Provider';
import Map from '../components/filter/map/Map';

const Search = () =>
{

    const params = useParams();
    console.log(params)
    return (
        <div className="container">

            <div className="row main-container " >
                <div className="col-4">
                    <Filter />
                </div>
                <div className="col-4">
                    <Provider />
                </div>
                <div className="col-4">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Search