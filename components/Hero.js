import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <>
    <section className="section position-relative mb-5 mt-2">
      <Container >
        <Row className="align-items-center ">
          <Col lg={6}>
            <div className="pr-lg-5 " >

              <p className="text-muted mb-4 pb-2">
              Juicy fan's et Caetera est un restaurant situé à Bali où vous pouvez vous faire livrer
               des oeufs frais selon vôtre besoin, d'ajouter dans votre panier de produits frais livrés à domicile 
               de bons oeufs fermiers,
               conditionnés en lots de 6 ou 12 pièces et garantis de la plus grande fraîcheur, déguster nos jus 
              de fruit 100% naturel, nos gauffres crêpes garnies, etc...
                </p>
              <a href="#" className="btn btn-warning">
                Réservez <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="https://res.cloudinary.com/wil/image/upload/v1631865989/samples/Hero_akde5j.jpg"
               alt="Oeufs" className="img-fluid mx-auto d-block" style ={{
                 maxHeight:'400px'
               }}/>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>

    <style jsx>{`
    .contain {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url('https://res.cloudinary.com/wil/image/upload/v1631865989/samples/Hero_akde5j.jpg');
  
  background-position: center;
  background-size: cover;
    }

`}</style>


    </>
  );
}

export default Hero