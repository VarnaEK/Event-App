import React, { useContext, useEffect, useState } from 'react'
import { Button, Card} from 'react-bootstrap'
import { toast } from 'react-toastify'
import { samplecontext } from '../App'

const InviteUser = () => {
  const [user, setruser] = useState([
    {
        
        id:1,
        profilepic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Nm_QusVWYt7RZox5y3vBMvNla3mP1To9Nw&usqp=CAU',
        user:'Thomas',
        event:'Innaugration'
    },
]
)
const [invite, setinvite] = useState(true)
const sample=useContext(samplecontext);
    const{setshowhomenav,setshowfooter}=sample;
    useEffect(() => {
        setshowhomenav(false)
        setshowfooter(false)
    }, [])
const handleInvite = () =>{
  setinvite(false)
  toast.success("request send")
}
  return (
    <div className='reg-div'>
      <h2 className='text-center pt-5 pb-5 fw-bold fs-1'>Invite Your Friends</h2>
    <div className='row'>
      {user.map((i)=>{
        return(
          <div className='user-div'>
          <Card  className='user-div-card' style={{ width: '10rem' }}>
              <Card.Img variant="top" src={i.profilepic} style={{borderRadius:'50%'}}/>
              <Card.Body>
                  <Card.Title>{i.user}</Card.Title>
                  {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  </Card.Text> */}
                  <Button variant="success" onClick={handleInvite}>{invite ? 'Invite':'request send'}</Button>
              </Card.Body>
          </Card>
          </div>
        )
      })}
        
    </div>
    </div>
  )
}

export default InviteUser