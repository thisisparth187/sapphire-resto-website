import React from 'react'
import "../styles/HotelShowcase.css"
const HotelShowcase = ({subtitle, heading, image, description, address, badge}) => {
    return (<div className="hotel-card">

        <div className="hotel-card-image">
            <div className="box"></div>
            <div className="hotel-card-left">
                <img src={image} alt="Hotel Room" />
                {badge=="" ? null:<div className="badge-cover">
                    <div className="badge">AWARD WINNING HOTEL</div>
                </div>}
            </div>
        </div>

        <div className="hotel-card-right">

            <h5 className="hotel-subtitle">{subtitle}</h5>

            <h1 className="hotel-heading">{heading}</h1>

            <p className="description">{description}</p>

            <p className="address">{address}</p>

            <button className="btn">ABOUT MORE</button>
            <hr className="btn-line" />
        </div>

    </div>
    )
}

export default HotelShowcase
