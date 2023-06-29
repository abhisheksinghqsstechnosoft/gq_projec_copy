import React, { useState } from 'react'

// import { useDispatch } from 'react-redux'
const Filter = ({ leftFilters, setSelectedVal }) =>
{


    const [active, setActive] = useState(false);


    const onChangeHadeller = (event) =>
    {
        const value = event.target.value;
        const name = event.target.name;
        console.log(name);

        setSelectedVal((previousValue) =>
        {
            const updatedValue = previousValue.map((item) =>
            {
                if (item.name === name)
                {
                    return { name, value };
                }
                return item;
            });
            if (!updatedValue.some((item) => item.name === name))
            {
                return [...updatedValue, { name, value }];
            }

            return updatedValue;
        });
    };

    const clearFilterHandeller = () =>
    {
        setSelectedVal([]);
    }



    return (
        <div className="filter">
            <div className="container">
                <div className="row">
                    <div className="filter-header flex-sm-colomn mb-3">
                        <div className="col-6 filter-left">
                            <div className="col-6"><i className="fa fa-bars" aria-hidden="true"></i>Filter</div>
                            <div className='col-3'><i className="fa fa-list" aria-hidden="true" onClick={ () => setActive(false) }
                                style={ !active ? { color: " #00bef3", cursor: "pointer" } : {
                                    color: "#000",
                                    cursor: "pointer"
                                } }></i></div>
                            <div className='col-3'><i className="fa fa-th " aria-hidden="true" onClick={ () => setActive(true) }
                                style={ active ? { color: " #00bef3", cursor: "pointer" } : {
                                    color: "#000",
                                    cursor: "pointer"
                                } }></i></div>

                        </div>
                        <div className="col-6 filter-right "><i className="fa fa-long-arrow-left" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className={ `select ${active ? 'hide' : 'visible'}` }>
                    { leftFilters.map((item, index) => (
                        <div className="select-1" key={ `${index}+11` }>
                            <label htmlFor="">{ item?.label }</label>

                            { item?.options[0] === 'input here' ? <div className='row'>
                                <div className="col-4"> <input type="number" class="form-control" placeholder="0" aria-label="" /></div>to
                                <div className="col-5"> <input type="number" class="form-control" placeholder="1230697" aria-label="" /></div>
                                <button className=" col-2 ok-button-in-filter ">OK</button>
                            </div> : <select onChange={ onChangeHadeller } name={ item?.label } class="form-select d-none d-lg-block  mt-1 mb-1" aria-label=".form-select-lg example">
                                {
                                    item?.options.map((data, index) => (
                                        <option key={ index } value={ data?.value }>{ data?.title }</option>
                                    ))
                                }

                            </select> }


                        </div>)) }



                </div>


                <div className={ `select-tab2  ${active ? 'visible' : 'hide'} ` }>
                    { leftFilters.map((item, index) => (
                        <div className="select-1 " key={ `${index}+11` }>

                            <label htmlFor="" className=''>{ item?.label }</label>
                            <select name={ item?.label } onChange={ onChangeHadeller } class="form-select  " aria-label=".form-select-lg example">
                                {
                                    item?.options.map((data, index) => (
                                        <option className='' key={ index } value={ data?.value }>{ data?.title }</option>
                                    ))
                                }

                            </select>


                        </div>)) }



                </div>
                <div className=" mt-4 button-clear-filter">
                    <button onClick={ clearFilterHandeller }>Clear All Filters</button>
                </div>


            </div>

        </div>
    )
}

export default Filter