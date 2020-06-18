import React, { useState } from 'react'
import { Button, Modal, FormLabel } from 'react-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import APIManager from '../../modules/APIManager';
import RangeSlider from 'react-bootstrap-range-slider'

const Save = props => {
  const [hoursSlept, setHoursSlept] = useState(0)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = e => {
    props.setSaved(!props.saved)
    APIManager.getEntry()
    let obj = {
      userId: props.activeUser.id,
      factor1: props.activities[0],
      factor2: props.activities[1],
      factor3: props.activities[2],
      factor4: props.activities[3],
      factor5: props.activities[4],
      factor6: props.activities[5],
      factor7: props.activities[6],
      factor8: props.activities[7],
      result: props.result ? 1 : 0,
      date: new Date(),
      notes: props.notes,
      hoursSlept: props.hoursSlept
    }
    handleClose()
    props.setActivities([])
    localStorage.setItem('activities', JSON.stringify([]))
    APIManager.post('entries', obj)
  }

  return (
    <>
      {!props.saved ?
        <Button variant="primary" onClick={handleShow}>Save</Button> :
        <Button variant="primary" onClick={handleShow} disabled={props.saved}>Saved</Button>
      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Body>
          Do you feel rested?
        <BootstrapSwitchButton onlabel=' ' offlabel=' ' checked={props.result} onChange={() => {
            props.setResult(!props.result)
          }} />
        </Modal.Body>
        <FormLabel>Hours slept</FormLabel>
        <RangeSlider
          min={0}
          max={12}
          value={hoursSlept}
          size='lg'
          step={0.5}
          onChange={e => { setHoursSlept(Number(e.target.value)) }}
        />
        <FormLabel>{hoursSlept}</FormLabel>
        <Button variant="primary" onClick={e => {
          handleSubmit()
        }}>Save entry</Button>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
      </Modal>
    </>
  )
}

export default Save