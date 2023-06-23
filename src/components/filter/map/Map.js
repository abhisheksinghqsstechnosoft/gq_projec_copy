import React from 'react';

const Map = () =>
{
    const mapStyles = {
        border: '0',
        width: '100%',
        height: '60vh'
    };

    return (
        <div className='row'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.129311499415!2d77.37423417542527!3d28.62588627566831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff0b77a2b75%3A0xe575965f3188a04!2sQSS%20Technosoft%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1687498261094!5m2!1sen!2sin"
                style={ mapStyles }
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
