import React from 'react'
import styles from "../styles/HotelShowcase.module.css"
const HotelShowcase = ({subtitle, heading, image, description, address, badge}) => {
    return (<div className={styles['hotel-card']}>

        <div className={styles['hotel-card-image']}>
            <div className={styles.box}></div>
            <div className={styles['hotel-card-left']}>
                <img src={image} alt="Hotel Room" />
                {badge=="" ? null:<div className={styles['badge-cover']}>
                    <div className={styles.badge}>AWARD WINNING HOTEL</div>
                </div>}
            </div>
        </div>

        <div className={styles['hotel-card-right']}>

            <h5 className={styles['hotel-subtitle']}>{subtitle}</h5>

            <h1 className={styles['hotel-heading']}>{heading}</h1>

            <p className={styles.description}>{description}</p>

            <p className={styles.address}>{address}</p>

            <button className="btn">ABOUT MORE</button>
            <hr className={styles['btn-line']} />
        </div>

    </div>
    )
}

export default HotelShowcase
