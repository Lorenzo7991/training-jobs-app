import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '0 auto',

}

const Spinner = ({ loading }) => {
    return (
        <>
            <ClipLoader
                color='#0EA5E9'
                loading={loading}
                cssOverride={override}
                size={150} />
        </>
    )
}

export default Spinner
