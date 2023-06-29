import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Filter from '../components/filter/Filter';
import Provider from '../components/filter/provider/Provider';
import Map from '../components/filter/map/Map';
import { leftFilters } from '../constants/DUMMY_DATA'
import { Filters } from '../constants/DUMMY_DATA';

const Search = ({ search }) =>
{

    const keyword = search

    const filterdata = Filters.filter(filter =>
    {
        return filter?.options?.name.toLowerCase().includes(keyword.toLowerCase());

    });
    console.log(filterdata);

    const [selectedVal, setSelectedVal] = useState([]);
    const params = useParams();
    console.log(params);
    console.log(selectedVal);
    const removeValue = (value) =>
    {
        setSelectedVal(previousValue => previousValue.filter(previousValue => previousValue.value !== value));
    }

    return (
        <div className="container m-1">
            <div className="row">
                <p>{ `${filterdata.length} result found` }</p>
            </div>
            <div className="row">
                <div className="col center m-1 mb-5">
                    { selectedVal.length > 0 &&
                        < div className='d-flex align-item-center'
                            style={ { width: "100%", alignItems: "center", gap: "10px", } } >
                            Your Filter Tags are:
                            { selectedVal.map((val) => (

                                <div ><button className='btn btn-info' onClick={ () =>
                                    removeValue(val.value) }
                                    style={ { backgroundColor: '#e9e9e9', border: '1px solid #e9e9e9' } } >
                                    { val.value }
                                    <i class="fa fa-times " aria-hidden="true" style={ { color: '#000', marginLeft: '10px' } }></i>
                                </button></div>
                            )) }
                        </div>
                    }</div>

            </div>



            <div className="row  main-container " >
                <div className="col-4">
                    <Filter leftFilters={ leftFilters } setSelectedVal={ setSelectedVal } />
                </div>
                <div className="col-4">
                    <Provider filterdata={ filterdata } />
                </div>
                <div className="col-4">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Search