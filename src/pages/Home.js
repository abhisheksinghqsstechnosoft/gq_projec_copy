import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import { useSelector } from 'react-redux';

const Home = () =>
{
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false)

    const [tag, setTag] = useState(false);
    const tag1 = useSelector(state => state.select);
    console.log(`tag is : ${tag1?.select}`);

    // useEffect(() =>
    // {
    //     if (!tag1) setTag(true)

    // }, [tag1])

    const searchHandeller = (event) =>
    {
        console.log(search);
        setDisplay(true)
        navigate(`/search/${search}`);


    }


    return (
        <div className="container home">
            <div className="row">
                <h1>Company Search</h1>
            </div>
            <div className="row search-container ">
                <div className="col-10 search-input">
                    <input type="text" className='form-control' onChange={ (event) => { setSearch(event.target.value) } } placeholder='type something you want to search' value={ search } />
                    <button className='input-icon' onClick={ (e) => { setSearch('') } }>
                        <span className='input-icon'><i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="col-2 search-button">
                    <button className='btn btn-info' onClick={ searchHandeller }>Search</button>
                    <span className='search-icon'><i class="fa fa-search" aria-hidden="true"></i></span>
                </div>

            </div>

            <br />

            <div className="row">
                <p>11 result near yoyur search noida</p>
            </div>
            <div className="container">
                Your Tags :

                <div className="btn btn-info m-3 " style={ { color: "#fff" } }>
                    { tag1?.select }
                </div>

            </div>

            <br />
            { display && <Search /> }
        </div>
    )
}

export default Home