import React from 'react'
import ProviderCard from '../../cards/ProviderCard'
// import { Filters } from '../../../constants/DUMMY_DATA'

const Provider = ({ filterdata }) =>
{



    return (
        <div className="provider">
            <div className="container ">
                { filterdata?.map((data, index) => (
                    <ProviderCard key={ `${index}+12` } data={ data } />
                )) }
            </div>
        </div>

    )
}

export default Provider