import React, { useContext, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { BiMusic, BiSolidDrink } from 'react-icons/bi'
import { TfiGallery } from 'react-icons/tfi'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineBusinessCenter, MdOutlineSportsHandball } from 'react-icons/md'
import { FaBirthdayCake } from 'react-icons/fa'
import { PiBowlFood } from 'react-icons/pi'
import {motion} from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { samplecontext } from '../App'


const ViewEvents = () => {
  const nav=useNavigate();
  const sample=useContext(samplecontext);
    const{setshowhomenav,setshowfooter}=sample;
    useEffect(() => {
        setshowhomenav(false)
        setshowfooter(false)
    }, [])
  const eventCat=[
    {
      id:1,
      name:"Music",
      img:'https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg'
    },
    {
      id:2,
      name:"Holiday",
      img:"https://s31606.pcdn.co/wp-content/uploads/2016/11/holiday-party-event.jpg"
    },
    {
      id:3,
      name:"Health",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQmokGI7c4BLh7aKPtw3n4ys1sYa-wiWT939GZM0MNIiahOyxUkJvFPB1O2sdfDY5SM0&usqp=CAU'
    },
    {
      id:4,
      name:"Business",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFr8zM8uqAOVbToSHqgFn3X7JmfWeMjv8a3TJVB1CdVyA4i4dvVHQ6Y5yBRdpQYDLuU0&usqp=CAU'
    },
    {
      id:5,
      name:"Sports",
      img:'https://guardian.ng/wp-content/uploads/2019/03/sport-equipment-e1555707764770.jpeg'
    },
    {
      id:6,
      name:"Rituals",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJAd_BxVJcogdbeicg1JaD3ZrHEzKdbOzSA&usqp=CAU"
    },
    {
      id:7,
      name:"Food",
      img:'https://img.freepik.com/free-photo/top-view-arrangement-with-food-wooden-background_23-2148308806.jpg?w=2000'
    },
    {
      id:8,
      name:"others",
      img:'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2021-05/love_the_wind_shutterstock.jpg?itok=e3OKLrHH'
    },
  ]
 
  return (
    <div className='row view-event-div' >
      <h2 className='text-center text-light fw-bold pt-4'>Select The Category</h2>
       {eventCat.map((i)=>{
        return( 
          <div className='main-div2'>
            <Link to='/eventdetail'>
            <Card  className='main-card' >
              <Card.Img variant="top" className='card-img' src={i.img} style={{width:'250px',height:'250px'}} />
              <Card.Body style={{width:'250px'}}>
                <Card.Title className='fw-bold pb-1 fs-5 text-warning'>{i.name }</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </div>
        )})}
    
    </div>
    
  )
}

export default ViewEvents