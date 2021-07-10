import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

HomePage.propTypes = {
    
};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    console.log('Hobby list',hobbyList);

    return (
        <div>
            <h1>HOMEPAGE</h1>
        </div>
    );
}

export default HomePage;