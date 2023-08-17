import React, { useState } from 'react'
import { Button, Card} from 'react-bootstrap'
import { toast } from 'react-toastify'

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
const handleInvite = () =>{
  setinvite(false)
  toast.success("request send")
}
  return (
    <div>
      <h2 className='text-center pt-5 pb-5'>Send Request</h2>
    <div className='row'>
      {user.map((i)=>{
        return(
          <div className='user-div'>
          <Card  className='user-div-card' style={{ width: '10rem' }}>
              <Card.Img variant="top" src={i.profilepic} />
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