import React, { useEffect, useState } from 'react'
import HomeRing from '../ring/HomeRing'
import APIManager from '../../modules/APIManager'

const Ring = props => {
    const [activities] = useState([])
    const [loadRing, setLoadRing] = useState(null)

    useEffect(() => {
        APIManager.getAllUser(props.entry.userId).then(user => {
            if (user.entries.length === 1) {
                setLoadRing(false)
            } else if (user.entries[user.entries.length - 1].isSaved) {
                setLoadRing(false)
            } else if (props.isNewUser) {
                setLoadRing(false)
            } else {
                setLoadRing(true)
            }
        })
    }, [])

    return (
        <>
            <div className='ring-container'>
                {!props.loadRing ?
                    <div className='header-text'>
                        <h1>Enter today's activities</h1>
                    </div>
                    :
                    <div className='header-text'>
                        <h1>Predicted sleep score</h1>
                    </div>

                }
                <HomeRing
                    counter={props.counter}
                    score={props.score}
                    setScore={props.setScore}
                    loadRing={loadRing}
                    setLoadRing={setLoadRing}
                    entry={props.entry}
                    setEntry={props.setEntry}
                    activities={activities}
                    latestEntry={props.latestEntry} />
            </div>
        </>
    )
}

export default Ring