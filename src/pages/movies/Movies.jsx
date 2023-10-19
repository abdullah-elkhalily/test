// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosmovies from "../../instance/instance";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es";
import { addfavorit } from "../../store/slices/Addfavorit";
import { increaseCounter } from "../../store/slices/counter";

const Movie = () => {
  const Fav = useSelector((State) => State.favorit.arr);
  const cont = useSelector((State) => State.counter.counter);

  const dispatch = useDispatch();
  console.log(Fav);

  const navigate = useNavigate();

  const [Movie, setmovie] = useState([]);

  const [page, setpage] = useState("3");

  useEffect(() => {
    axiosmovies
      .get(`/popular?api_key=cab8d296e6a4911e0235e994e3836b6e&page=${page}`)
      .then((res) => {
     

    res.data.results.map((isf) => {
          isf.iffavorit = false;

        });  
         setmovie(res.data.results);
                 console.log(res.data.results);

      })

      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const previousPage = () => {
    setpage(page - 1);
  };
  const nextPage = () => {
    setpage(page + 1);
  };

  const Addfavorit = (m) => {

   Movie.map((e) => {
        if (e.id == m.id) {
         e.iffavorit=!m.iffavorit

        }
      console.log(e.iffavorit);
      });

    if (!Fav.includes(m)) {
      dispatch(addfavorit(m));
      dispatch(increaseCounter());
            m.iffavorit=true;
         console.log(m.iffavorit);

 
    }
   console.log(Movie);
     setmovie(Movie);


  };
  
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {Movie.map((mov) => (
          <Col key={mov.id}>
            <Card>
              <button
                onClick={() => {
                  Addfavorit(mov);
                }}
              >
                {mov.iffavorit == true ? (
                 <i className="fa-solid fa-heart fa-2xl"></i> 
                ) : (
                  <i className="fa-regular fa-heart fa-2xl"></i>
                )}
              </button>

              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{mov.original_title}</Card.Title>
                <Card.Text>{mov.overview}</Card.Text>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate(`/details/${mov.id}`);
                  }}
                >
                  Details{" "}
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="row">
        {" "}
        <button
          className="btn btn-success col-1"
          onClick={() => {
            previousPage();
          }}
        >
          previous
        </button>
        <div className="col-10"> </div>
        <button
          className="btn btn-success col-1"
          onClick={() => {
            nextPage();
          }}
        >
          {" "}
          Next
        </button>
      </div>
    </>
  );
};

export default Movie;
