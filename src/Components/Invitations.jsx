import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Table} from 'react-bootstrap'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillCircleFill } from 'react-icons/bs'
import { GoIssueClosed } from 'react-icons/go'
import { VscBellDot } from 'react-icons/vsc'
import { toast} from 'react-toastify'
import { samplecontext } from '../App'

const Invitations = () => {
    const sample=useContext(samplecontext);
    const{setshowhomenav}=sample;
    useEffect(() => {
        setshowhomenav(false)
    }, [])
    const [acceptindex, setacceptindex] = useState()
    const [request, setrequest] = useState([
        {
            
            id:1,
            profilepic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Nm_QusVWYt7RZox5y3vBMvNla3mP1To9Nw&usqp=CAU',
            user:'Thomas',
            event:'Innaugration'
        },
        { 
            id:2,
            profilepic:'https://avada.com/wp-content/uploads/2018/11/person_sample_3.jpg',
            user:'Leena',
            event:'Birthdat Cerimoney'
        },
        { 
            id:3,
            profilepic:'https://avada.com/wp-content/uploads/2018/11/person_sample_3.jpg',
            user:'kerina',
            event:'Marriage'
        },
        { 
            id:4,
            profilepic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Nm_QusVWYt7RZox5y3vBMvNla3mP1To9Nw&usqp=CAU',
            user:'Thomas',
            event:'Innaugration'
        },
        { 
            id:5,
            profilepic:'https://www.crucial.com.au/wp-content/uploads/2014/07/example-person.png',
            user:'Thomas',
            event:'Innaugration'
        },
    ]
    )
    const handleAccept = (index,e) => {
        setrequest(request.filter((v, i) => i !== index));
        toast.success(`Invitation Accepted `);
    }
    const handleReject = (index,e) => {
        setrequest(request.filter((v, i) => i !== index));
        toast.error(`Invitation Rejected `);
    }
  return (
    
    <div className='text-center aligh-items-center w-50 m-auto '>
        
        <h1 className='text-center fw-1 mt-5'>Pending Invitations <VscBellDot style={{color:'red',fontSize:'2.3rem'}}/></h1>
        <div className='text-center aligh-items-center m-auto event-invite-div'>
                <Table className='styled-table'>
                    <tbody>
                    {request.map((i,index)=>{
                        return(
                        <tr key={index} className='table-content1'>
                            <td>
                                <h5>New</h5>
                                <br />
                                <BsFillCircleFill style={{color:'red'}}/>
                            </td>
                            <td>{<img src={i.profilepic}style={{borderRadius:'50%',width:"70px"}}/>}</td>
                            <td>
                                <h4>{i.user} invited you</h4>
                                <h5>{i.event}</h5>
                            </td>
                            <td><GoIssueClosed style={{color:"green",fontSize:'2.3rem'}} onClick={(e) =>handleAccept(index,e)}/></td>
                           
                            <td><AiOutlineCloseCircle style={{color:'red',fontSize:'2.3rem'}} onClick={(e) =>handleReject(index,e)}/></td>
                        </tr>
                        )})}
                    </tbody>
                </Table>
              </div>
                
            {/* )
        })} */}
        </div>
        
    // </div>
  )
}

export default Invitations