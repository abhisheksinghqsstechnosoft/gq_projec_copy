import React, { useState } from 'react';

const ProviderCard = ({ data }) =>
{
    const [selectedLocations, setSelectedLocations] = useState([]);

    const [selectedStyle, setSelectedStyle] = useState('not-selected')

    const handleCardSelection = (event) =>
    {
        const { value, checked } = event.target;

        if (checked)
        {
            setSelectedLocations((prevSelected) => [...prevSelected, value]);
            setSelectedStyle('selected');
        } else
        {
            setSelectedLocations((prevSelected) =>
                prevSelected.filter((location) => location !== value)
            );
            setSelectedStyle('not-sleceted')
        }
        console.log(selectedLocations)
    };

    return (
        <div className={ `mb-3 row card1 ${selectedStyle} ` }>
            <label className='lable-checked'>
                <input className='input-hide'
                    type="checkbox"
                    value={ data?.id }
                    checked={ selectedLocations.includes(data?.id) }
                    onChange={ handleCardSelection }
                />

                <div className="row mt-3">
                    <div className="col-3">
                        <img src={ `${data?.options.avtar}` }
                            style={ { height: '3rem', width: '3rem' } } alt="" />
                    </div>
                    <div className="col-8 mt-2">{ data?.options.name }</div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <img src={ `${data?.options.locationimg}` }
                            style={ { height: '3rem', width: '3rem' } } alt="" />
                    </div>
                    <div className="col-8 mt-2">{ data?.options.location }</div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <img src={ `${data?.options.avtar}` }
                            style={ { height: '3rem', width: '3rem' } } alt="" />
                    </div>
                    <div className="col-8 mt-2">{ data?.options.passion }</div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <img src={ `${data?.options.phoneimg}` }
                            style={ { height: '3rem', width: '3rem' } } alt="" />
                    </div>
                    <div className="col-8 mt-2">{ data?.options.phone }</div>
                </div>
                <div className="row mt-3">
                    <div className="col-3 ">
                        <img src={ `${data?.options.img2}` }
                            style={ { height: '3rem', width: '3rem' } } alt="" />
                    </div>
                    <div className="col-8 mt-2">{ data?.options.price }</div>
                </div>
            </label>


            <div className="row mt-3">
                <div className="col-12">

                </div>
            </div>
        </div>
    );
};

export default ProviderCard;
