import React from 'react';
import styles from '../styles/MemberCard.module.css';

const MemberCard = ({ name, image, designation, about }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles['card-image']} />
            <div className={styles.category}> {designation} </div>
            <div className={styles.heading}> {name}
                <div className={styles.author}> {about} </div>
            </div>
        </div>
    );
};

export default MemberCard;
