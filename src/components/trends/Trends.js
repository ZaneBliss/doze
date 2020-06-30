import React, { useState, useEffect } from 'react'
import HoursSlept from '../charts/HoursSlept'
import SleepScores from '../charts/SleepScores'
import Factors from '../charts/Factors'
import Results from '../charts/Results'
import APIManager from '../../modules/APIManager'
import { Card } from 'react-bootstrap'
import './Trends.css'

const Trends = props => {
    const [hoursSlept, setHoursSlept] = useState([])
    const [totalSlept, setTotalSlept] = useState(0)
    const [sleepScores, setSleepScores] = useState([])
    const [results, setResults] = useState([])
    const [totalNights, setTotalNights] = useState()
    const [factor1, setFactor1] = useState(0)
    const [factor2, setFactor2] = useState(0)
    const [factor3, setFactor3] = useState(0)
    const [factor4, setFactor4] = useState(0)
    const [factor5, setFactor5] = useState(0)
    const [factor6, setFactor6] = useState(0)
    const [factor7, setFactor7] = useState(0)
    const [factor8, setFactor8] = useState(0)

    const getMetrics = (resource, setResource) => {
        let arr = []
        APIManager.getMetrics(props.activeUser.id).then(entries => {
            entries.forEach(entry => {
                arr.push(entry[resource])
            });
            setResource(arr)
        })
    }

    const getTotalNumber = (resource, setResource) => {
        let num = 0
        APIManager.getAllUser(props.activeUser.id).then(user => {
            user.entries.forEach(entry => {
                num += entry[resource]
            });
            setResource(num)
        })
    }

    const getNightsSlept = () => {
        let nightsSlept = 0
        APIManager.getAllUser(props.activeUser.id).then(user => {
            nightsSlept = user.entries.length
            setTotalNights(nightsSlept)
        })
    }

    useEffect(() => {
        getMetrics('hoursSlept', setHoursSlept)
        getMetrics('score', setSleepScores)
        getMetrics('result', setResults)
        getTotalNumber('hoursSlept', setTotalSlept)
        getTotalNumber('factor1', setFactor1)        
        getTotalNumber('factor2', setFactor2)        
        getTotalNumber('factor3', setFactor3)        
        getTotalNumber('factor4', setFactor4)
        getTotalNumber('factor5', setFactor5)
        getTotalNumber('factor6', setFactor6)
        getTotalNumber('factor7', setFactor7)
        getTotalNumber('factor8', setFactor8)
        getNightsSlept(setTotalNights)
    }, [])

    return (
        <>
            <div className='content-wrapper'>
                <div className='header-wrapper'>
                    <h1>Trends</h1>
                </div>
                <div className='chart-wrapper'>
                    <div className='trend-card'>
                        <Card>
                            <Card.Body>
                                <HoursSlept hoursSlept={hoursSlept} />
                                <Card.Title className='card-title'>Hours slept</Card.Title>
                                <Card.Text>
                                    Most healthy adults need between 7 to 9 hours of sleep per night to function properly.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='trend-card'>
                        <Card>
                            <Card.Body>
                                <SleepScores sleepScores={sleepScores} />
                                <Card.Title className='card-title'>Sleep scores</Card.Title>
                                <Card.Text>
                                    As Doze learns from your habits, your sleep scores become more accurate over time.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='trend-card'>
                        <Card>
                            <Card.Body>
                                <Results results={results} />
                                <Card.Title className='card-title'>Well rested</Card.Title>
                                <Card.Text>
                                    Did you feel well rested? See which days you felt well rested.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='trend-card'>
                        <Card>
                            <Card.Body>
                                {/* <Factors /> */}
                                <Card.Title style={{ fontSize: '20pt' }}>Metrics</Card.Title>
                                <Card.Text style={{ fontSize: '16pt' }}>
                                    Total hours slept: {totalSlept}
                                    <br/>
                                    Total nights slept: {totalNights}
                                    <br/>
                                    Total days with exercise: {factor1} 
                                    <br/>
                                    Total days with caffeine: {factor2}
                                    <br/>
                                    Total days with a sleep mask: {factor3}
                                    <br/>
                                    Total days with a cool room: {factor4}
                                    <br/>
                                    Total days you were stressed: {factor5}
                                    <br/>
                                    Total days you worked late: {factor6}
                                    <br/>
                                    Total days you avoided screens: {factor7}
                                    <br/>
                                    Total days you drank alcohol: {factor8}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trends