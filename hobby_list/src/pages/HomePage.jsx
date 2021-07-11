import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList/index.jsx'
import {addNewHobby,setActiveHobby} from '../actions/hobby.js'
HomePage.propTypes = {
    
};

const randomId = () => {
    return (1000 +  Math.trunc(Math.random()*9000));
}


function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId); 
    const dispatch = useDispatch();
    console.log('Hobby list',hobbyList);


    const handleRandomList = () => {
        const id = randomId();
        const newHobby = {
            id: id,
            title: "Hobby "+id,
        }
       const action = addNewHobby(newHobby);
       dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div>
            <h1>HOMEPAGE</h1>
            <button onClick={handleRandomList}>Random hobby</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick= {handleHobbyClick} ></HobbyList>
        </div>
    );
}

export default HomePage;