import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
const Filter = () =>
{
    const [selectedVal, setSelectedVal] = useState('');

    const dispatch = useDispatch();


    const onChangeHadeller = (event) =>
    {
        setSelectedVal(event.target.value);
        // dispatch({
        //     type: 'select',
        //     payload: selectedVal
        // });
    }
    useEffect(() =>
    {
        console.log(selectedVal);
        dispatch({
            type: 'select',
            payload: selectedVal
        });


    }, [onChangeHadeller])


    const data = [1, 3, 4, 4, 66, 6, 4, 4, 4, 4, 4, 44, 4, 3]
    return (
        <div className="filter">
            <div className="container">
                <div className="row">
                    <div className="filter-header flex-sm-colomn mb-3">
                        <div className="col-6 filter-left">
                            <div className="col-6"><i class="fa fa-bars" aria-hidden="true"></i>Filter</div>
                            <div className="col-3"><i class="fa fa-list-ul" aria-hidden="true"></i></div>
                            <div className="col-3"><i class="fa fa-th" aria-hidden="true"></i></div>
                        </div>
                        <div className="col-6 filter-right "><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="select">
                    { data.map(d => (
                        <div className="select-1">
                            <select onChange={ onChangeHadeller } class="form-select d-none d-lg-block  mt-1 mb-1" aria-label=".form-select-lg example">
                                <option selected>Open this select menu</option>
                                <option value="One">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>

                            <select class="form-select d-lg-none form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>)) }
                </div>


            </div>
        </div>
    )
}

export default Filter