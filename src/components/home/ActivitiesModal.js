import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ActivitiesForm from '../activities/ActivitiesForm'
import APIManager from '../../modules/APIManager';

const ActivitiesModal = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let latestEntry = props.latestEntry

    useEffect(() => {
        console.log('Modal useEffect fired')
        APIManager.getAllUser(props.entry.userId).then(user => {
            latestEntry = user.entries[0]
            props.setLatestEntry(latestEntry)
        })
    }, [])

    return (
        <>
            <Button variant='primary' size='lg' onClick={handleShow} block >Activities</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>What did you do today?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ActivitiesForm
                        isNewUser={props.isNewUser}
                        setIsNewUser={props.setIsNewUser}
                        preferences={props.preferences}
                        entry={props.entry}
                        setEntry={props.setEntry}
                        handleClose={handleClose} 
                        latestEntry={props.latestEntry}
                        />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ActivitiesModal