import React from 'react'
import { Form, Button } from 'react-bootstrap'
import BoostrapSwitchButton from 'bootstrap-switch-button-react'
import APIManager from '../../modules/APIManager'
import '../activities/ActivitiesForm.css'

const ActivitiesForm = props => {
    const size = 'lg'
    const onlabel = 'Yes'
    const offlabel = 'No'

    const handleSave = () => {
        if (!props.isNewUser) {
            console.log('has entries')
        } else {
            let obj = {
                userId: props.entry.userId,
                factor1: props.entry.factor1,
                factor2: props.entry.factor2,
                factor3: props.entry.factor3,
                factor4: props.entry.factor4,
                factor5: props.entry.factor5,
                factor6: props.entry.factor6,
                factor7: props.entry.factor7,
                factor8: props.entry.factor8,
                result: props.entry.result,
                date: props.entry.date,
                notes: props.entry.notes,
                hoursSlept: props.entry.hoursSlept,
                score: props.entry.score,
                saved: props.entry.isSaved
            }
            APIManager.post('entries', obj)
            props.setIsNewUser(!props.isNewUser)
        }
    }

    return (
        <>
            <Form>
                <Form.Group>
                    <div className='sliders'>
                        <Form.Label>{props.preferences[0]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.entry.factor1))}
                            onChange={() => { props.entry.factor1 = +!props.entry.factor1 }}
                        />
                        <Form.Label>{props.preferences[1]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.entry.factor2))}
                            onChange={() => { props.entry.factor2 = +!props.entry.factor2}}
                        />
                        <Form.Label>{props.preferences[2]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.entry.factor3))}
                            onChange={() => { props.entry.factor3 = +!props.entry.factor3 }}
                        />
                        <Form.Label>{props.preferences[3]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.entry.factor4))}
                            onChange={() => { props.entry.factor4 = +!props.entry.factor4 }}
                        />
                        <Form.Label>{props.preferences[4]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.entry.factor5))}
                            onChange={() => { props.entry.factor5 = +!props.entry.factor5 }}
                        />
                        <Form.Label>{props.preferences[5]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.entry.factor6))}
                            onChange={() => { props.entry.factor6 = +!props.entry.factor6 }}
                        />
                        <Form.Label>{props.preferences[6]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.entry.factor7))}
                            onChange={() => { props.entry.factor7 = +!props.entry.factor7 }}
                        />
                        <Form.Label>{props.preferences[7]}</Form.Label>
                        <BoostrapSwitchButton onlabel={onlabel} offlabel={offlabel} size={size}
                            checked={(Boolean(props.entry.factor8))}
                            onChange={() => { props.entry.factor8 = +!props.entry.factor8 }}
                        />
                        <Button onClick={() => {
                            handleSave()
                            props.handleClose()
                        }}>Next</Button>
                        <Button onClick={props.handleClose} variant='secondary'>Cancel</Button>
                    </div>
                </Form.Group>
            </Form>
        </>
    )
}

export default ActivitiesForm