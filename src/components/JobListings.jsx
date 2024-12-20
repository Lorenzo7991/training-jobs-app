import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const r = await fetch('http://localhost:5000/jobs');
                const data = await r.json();
                setJobs(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const displayedJobs = isHome ? jobs.slice(0, 3) : jobs;

    return (
        <section className="px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                {/* Mapping recent jobs  */}
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {displayedJobs.map((job) => (
                            <JobListing key={job.id} {...job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobListings;