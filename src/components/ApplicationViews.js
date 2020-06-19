import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import moment from 'moment'
import Home from './home/Home'
import Settings from './settings/Settings'
import Trends from './trends/Trends'
import Activities from './activities/Activities'
import About from './about/About'
import Journal from './journal/Journal'
import './ApplicationViews.css'
import APIManager from '../modules/APIManager';

const ApplicationViews = props => {
    const activeUser = props.activeUser
    const setActiveUser = props.setActiveUser

    let [entry, setEntry] = useState({
        userId: props.activeUser.id,
        factor1: 0,
        factor2: 0,
        factor3: 0,
        factor4: 0,
        factor5: 0,
        factor6: 0,
        factor7: 0,
        factor8: 0,
        result: false, 
        hoursSlept: 0,
        score: null,
        date: new Date(),
        notes: '',
    })
    const [isNewUser, setIsNewUser] = useState(true)
    const [preferences] = useState([
        'Exercised', 'Drank coffee', 'Sleep mask', 'Cool room',
        'Stressed', 'Worked late', 'Tired', 'Drank alchohol'
    ])

    useEffect(() => {
        APIManager.getAllUser(entry.userId).then(user => {
            if (user.entries.length > 0) { 
                setEntry(user.entries[0]) 
                setIsNewUser(!isNewUser)
            }
        })
    }, [])

    return (
        <div className='content-wrapper'>

            <Route exact path='/' render={props => {
                return <Home {...props}
                    entry={entry}
                    setEntry={setEntry}
                    isNewUser={isNewUser}
                    setIsNewUser={setIsNewUser}
                    preferences={preferences}
                    // setIsLoaded={setIsLoaded}
                    // isLoaded={isLoaded}
                    // saved={saved}
                    // setSaved={setSaved}
                    // latestEntry={latestEntry}
                    // setLatestEntry={setLatestEntry}
                    // setEntry={setEntry}
                    // score={score}
                    // setScore={setScore}
                    // activities={activities}
                    // setActivities={setActivities}
                    // activeUser={activeUser}
                    // hoursSlept={hoursSlept}
                    // notes={notes}
                    // setNotes={setNotes}
                />
            }} />
            <Route exact path='/trends' render={props => {
                return <Trends />
            }} />
            <Route exact path='/journal' render={props => {
                return <Journal {...props}
                    activeUser={activeUser}
                />
            }} />
            <Route exact path='/settings' render={props => {
                return <Settings
                    {...props}
                    setActiveUser={setActiveUser} />
            }} />
            <Route exact path='/about' render={props => {
                return <About />
            }} />
        </div>
    )
}

export default ApplicationViews