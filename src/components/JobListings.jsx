import React from 'react';
import Jobs from './jobs.json';
import JobListing from './JobListing';

const JobListings = () => {
    return (
        <section className="px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Destructuring, mapping, and slicing jobs from the jobs.json file */}
                    {Jobs.slice(0, 3).map((job) => (
                        <JobListing key={job.id} {...job} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobListings; 