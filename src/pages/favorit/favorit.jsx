// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux/es';
import { useNavigate } from 'react-router-dom';
import { addfavorit, removfavorit } from '../../store/slices/Addfavorit';
import { decreaseCouter } from '../../store/slices/counter';

const Favorit = () => {
  const navigate=useNavigate()
  const Fav= useSelector((State)=>State.favorit.arr)
  const cont = useSelector((State) => State.counter.counter);

  const dispatch=useDispatch()
 const  removmovi=(m)=>{
var indx=Fav.indexOf(m)
console.log(indx);
dispatch(removfavorit(indx))
dispatch(decreaseCouter())
 
  }


  return (
    <>
     <Row xs={1} md={2} className="g-4">
      {Fav.map((mov) => (
        <Col key={mov.id}>
          <Card>
            <button  style={{fontSize:"20px",color:"red"}} onClick={()=>{removmovi(mov)}}>  Un favorit

     </button>

            <Card.Img variant="top"  src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}/>
            <Card.Body>
              <Card.Title>{mov.original_title}</Card.Title>
              <Card.Text>
               {mov.overview}
              </Card.Text>
              <button className='btn btn-primary'
               onClick={()=>{navigate(`/details/${mov.id}`)}}>
                Details
                </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Favorit
