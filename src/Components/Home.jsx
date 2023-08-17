import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'



const Home = () => {
  const eventImg=[
    {image:"https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-26.jpg?w=2000"},
    {image:"https://cdn0.weddingwire.in/article/9179/3_2/1280/jpg/79719-wedding-events-gautam-khullar-lead-image.jpeg"},
    {image:"https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE="},
    {image:"https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/88A4947%201.jpg?itok=58FHuOc3"},
]
  return (
    <div>
    <div className='main-banner '>
        <div >
          <h2 >Life is an Event</h2>
          <h2>Make it Memorable</h2>
        </div>
    </div>
    <div className='show-events-corousel'>
      <div className='container-home m-auto w-50'>
      <Carousel>
                {eventImg.map((i)=>{
                    return( 
                        <Carousel.Item>
                            <img
                                className="d-block"
                                style={{width:'800px',height:'500px'}}
                                src={i.image}
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                                <h3>{i.name}</h3>
                                <p>{i.qualification},{i.age}</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    )
                })}
            </Carousel>

      </div>

    </div>
    </div>
  )
}

export default Home