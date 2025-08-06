import React from 'react';
import '../styles/MemberCard.css';

const MemberCard = ({ name, image, designation, about }) => {
    return (
        <div class="card">
            <img src={image} alt={name} className='card-image' />
            <div class="category"> {designation} </div>
            <div class="heading"> {name} 
                <div class="author"> {about} </div>
            </div>
        </div>
    );
};

export default MemberCard;
