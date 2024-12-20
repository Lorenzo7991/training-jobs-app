import React from 'react'
import { useState } from 'react';

const JobListing = ({ id, type, title, description, salary, location }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let descriptionText = description;

    if (!showFullDescription) {
        descriptionText = description.substring(0, 100) + "...";
    }   
    return (
        <>
            <div key={id} className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                    <div className="mb-6">
                        <div className="text-gray-600 my-2">{type}</div>
                        <h3 className="text-xl font-bold">{title}</h3>
                    </div>
                    <div className="mb-5">
                        {descriptionText}
                    </div>
                    <h3 className="text-sky-500 mb-2">{salary}</h3>
                    <div className="border border-gray-100 mb-5"></div>
                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3">
                            <i className="fa-solid fa-location-dot text-lg"></i>
                            {location}
                        </div>
                        <a href={`job/${id}`} className="h-[36px] bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobListing