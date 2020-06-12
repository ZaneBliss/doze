import React from 'react'
import { Route } from "react-router-dom";
import Home from './home/Home'
import Settings from './settings/Settings'
import Entries from './entries/Entries'
import Trends from './trends/Trends'

const ApplicationViews = props => {
    return (
        <>
            <Route exact path='/home' render={props => {
                return <Home />
            }} />
            <Route exact path='/trends' render={props => {
                return <Trends />
            }} />
            <Route exact path='/entries' render={props => {
                return <Entries />
            }} />
            <Route exact path='/settings' render={props => {
                return <Settings />
            }} />
        </>
    )
}

export default ApplicationViews