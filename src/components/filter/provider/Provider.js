import React from 'react'
import ProviderCard from '../../cards/ProviderCard'

const Provider = () =>
{
    const providerdata = [

        {
            logo: 'logo',
            name: 'Abhishek Singh , Software Developer',
            address: 'H-149 , Sector - 63 , Noida',
            npiNumber: 'NPI number 12345',
            totalPatients: 'Total Patient 1234',
            medicare: 'Medicare $50'
        },
        {
            logo: 'logo',
            name: 'Abhishek Singh , Software Developer',
            address: 'H-149 , Sector - 63 , Noida',
            npiNumber: 'NPI number 12345',
            totalPatients: 'Total Patient 1234',
            medicare: 'Medicare $50'
        },
        {
            logo: 'logo',
            name: 'Abhishek Singh , Software Developer',
            address: 'H-149 , Sector - 63 , Noida',
            npiNumber: 'NPI number 12345',
            totalPatients: 'Total Patient 1234',
            medicare: 'Medicare $50'
        },
        {
            logo: 'logo',
            name: 'Abhishek Singh , Software Developer',
            address: 'H-149 , Sector - 63 , Noida',
            npiNumber: 'NPI number 12345',
            totalPatients: 'Total Patient 1234',
            medicare: 'Medicare $50'
        },
        {
            logo: 'logo',
            name: 'Abhishek Singh , Software Developer',
            address: 'H-149 , Sector - 63 , Noida',
            npiNumber: 'NPI number 12345',
            totalPatients: 'Total Patient 1234',
            medicare: 'Medicare $50'
        },
        {
            logo: 'logo',
            name: 'Abhishek Singh , Software Developer',
            address: 'H-149 , Sector - 63 , Noida',
            npiNumber: 'NPI number 12345',
            totalPatients: 'Total Patient 1234',
            medicare: 'Medicare $50'
        },



    ]
    return (
        <div className="provider">
            <div className="container ">
                { providerdata.map(data => (
                    <ProviderCard data={ data } />
                )) }
            </div>
        </div>

    )
}

export default Provider