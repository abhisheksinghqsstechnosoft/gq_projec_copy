import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Search from './Search';
// import { useSelector } from 'react-redux';

const Home = () =>
{
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false)


    // useEffect(() =>
    // {
    //     const enterKeyHandeller=
    //     document.addEventListener('keydown',enterKeyHandeller)
    // }, []);


    const [pClass, setPClass] = useState('')
    const searchHandeller = (event) =>
    {
        console.log(search);
        setDisplay(true)
        setPClass('p-class')
        navigate(`/search/${search}`);


    }


    return (
        <div className={ `container home ${pClass}` }>

            <div className="row d-flex justify-content-between m-1">
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
            </div>
            <br />

            { display && <Search search={ search } /> }
        </div>
    )
}

export default Home