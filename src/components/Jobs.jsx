import React from "react";
import styled from "@emotion/styled";
import insurance from "../images/insurance.gif";
import gifos from "../images/gifos.gif";
import admin from "../images/admin.gif";
import crypto from "../images/crypto.gif";
import financial from "../images/financial.gif";
import weather from "../images/weather.gif";
import { Fade } from "react-slideshow-image";

const GridContainer = styled.div`
  /* display: grid;
  grid-template-columns: 33% 33% 33%;
  margin: 2% auto 0 auto; */
  /* text-align: center; */
  /* height: 400px; */
  width: 60%;
  margin: auto;
  /* display: flex; */
  /* grid-gap: 10px; */
`;

const GridItem = styled.div`
  width: 100%;
  /* height: 250px; */
  /* margin-left: auto;
  margin-right: auto; */
  /* border: 1px solid black; */
`;

const Text = styled.div`
  height: 30px;
  background: rgb(100, 21, 163);
  background: rgb(92, 11, 156);
  background: linear-gradient(
    90deg,
    rgba(92, 11, 156, 1) 0%,
    rgba(165, 51, 255, 1) 100%
  );
  p {
    color: #ffffff;
    font-family: "Lato";
    margin: 0;
  }
`;

const ContentImg = styled.div`
  width: 100%;
  /* box-sizing: border-box; */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Paragraph = styled.p`
  color: #ffffff;
  font-family: "Lato";
  font-weight: bold;
  letter-spacing: 1px;
  display: none;
  :hover {
    display: block;
  }
`;

const Button = styled.button`
  /* position: absolute; */
`;

//1.vamor a segui el ejemplo de gifos con los projects, un div arriba con el nombre del project la captura del project 100%,y la desccruptioc de loslenguaje sutlizados con un hover, al hacer hooever aparecr dicha info
// 2. add slides a los proyectos de manera que se mantegan el 10 vh del img de fondo se vea interactivo
// className="slide-container"

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Jobs = () => {
  return (
    <GridContainer className="slide-container">
      <Fade {...proprietes}>
        <GridItem className="each-fade">
          <Text>
            <p> Insurance Your Car</p>
          </Text>
          <ContentImg>
            <Image src={insurance} alt="insuran" />
            <Paragraph>
              HTML, spinner CSS, React.js, react-transition-group and styled
              components
            </Paragraph>
            <Button>
              <a href="https://insuranceyourcar.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem className="each-fade">
          <Text>
            <p> Gifos Project</p>
          </Text>
          <ContentImg>
            <Image src={gifos} alt="gif" />
            <Paragraph>
              HTML, CSS, Javascript and consuming the Giphy API'S
            </Paragraph>
            <Button>
              <a href="https://gifosproject.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem className="each-fade">
          <Text>
            <p> Admin Appointment </p>
          </Text>
          <ContentImg>
            <Image src={admin} alt="gif" />
            <Paragraph>HTML, CSS, React.js and skeleton</Paragraph>
            <Button>
              <a href="https://adminappointment.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem className="each-fade">
          <Text>
            <p> Crypto</p>
          </Text>
          <ContentImg>
            <Image src={crypto} alt="gif" />
            <Paragraph>
              HTML, CSS, React.js and consuming the Crypto API'S
            </Paragraph>
            <Button>
              <a href="https://apicriptomonedas.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem className="each-fade">
          <Text>
            <p> Financial Plan</p>
          </Text>
          <ContentImg>
            <Image src={financial} alt="gif" />
            <Paragraph>HTML, CSS, React.js and skeleton</Paragraph>
            <Button>
              <a href="https://financialplan.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem className="each-fade">
          <Text>
            <p>Clima App</p>
          </Text>
          <ContentImg>
            <Image src={weather} alt="gif" />
            <Paragraph>
              HTML, CSS, React.js and consuming the weather API'S
            </Paragraph>
            <Button>
              <a href="https://climaweather.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
      </Fade>
    </GridContainer>
  );
};

export default Jobs;
