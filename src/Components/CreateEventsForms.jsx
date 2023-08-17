import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { samplecontext } from '../App'

const CreateEventsForms = () => {
    const nav=useNavigate()
    const sample=useContext(samplecontext);
    const{setshowhomenav,setshowfooter}=sample;
    useEffect(() => {
        setshowhomenav(false)
        setshowfooter(false)
    }, [])
    
    const [show, setShow] = useState(false);
    const [event, setevent] = useState({
        category:'',
        name:'',
        description:'',
        date:'',
        time:'',
        location:'',
    })
    const options = ['Business', 'Holiday', 'Health', 'Music', 'Rituals','Sports','Other'];
    const getInput=(e)=>{
        setevent({...event,[e.target.name]: e.target.value})
    }
    console.log(event);

    const handleInvite = () =>{
        nav('/inviteuser')
    }
    const handleSubmit = () =>{
        nav('/Navuser')
    }
  return (
    <div className='main-div-cre-event align-items-center'>
        <div className='div2'>
        <h2 className='text-center text-light fw-bold'>Create your Events Here</h2>
        <div className='add-div offset-lg-3 col-lg-6'>
            
            <Form  className='' >
                <Form.Group className="mb-3 fw-bold fs-5 text-light " >
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select example"
                     name="category"
                     onChange={getInput}
                     >
                        <option>Please select category</option>
                        {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                            })}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold fs-5 text-light" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Name" 
                    name="name"
                    onChange={getInput}
                    required
                    />
                </Form.Group>
                <Form.Group className="mb-3 fw-bold fs-5 text-light" >
                    <Form.Label>description</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Description" 
                    name="description"
                    as="textarea" rows={3}
                    onChange={getInput}
                    required
                    />
                </Form.Group>
                <Form.Group className="mb-3 fw-bold fs-5 text-light" >
                    <Form.Label>Date</Form.Label>
                    <Form.Control 
                    type="date" 
                    placeholder="select date" 
                    name="date"
                    onChange={getInput}
                    required
                    />
                </Form.Group>
                <Form.Group className="mb-3 fw-bold fs-5 text-light" >
                    <Form.Label>Time</Form.Label>
                    <Form.Control 
                    type="time" 
                    placeholder="select time" 
                    name="time"
                    onChange={getInput}
                    required
                    />
                </Form.Group>
                <Form.Group className="mb-3 fw-bold fs-5 text-light" >
                    <Form.Label>Location</Form.Label>
                    <Form.Control 
                    type="location" 
                    placeholder="Enter Location " 
                    name="location"
                    onChange={getInput}
                    required
                    />
                </Form.Group>
                <Form.Label>Are you like to invite your friends for collaboraion? Plese Click here
                     <Button  className='invite-btn' onClick={handleInvite}>Invite</Button>
                </Form.Label>
                    <Button className="w-25 d-flex justify-content-center mx-auto" variant="dark" onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
        </div> 
        
    </div>
  )
}

export default CreateEventsForms