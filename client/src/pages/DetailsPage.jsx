import { Col, Row, Descriptions } from "antd";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { products } from "../data";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-medium-image-zoom/dist/styles.css";
import "../style/detailspage.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DetailsPage = ({ handleClick }) => {
  const navigate = useHistory();
  const { productID } = useParams();
  const product = products.find((prod) => prod._id === productID);

  return (
    <div className="postPage" style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <div className="arrowBackIcon" onClick={() => navigate.goBack()}>
          <ArrowBackIcon style={{ fontSize: "50px" }} />
        </div>
        <h1>{product.name}</h1>
      </div>
      <div
        className="detailsInfos"
        style={{
          justifyContent: "space-around",
          fontWeight: "600",
          marginBottom: "20px",
        }}
      >
        <span style={{ paddingRight: "50px", marginRight: "120px" }}>
          Vissza a termékekhez
        </span>
        <h5 style={{ fontWeight: "300", paddingRight: "24px" }}>
          {product.category}
        </h5>
      </div>

      <br />

      <Row gutter={[16, 16]} className="detailsContainer">
        <Col lg={12} xs={24} className="detailsCol1">
          {/* <Zoom img={product.image} zoomScale={1.2} width={800} height={600}>
            </Zoom>
            <div style={{display:"flex",flexDirection:"row-reverse"}}>
              <img className="detailsImages" src={product.image2} alt=""/>
              <img className="detailsImages" src={product.image3} alt=""/>
              <img className="detailsImages" src={product.image4} alt=""/>
              <img className="detailsImages" src={product.image5} alt=""/>
            </div> */}

          <CarouselProvider
            naturalSlideWidth = { 455 }
            naturalSlideHeight = { 376 } 
            totalSlides={5}
            infinite={true}
            // isPlaying={true}
            // interval={1800}
            className="detailsImage"
          >
            <Slider>
            <Slide index={0}>
                <img className="detailsImages"  src={product.image} alt="" />
              </Slide>
              <Slide index={1}>
                <img className="detailsImages" src={product.image2} alt="" />
              </Slide>
              <Slide index={2}>
                <img className="detailsImages" src={product.image3} alt="" />
              </Slide>
              <Slide index={3}>
                <img className="detailsImages" src={product.image4} alt="" />
              </Slide>
            </Slider>
            <ButtonBack className="detBtn"><ArrowBackIosNewIcon/></ButtonBack>
            <ButtonNext className="detBtn"><ArrowForwardIosIcon/></ButtonNext>
          </CarouselProvider>
           
        </Col>
        <Col lg={12} xs={24} className="detailsCol2">
          <div>
            <div className="details-price">
              <Descriptions.Item label="Price">
                <h4>Ára:</h4>
                {product.price}.-Ft
              </Descriptions.Item>
            </div>
            <div className="details-category">
              <Descriptions.Item label="Category">
                <h4>Termék megnevezése:</h4>
                {product.name}
              </Descriptions.Item>
            </div>
            <div className="details-subcategory">
              <Descriptions.Item label="Subcategory">
                <h4>Kategória:</h4>
                {product.category}
              </Descriptions.Item>
            </div>
            <div className="details-desc">
              <Descriptions.Item label="Description">
                <h4>Termék leírás:</h4>
                <p>{product.desc}</p>
                <p>{product.desc1}</p>
                <p>{product.desc2}</p>
                <p>{product.desc3}</p>
                <p>{product.desc4}</p>
                <p>{product.desc5}</p>
                <p>{product.desc6}</p>
                <p>{product.desc7}</p>
                <p>{product.desc8}</p>
                <p>{product.desc9}</p>
                <p>{product.desc10}</p>
                <p>{product.desc11}</p>
                <p>{product.desc12}</p>
                <p>{product.desc13}</p>
                <p>{product.desc14}</p>
                <p>{product.desc15}</p>
                <p>{product.desc16}</p>
                <p>{product.desc17}</p>
                <p>{product.desc18}</p>
                <p>{product.desc19}</p>
                <p>{product.desc20}</p>
                <p>{product.desc21}</p>
                <p>{product.desc22}</p>
                <p>{product.desc23}</p>
                <p>{product.desc24}</p>
                <p>{product.desc25}</p>
                <p>{product.desc26}</p>
                <p>{product.desc27}</p>
                <p>{product.desc28}</p>
                <p>{product.desc29}</p>
                <p>{product.desc30}</p>
                <p>{product.desc31}</p>
                <p>{product.desc32}</p>
                <p>{product.desc33}</p>
                <p>{product.desc34}</p>
                <p>{product.desc35}</p>
                <p>{product.desc36}</p>
                <p>{product.desc37}</p>
              </Descriptions.Item>
            </div>

            <br />
            <br />
            <br />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailsPage;
