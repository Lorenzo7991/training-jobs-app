import React from 'react';
import JobListings from '../components/JobListings';

const JobsPage = () => {
  return (
    <>
      <section className='bg-sky-100 px-4 py-6'>
        <JobListings />
      </section>
    </>
  );
};

export default JobsPage;