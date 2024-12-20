import React from 'react'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa'; 

const NotFoundPage = () => {
    return (
        <>
            <section className="text-center flex flex-col justify-center items-center h-96">
                <FaExclamationTriangle className='fas fa-exclamation-triangle text-red-400 text-6xl mb-4' />
                <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
                <p className="text-xl mb-5">Sorry... this page does not exist!</p>
                <Link to="/" className="text-white bg-sky-500 hover:bg-sky-300 rounded-md px-3 py-2 mt-4">
                    Go Back
                </Link>
            </section>
        </>
    )
}

export default NotFoundPage
