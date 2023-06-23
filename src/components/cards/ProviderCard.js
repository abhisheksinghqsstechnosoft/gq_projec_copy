import React from 'react'

const ProviderCard = (data) =>
{
    console.log(data);
    return (
        <div className="mb-3 row card1">
            <div className="row mt-3">
                <div className="col-3 "><i class="fa fa-compass" aria-hidden="true"></i>
                </div>
                <div className="col-8">{ data?.data?.name }</div>
            </div>
            <div className="row mt-3 ">
                <div className="col-3 "><i class="fa fa-compass" aria-hidden="true"></i>
                </div>
                <div className="col-8">{ data?.data?.address }</div>
            </div>
            <div className="row mt-3">
                <div className="col-3 "><i class="fa fa-compass" aria-hidden="true"></i>
                </div>
                <div className="col-8">{ data?.data?.npiNumber }</div>
            </div>
            <div className="row mt-3">
                <div className="col-3 "><i class="fa fa-compass" aria-hidden="true"></i>
                </div>
                <div className="col-8">{ data?.data?.totalPatients }</div>
            </div>
            <div className="row mt-3">
                <div className="col-3 "><i class="fa fa-compass" aria-hidden="true"></i>
                </div>
                <div className="col-8">{ data?.data?.medicare }</div>
            </div>

        </div>
    )
}

export default ProviderCard