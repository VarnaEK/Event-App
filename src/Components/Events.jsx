import React from 'react'
import { Button } from 'react-bootstrap'

const Events = () => {
    const [event, setevent] = useState([])

    useEffect(() => {
        const fetchEvents= () =>{
            const data=[
                {id:1,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmtSo_YvfaNkoYTUvDNrTMyqUeo8pYF80kg&usqp=CAU",title:"Wedding"},
                {id:2,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2LAByC7aew25_CRdtj-bYza02xhnNRajog&usqp=CAU",title:"event2"},
                {id:3,url:"https://img.etimg.com/photo/msid-93619818,imgsize-70268/AppleLaptops.jpg",title:"event3"},
                {id:4,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHjM36txZMgvKi5cnl4kmrvvM02Br2ltYoy5kLD3abSSvTAA-ndZREXZC8fu_JO0S1dI&usqp=CAU",title:"event4"},
                {id:5,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmtSo_YvfaNkoYTUvDNrTMyqUeo8pYF80kg&usqp=CAU",title:"event5"},
                {id:6,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2LAByC7aew25_CRdtj-bYza02xhnNRajog&usqp=CAU",title:"event6"},
                {id:7,url:"https://img.etimg.com/photo/msid-93619818,imgsize-70268/AppleLaptops.jpg",title:"event7"},
                {id:8,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHjM36txZMgvKi5cnl4kmrvvM02Br2ltYoy5kLD3abSSvTAA-ndZREXZC8fu_JO0S1dI&usqp=CAU",title:"event8"},
            ]
            setevent(data)
        }
        fetchEvents()
    }, [])
  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View More</Button>
             
            </Card.Body>
        </Card>
    </div>
  )
}

export default Events