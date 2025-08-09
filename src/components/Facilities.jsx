import React from "react";
import "../styles/Facilities.css";
import gym from "../assets/images/facilities/gym.png";
import pool from "../assets/images/facilities/pool.png";
import resto from "../assets/images/facilities/resto.png";
import spa from "../assets/images/facilities/spa.png";

const facilitiesData = [
    {
        id: "01",
        category: "Fitness",
        title: "Gym Training Grounds",
        description:
            "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone.",
        image: gym,
    },
    {
        id: "02",
        category: "Recreation",
        title: "Indoor Swimming Pool",
        description:
            "Proactively synthesize bleeding-edge methodologies and foster robust infrastructures for the ultimate aquatic experience.",
        image: pool,
    },
    {
        id: "03",
        category: "Dining",
        title: "The Restaurant Center",
        description:
            "Seamlessly leverage strategic culinary expertise to deliver an unforgettable dining journey.",
        image: resto,
    },
    {
        id: "04",
        category: "Wellness",
        title: "Spa & Wellness",
        description:
            "Enthusiastically orchestrate spa therapies that rejuvenate body and soul through holistic care.",
        image: spa,
    },
];

const Facilities = () => {
    return (
        <section className="facilities-section">
            <div className="facilities-header">
                <h2 className="facilities-title">
                <span className="facilities-subtitle">Facilities</span> <br />
                    Enjoy Complete & <br /> Best Quality Facilities
                </h2>
                <button className="view-more">VIEW MORE ITEM</button>
            </div>

            {facilitiesData.map((facility, index) => (
                <div
                    className={`facility-card ${index % 2 !== 0 ? "reverse-layout" : ""
                        }`}
                    key={facility.id}
                >
                    <div className="facility-image">
                        <img src={facility.image} alt={facility.title} />
                    </div>
                    <div className="facility-content">
                        <span className="facility-id">{facility.id}</span>
                        <span className="facility-category">{facility.category}</span>
                        <h3 className="facility-title">{facility.title}</h3>
                        <p className="facility-description">{facility.description}</p>
                        <a href="#" className="facility-link">
                            →
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Facilities;
