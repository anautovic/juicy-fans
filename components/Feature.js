import React from 'react';
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto" />
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3" style={{
                  fontSize:'clamp(1rem, 3vw, 2rem)' 
                }} >{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="btn btn-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark" style={{
              fontSize: 'clamp(3rem, 5vw, 5rem)'
            }} >{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="btn btn-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto" style={{
                maxHeight:'450px'
              }}/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}

const Feature = () => {

  const features = [
    {id : 1, img : "https://res.cloudinary.com/wil/image/upload/v1631808584/samples/crepes_ypb9gb.jpg", title : "Nos crêpes garnies", desc : "Nous vendons des crêpes sucrés, caramel, Caramel beurre salé cookies, etc..", link : "/"},
    {id : 2, img : "https://res.cloudinary.com/wil/image/upload/v1631808584/samples/jus_orange_x5ibbi.jpg", title : "Nos jus de fruits 100% naturels et autres boissons", desc : "Nous vendons des pures jus, des jus cocktails, boissons chaudes, bières, wisky etc...", link : "/"},
    {id : 3, img : "https://res.cloudinary.com/wil/image/upload/v1631808584/samples/plateau_oeufs_kukvvm.jpg", title : "Livraison d'oeufs frais", desc : "Les oeufs de poule font partie des aliments pouvant être cuisinés de 1000 et une façons : œufs durs, en omelette, à la coque, sur le plat, en gelée, pochés, brouillés, montés en neige... En cuisine comme en pâtisserie,  ils sont également utilisés dans un nombre incalculable de préparations. Utiliser alors des oeufs bio ou des oeufs de poule élevée en plein air vous assure une qualité optimale, et un résultat final à la hauteur de vos attentes", link : "/"},
  ];

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
             
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}

export default Feature;